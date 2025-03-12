import React, { useState } from "react";
import { MdArrowDropDown, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { featuresItems } from "../../utils/constant";

const Products = () => {
  // Fashion
  const fashionImgsSlice1 = featuresItems.slice(0, 8);
  const fashionImgsSlice2 = featuresItems.slice(8, 16);
  const fashionImgsSlice3 = featuresItems.slice(16, 24);
  const fashionImgsSlice4 = featuresItems.slice(24, 32);
  const fashionImgsSlice5 = featuresItems.slice(32, 40);

  const mapFashionOption = [
    fashionImgsSlice1,
    fashionImgsSlice2,
    fashionImgsSlice3,
    fashionImgsSlice4,
    fashionImgsSlice5,
  ];

  // Price
  const [fashionImgsPrice, setFashionImgsPrice] = useState([]);
  const priceImgsSlice1 = fashionImgsPrice.slice(0, 6);
  const priceImgsSlice2 = fashionImgsPrice.slice(6, 12);
  const priceImgsSlice3 = fashionImgsPrice.slice(12, 18);
  const priceImgsSlice4 = fashionImgsPrice.slice(18, 24);

  const mapPriceOption = [
    priceImgsSlice1,
    priceImgsSlice2,
    priceImgsSlice3,
    priceImgsSlice4,
  ];

  const fashionImgsPriceFunction = (price, price2) => {
    const answer = featuresItems.filter(
      (item) => item.price > price && item.price <= price2
    );
    setFashionImgsPrice(answer);
  };

  // Brand
  const [fashionImgsTags, setFashionImgsTags] = useState([]);
  const tagsImgsSlice1 = fashionImgsTags.slice(0, 6);
  const tagsImgsSlice2 = fashionImgsTags.slice(6, 12);
  const tagsImgsSlice3 = fashionImgsTags.slice(12, 18);
  const tagsImgsSlice4 = fashionImgsTags.slice(18, 24);

  const mapTagsOption = [
    tagsImgsSlice1,
    tagsImgsSlice2,
    tagsImgsSlice3,
    tagsImgsSlice4,
  ];

  const productBrandFunction = (tag) => {
    const answer = featuresItems.filter((item) => item.brand === tag);
    setFashionImgsTags(answer);
  };

  // Types
  const [productType, setProductType] = useState([]);
  const productType1 = productType.slice(0, 6);
  const productType2 = productType.slice(6, 12);
  const productType3 = productType.slice(12, 18);
  const productType4 = productType.slice(18, 24);

  const mapTypeOption = [
    productType1,
    productType2,
    productType3,
    productType4,
  ];

  const productTypeFunction = (tag) => {
    const answer = featuresItems.filter((item) => item.type === tag);
    setProductType(answer);
  };

  // NavBTN
  const [numClicked, setNumClicked] = useState(0);
  const [numClicked2, setNumClicked2] = useState(0);
  const [condition, setCondition] = useState(false);
  const [condition2, setCondition2] = useState(null);

  // Filters -_-

  const filterRender = () => {
    if (condition2 === 0) {
      return mapPriceOption[numClicked2];
    } else if (condition2 === 1) {
      return mapTagsOption[numClicked2];
    } else if (condition2 === 2) {
      return mapTypeOption[numClicked2];
    }
  };

  const filterNav = condition2 ? fashionImgsPrice : fashionImgsTags;

  const itemsToRender = condition ? filterRender() : mapFashionOption[numClicked];

  return (
    <>
      <div className="py-20 lg:py-10">
        <h1 className="text-[30px] font-semibold font-bitter text-center">
          Products
        </h1>
        <h3 className="text-[20px] font-semibold sm:px-5 md:px-10 xl:px-200 mb-3">
          Filters
        </h3>
        <div className="fashion__products__grid sm:px-2 md:px-5 xl:px-20">
          <div className="flex flex-col pl-5 gap-4 filter__display">
            {/* <div className="flex flex-col gap-3">
                            <p>Color:</p>
                            <div className="flex flex-wrap gap-3 opacity-70">
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#FF6C6C]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#FF7629]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#FFF06C]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#9BFF6C]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6CFF9E]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6CFFDC]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6CB9FF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6CF6FF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6CA7FF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#6C7BFF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#8A6CFF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#B66CFF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#FC6CFF]"></div>
                                <div className="h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#FF6C6C]"></div>
                            </div>
                        </div> */}
            <div className="flex flex-col gap-3">
              <p className="font-bitter font-semibold">Prices:</p>
              <div>
                <div
                  onClick={() => {
                    fashionImgsPriceFunction(300, 400);
                    setCondition(true);
                    setCondition2(0);
                  }}
                  className="tracking-tight text-[18px] opacity-70 cursor-pointer"
                >
                  $300-400
                </div>
                <div
                  onClick={() => {
                    fashionImgsPriceFunction(400, 500);
                    setCondition(true);
                    setCondition2(0);
                  }}
                  className="tracking-tight text-[18px] opacity-70 cursor-pointer"
                >
                  $400-$500
                </div>
                <div
                  onClick={() => {
                    fashionImgsPriceFunction(500, 600);
                    setCondition(true);
                    setCondition2(0);
                  }}
                  className="tracking-tight text-[18px] opacity-70 cursor-pointer"
                >
                  $500-$600
                </div>
                <div
                  onClick={() => {
                    fashionImgsPriceFunction(600, 10000);
                    setCondition(true);
                    setCondition2(0);
                  }}
                  className="tracking-tight text-[18px] opacity-70 cursor-pointer"
                >
                  $600- Above
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bitter font-semibold">Brands:</p>
              <div className="flex flex-wrap w-[70%] gap-4 opacity-70">
                <p
                  onClick={() => {
                    productBrandFunction("Daikin");
                    setCondition2(1);
                    setCondition(true);
                  }}
                  className="cursor-pointer"
                >
                  Daikin
                </p>
                <p
                  onClick={() => {
                    productBrandFunction("LG");
                    setCondition2(1);
                    setCondition(true);
                  }}
                  className="cursor-pointer"
                >
                  LG
                </p>
                <p
                  onClick={() => {
                    productBrandFunction("Samsung");
                    setCondition2(1);
                    setCondition(true);
                  }}
                  className="cursor-pointer"
                >
                  Samsung
                </p>
                <p
                  onClick={() => {
                    productBrandFunction("Mitsubishi Electric");
                    setCondition2(1);
                    setCondition(true);
                  }}
                  className="cursor-pointer"
                >
                  Mitsubishi Electric
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bitter font-semibold">Type:</p>
              <div className="flex flex-col gap-2 opacity-70">
                <p
                  onClick={() => {
                    productTypeFunction("Split AC");
                    setCondition2(2);
                    setCondition(true);
                  }}
                  className="cursor-pointer"
                >
                  Split AC
                </p>
                <p
                  onClick={() => {
                    productTypeFunction("Window AC");
                    setCondition2(2);
                    setCondition(true);
                  }}
                  className="cursor-pointer"
                >
                  Window AC
                </p>
                <p
                  onClick={() => {
                    productTypeFunction("Cassette AC");
                    setCondition2(2);
                    setCondition(true);
                  }}
                  className="cursor-pointer"
                >
                  Cassette AC
                </p>
                <p
                  onClick={() => {
                    productTypeFunction("Floor-Standing AC");
                    setCondition2(2);
                    setCondition(true);
                  }}
                  className="cursor-pointer"
                >
                  Floor-Standing AC
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center cursor-pointer mb-2">
              <div onClick={() => setCondition(false)}>Best Selling </div>
              <MdArrowDropDown />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center w-fit gap-5">
                {itemsToRender.map(({ image, name, price }, i) => (
                  <Link
                    to={`/gallery/${name}`}
                    key={i}
                    className="flex flex-col gap-2 shadow-lg p-2 rounded-lg"
                  >
                    <img
                      src={image}
                      alt=""
                      className="h-[270px] object-contain w-[240px] sm:h-[300px] sm:w-[240px] xl:h-[270px] xl:w-[230px]"
                    />
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="opacity-80">${price}.00</p>
                    </div>
                  </Link>
                ))}
              </div>
              {condition ? (
                <div className="flex gap-2 mt-4">
                  <p
                    onClick={() => setNumClicked2(0)}
                    className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                  >
                    1
                  </p>
                  {filterNav.length > 6 && (
                    <p
                      onClick={() => setNumClicked2(1)}
                      className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                    >
                      2
                    </p>
                  )}
                  {filterNav.length > 12 && (
                    <p
                      onClick={() => setNumClicked2(2)}
                      className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                    >
                      3
                    </p>
                  )}
                  {filterNav.length > 18 && (
                    <p
                      onClick={() => setNumClicked2(3)}
                      className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                    >
                      4
                    </p>
                  )}
                </div>
              ) : (
                <div className="flex gap-2 mt-4">
                  <p
                    onClick={() => setNumClicked(0)}
                    className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                  >
                    1
                  </p>
                  <p
                    onClick={() => setNumClicked(1)}
                    className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                  >
                    2
                  </p>
                  <p
                    onClick={() => setNumClicked(2)}
                    className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                  >
                    3
                  </p>
                  <p
                    onClick={() => setNumClicked(3)}
                    className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                  >
                    4
                  </p>
                  <p
                    onClick={() => setNumClicked(4)}
                    className="h-[25px] flex justify-center items-center cursor-pointer w-[25px] rounded-[50%] bg-gray-200"
                  >
                    5
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
