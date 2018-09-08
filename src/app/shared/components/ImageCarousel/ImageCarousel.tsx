import * as React from 'react';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import { IImageLocation } from '../../../../api/interfaces/catalog';

interface IImageCarouselProps {
    title: string;
    images: IImageLocation[];
    defaultSelectedImage?: number;
}

export interface IImageCarouselState {
  selectedImageIndex: number;
  lightboxIsOpen: boolean;
}

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
  }

  public render() {
    const { title, images } = this.props;
    const { selectedImageIndex } = this.state;

    return (
      <div>
          <h1>{title}</h1>
          <img src={images[selectedImageIndex].image} />
          <div>
            <button onClick={this.toggleLightBox}>View Larger</button>
          </div>
          <div>
            {
              images.length >= 2 && // Only if chevron button there are >=2 total images
              <button onClick={this.previous}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            }
            {
              images.length >= 2 &&  // Only show prev image if there are >=2 total images
              <img width={80} src={images[this.modulus(selectedImageIndex - 1, images.length)].image} />
            }
            <img width={80} src={images[selectedImageIndex].image} />
            {
              images.length >= 3 && // Only show next image if there are >=3 total images
              <img width={80} src={images[this.modulus(selectedImageIndex + 1, images.length)].image} />
            }
            {
              images.length >= 2 && // Only if chevron button there are >=2 total images
              <button onClick={this.next}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            }
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
      </div>
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
