import * as React from 'react';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IImageLocation } from '../../../../api/interfaces/catalog';

interface IImageCarouselProps {
    title: string;
    images: IImageLocation[];
    defaultSelectedImage?: number;
}

export interface IImageCarouselState {
  selectedImageIndex: number;
}

export default class ImageCarousel extends React.Component<IImageCarouselProps, IImageCarouselState> {
  constructor(props: IImageCarouselProps) {
    super(props);

    this.state = {
        selectedImageIndex: props.defaultSelectedImage || 0,
    }

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  public render() {
    const { title, images } = this.props;
    const { selectedImageIndex } = this.state;

    // Find index for next and prev images, allowing looping over the array
    const prevImageIndex: number = this.modulus(selectedImageIndex - 1, images.length);
    const nextImageIndex: number = this.modulus(selectedImageIndex + 1, images.length);

    return (
      <div>
          <h1>{title}</h1>
          <img src={images[selectedImageIndex].image} />
          <div>
            <button onClick={this.previous}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img width={80} src={images[prevImageIndex].image} />
            <img width={80} src={images[selectedImageIndex].image} />
            <img width={80} src={images[nextImageIndex].image} />
            <button onClick={this.next}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
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

  /** 
   * Gives a true mod rather than % provided by remainder
   * This is helpful for looping over the array
   */
  private modulus(num: number, mod: number): number {
    return ((num % mod) + mod) % mod;
  }
}
