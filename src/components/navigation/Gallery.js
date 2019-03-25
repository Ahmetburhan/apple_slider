import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://images.apple.com/ca/retail/storelist/images/hero_amsterdam_large_2x.jpg',
        altText: 'Apple Michigan Avenue',
        caption: 'Apple Michigan Avenue',
        href: 'https://www.apple.com/retail/michiganavenue/'
    },
    {
        src: 'https://images.apple.com/ca/retail/storelist/images/hero_parc66_large_2x.jpg',
        altText: 'Apple Parc 66 Jinan',
        caption: 'Apple Parc 66 Jinan',
        href: 'https://www.apple.com/cn/retail/parc66jinan/'
    },
    {
        src: 'https://images.apple.com/ca/retail/storelist/images/hero_brussels_large_2x.jpg',
        altText: 'Apple Brussels',
        caption: 'Apple Brussels',
        href: 'https://www.apple.com/befr/retail/brussels/'
    },
    {
        src: 'https://images.apple.com/ca/retail/storelist/images/hero_amsterdam_large.jpg',
        altText: 'Apple Amsterdam',
        caption: 'Apple Amsterdam',
        href: 'https://www.apple.com/retail/Amsterdam/'
    },
    {
        src: 'https://images.apple.com/ca/retail/storelist/images/hero_michiganave_large.jpg',
        altText: 'Apple Michigan Ave',
        caption: 'Apple Michigan Ave',
        href: '#'
    },
    {
        src: 'https://images.apple.com/ca/retail/storelist/images/hero_newyork_large.jpg',
        altText: 'Apple New York',
        caption: 'Apple New York',
        href: '#'
    },
    {
        src: 'https://images.apple.com/ca/retail/storelist/images/hero_unionsquare_large.jpg',
        altText: 'Apple Union Square',
        caption: 'Apple Union Square',
        href: '#'
    },
    {
        src: 'https://images.apple.com/ca/retail/storelist/images/hero_istanbul_large.jpg',
        altText: 'Apple Istanbul',
        caption: 'Apple Istanbul',
        href: '#'
    },
];

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img className= "image-retail-storelist-hero" src={item.src} alt={item.altText} />
                    <CarouselCaption 
                    /* captionText={item.caption} */ captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}


export default Gallery;