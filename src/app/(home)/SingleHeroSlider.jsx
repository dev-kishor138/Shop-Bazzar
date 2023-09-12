

const SingleHeroSlider = ({ slider = {} }) => {
    const { bg, title } = slider;

    return (
        <>
            <div
                className="image-layer"
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            ></div>
            <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-white main-slider__details">
                <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl ">
                    {title}
                </h2>
            </div>
        </>
    );
};

export default SingleHeroSlider;
