import * as React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons/faSearchPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from 'emotion';
import styled from 'react-emotion';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { IImageLocation } from '../../../../api/interfaces/catalog';
import * as styles from '../../styles';
import { TextButton } from '../TextButton';
import { Title } from '../Title';

interface IImageCarouselProps {
  title: string;
  images: IImageLocation[];
  defaultSelectedImage?: number;
}

export interface IImageCarouselState {
  selectedImageIndex: number;
  lightboxIsOpen: boolean;
}

const FlexContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PreviewImage = styled('img')((props: any) => ({
  width: 70,
  border: props.selected && `1px solid ${styles.neutralPrimaryColor}`,
  borderRadius: 3,
  margin: 10,
  verticalAlign: 'middle',
  cursor: 'pointer',
}));

const Pager = styled(TextButton)`
  padding: 10px;
  font-size: 20px;
`;

const primaryImageClassname = css`
  margin-bottom: 30px;
`;

export default class ImageCarousel extends React.Component<IImageCarouselProps, IImageCarouselState> {
  constructor(props: IImageCarouselProps) {
    super(props);

    this.state = {
        selectedImageIndex: props.defaultSelectedImage || 0,
        lightboxIsOpen: false,
    }

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.toggleLightBox = this.toggleLightBox.bind(this);
    this.renderPagerButton = this.renderPagerButton.bind(this);
  }

  public render() {
    const { title, images } = this.props;
    const { selectedImageIndex } = this.state;

    const showPagers: boolean = images.length >= 2;
    const showPreviousImage: boolean = images.length >= 2;
    const showNextImage: boolean = images.length >= 3;

    return (
      <FlexContainer>
          <Title>{title}</Title>
          <img
            src={images[selectedImageIndex].image}
            className={primaryImageClassname}
            alt={`Selected image for ${title}`}
          />
          <div>
            <TextButton onClick={this.toggleLightBox}>
              <FontAwesomeIcon icon={faSearchPlus} /> view larger
            </TextButton>
          </div>
          <div>
            { showPagers && this.renderPagerButton(this.previous, faChevronLeft)}
            { showPreviousImage &&
              <PreviewImage
                src={images[this.modulus(selectedImageIndex - 1, images.length)].image}
                onClick={this.previous}
              />
            }
            <PreviewImage
              src={images[selectedImageIndex].image}
              selected={true}
            />
            { showNextImage &&
              <PreviewImage
                onClick={this.next}
                src={images[this.modulus(selectedImageIndex + 1, images.length)].image}
              />
            }
            { showPagers && this.renderPagerButton(this.next, faChevronRight)}
          </div>
          {this.state.lightboxIsOpen && (
            <Lightbox
              mainSrc={images[selectedImageIndex].image}
              nextSrc={images[this.modulus(selectedImageIndex -1, images.length)].image}
              prevSrc={images[this.modulus(selectedImageIndex + 1, images.length)].image}
              onCloseRequest={this.toggleLightBox}
              onMovePrevRequest={this.previous}
              onMoveNextRequest={this.next}
            />
          )}
      </FlexContainer>
    );
  }

  private renderPagerButton(onClick: React.MouseEventHandler, icon: IconProp) {
    return (
      <Pager onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
      </Pager>
    );
  }

  private previous() {
    this.setState({
      selectedImageIndex: this.modulus(this.state.selectedImageIndex - 1, this.props.images.length),
    });
  }

  private next() {
    this.setState({
      selectedImageIndex: this.modulus(this.state.selectedImageIndex + 1, this.props.images.length),
    });
  }

  private toggleLightBox() {
    this.setState({ lightboxIsOpen: !this.state.lightboxIsOpen })
  }

  /** 
   * Gives a true mod rather than remainder provided by %
   * This is helpful for looping over the array
   */
  private modulus(num: number, mod: number): number {
    return ((num % mod) + mod) % mod;
  }
}
