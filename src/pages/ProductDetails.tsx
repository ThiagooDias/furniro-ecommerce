import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductById } from "../hooks/useProductById";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import arrowIcon from "../assets/icon/arrow-down-alt2.svg";
import starIcon from "../assets/icon/star.svg";
import facebookIcon from "../assets/icon/icons_facebook-fill.png";
import linkedinIcon from "../assets/icon/icons_linkedin-box-fill.svg";
import twitterIcon from "../assets/icon/icon_twitter.svg";
import ProductsSection from "../components/ProductsSection";
import { useCategoryById } from "../hooks/useCategoryById";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductById(id);

  const [activeButtonSize, setActiveSizeButton] = useState<number>(0);
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [color, setColor] = useState<number>(0);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [showMoreCount, setShowMoreCount] = useState<number>(1);
  const [limitProducts, setLimitProducts] = useState<number>(4);
  const [mainImage, setMainImage] = useState<string | undefined>(
    product?.otherImagesLink[0]
  );

  useEffect(() => {
    setMainImage(product?.otherImagesLink[0]);
  }, [product?.otherImagesLink]);

  const navigate = useNavigate();

  const { category } = useCategoryById(product?.categoryId.toString());

  const handleShowMore = () => {
    setShowMoreCount(showMoreCount + 1);
    setLimitProducts(8);

    if (showMoreCount === 2) {
      navigate("/shop", { state: product?.categoryId });
    }
  };

  return (
    <div>
      <div className="flex items-center gap-5 iphone12:p-4 md:pl-24 mb-8 h-20 bg-secondary-200">
        <span>Home</span>
        <img src={arrowIcon} alt="" />
        <span>Shop</span>
        <img src={arrowIcon} alt="" />
        <div className="border-l-2 h-9 border-gray-400 pl-8 flex items-center">
          {product?.name}
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <p>An error has occurred! Please reload the page</p>
      ) : (
        <div>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 iphone12:grid-cols-1 gap-20">
              <div className="iphone12:grid md:flex gap-5">
                <div className="flex md:flex-col justify-center order-2 gap-8">
                  {product?.otherImagesLink.map((img, i) => (
                    <img
                      key={i}
                      className={`size-20 object-cover cursor-pointer ${
                        mainImage === img
                          ? "outline outline-8 outline-orange-200"
                          : ""
                      }`}
                      src={img}
                      onClick={() => {
                        setMainImage(img);
                      }}
                      alt=""
                    />
                  ))}
                </div>

                <div className="flex justify-center">
                  <img
                    className=" md:h-[500px] md:w-[460px] object-cover"
                    src={mainImage}
                    alt=""
                  />
                </div>
              </div>

              <div className="iphone12:px-5">
                <h2 className="iphone12:text-4xl md:text-5xl mb-4">{product?.name}</h2>

                <h3 className="text-secondaryText text-2xl mb-4">
                  Rp {product?.price}
                </h3>

                <div className="flex gap-4 mb-4">
                  <div className="flex gap-1">
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                  </div>
                  <div className="border-l-2 h-7 border-gray-400 pl-3 pt-1 flex items-center ">
                    5 Customer Review
                  </div>
                </div>

                <p className="iphone12:w-[350px] md:w-[424px] text-justify mb-6">
                  {product?.largeDescription}
                </p>

                <p className="text-sm text-secondaryText mb-3">Size</p>

                <div className="flex gap-4 mb-5">
                  <button
                    className={`${
                      activeButtonSize === 0
                        ? "bg-primary text-white"
                        : "bg-secondary-200"
                    } text-sm size-9 flex justify-center items-center rounded-lg hover:bg-primary hover:text-white`}
                    onClick={() => setActiveSizeButton(0)}
                  >
                    L
                  </button>

                  <button
                    className={`${
                      activeButtonSize === 1
                        ? "bg-primary text-white"
                        : "bg-secondary-200"
                    } text-sm size-9 flex justify-center items-center rounded-lg hover:bg-primary hover:text-white`}
                    onClick={() => setActiveSizeButton(1)}
                  >
                    XL
                  </button>

                  <button
                    className={`${
                      activeButtonSize === 2
                        ? "bg-primary text-white"
                        : "bg-secondary-200"
                    } text-sm size-9 flex justify-center items-center rounded-lg hover:bg-primary hover:text-white`}
                    onClick={() => setActiveSizeButton(2)}
                  >
                    XS
                  </button>
                </div>

                <p className="text-sm text-secondaryText mb-3">Color</p>
                <div className="flex gap-4 mb-8">
                  <button
                    className={`${
                      color === 0 ? "outline outline-4 outline-cyan-400" : ""
                    } rounded-full size-8 bg-indigo-500  `}
                    onClick={() => setColor(0)}
                  />

                  <button
                    className={`${
                      color === 1 ? "outline outline-4 outline-cyan-400" : ""
                    } rounded-full size-8 bg-black`}
                    onClick={() => setColor(1)}
                  />

                  <button
                    className={`${
                      color === 2 ? "outline outline-4 outline-cyan-400" : ""
                    } rounded-full size-8 bg-primary `}
                    onClick={() => setColor(2)}
                  />
                </div>

                <div className="flex iphone12:flex-col gap-4 mb-14">
                  <div className="border-2 border-gray-400 rounded-xl iphone12:h-16 md:py-4 px-4 md:w-28 flex justify-between items-center">
                    <button
                      className="p-1"
                      onClick={() => {
                        productQuantity === 1
                          ? setProductQuantity(1)
                          : setProductQuantity(productQuantity - 1);
                      }}
                    >
                      -
                    </button>
                    {productQuantity}
                    <button
                      className="p-1"
                      onClick={() => {
                        setProductQuantity(productQuantity + 1);
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="px-12 py-4 border-2 border-black rounded-xl hover:bg-green-500 hover:border-green-500 hover:text-white"
                    onClick={() => setShowNotification(true)}
                  >
                    Add To Cart
                  </button>

                  {showNotification && (
                    <Notification
                      message="Item added to cart!"
                      duration={3000}
                      onClose={() => setShowNotification(false)}
                    />
                  )}

                  <button className="iphone12:h-16 iphone12:px-6 md:px-12 md:py-4 border-2 border-black rounded-xl hover:border-[3px] hover:font-semibold box-border">
                    + Compare
                  </button>
                </div>

                <hr className="bg-secondaryText mb-10" />

                <div className="flex justify-between text-secondaryText w-72">
                  <div className="flex flex-col gap-3 mb-14">
                    <span>SKU</span>
                    <span>Category</span>
                    <span>Tag</span>
                    <span>Share</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span>: {product?.sku}</span>
                    <span>: {category?.name}</span>
                    <span>: Sofa, Chair, Home, Shop</span>
                    <div className="flex items-center gap-6">
                      :
                      <img className="size-5" src={facebookIcon} alt="" />
                      <img src={linkedinIcon} alt="" />
                      <img src={twitterIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="bg-secondaryText mb-10" />

          {/* Description */}
          <div className="iphone12:px-10 md:px-48 mb-24">
            <h2 className="font-semibold text-2xl text-center mb-10">
              Description
            </h2>
            <div className="text-justify text-secondaryText flex flex-col gap-7">
              <p>
                Embodying the raw, wayward spirit of rock n roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>

            {/* Related Products */}
          </div>
          <h2 className="font-semibold text-4xl text-center mb-10">
            Related Products
          </h2>
          <ProductsSection
            limit={limitProducts}
            category={product?.categoryId}
          />
          <div className="flex justify-center">
            <button
              className="text-primary font-semibold border-2 border-primary hover:bg-primary hover:text-white py-3 px-16 mb-20"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetails;
