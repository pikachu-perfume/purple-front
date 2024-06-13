// "use client";

// import {
//   FC,
//   MouseEventHandler,
//   TouchEventHandler,
//   useEffect,
//   useState,
// } from "react";

// import { PropTypes as RatingPropTypes } from "./Rating";
// import styled from "@emotion/styled";

// type PropTypes = {
//   onChange?: (value: number, index: number) => void;
//   size: number;
//   index: number;
// } & Omit<RatingPropTypes, "onChange">;

// const calculateClip = (
//   pointX: number,
//   width: number,
//   precision: number,
// ): number => {
//   const percentage = Math.floor((pointX / width) * 10) / 10;
//   let grade = Math.floor(percentage / precision);
//   if (precision === 1) return 1;
//   else if (grade <= 0) return 0;
//   grade *= precision;
//   return percentage >= 1 ? 1 : grade;
// };

// const RatingComponent: FC<PropTypes> = ({
//   precision = 1,
//   initialValue = 0,
//   onChange,
//   size,
//   disabled,
//   index,
// }) => {
//   const [currentValue, setValue] = useState(initialValue);

//   const onChangeCallback = (value: number) => {
//     setValue(value);
//     onChange?.(value, index);
//   };

//   const handlePrecision: MouseEventHandler<HTMLImageElement> = event => {
//     if (disabled) return;
//     const rect = event.currentTarget.getBoundingClientRect();
//     const clickX = event.clientX - rect.left;
//     const width = rect.width;
//     onChangeCallback(calculateClip(clickX, width, precision));
//   };

//   const onTouchMove: TouchEventHandler<HTMLImageElement> = event => {
//     if (disabled) return;
//     const touchLocation = event.touches[0];
//     const rect = event.currentTarget.getBoundingClientRect();
//     const touchX = touchLocation.clientX - rect.left;
//     const width = rect.width;
//     console.log(width);
//     console.log(touchX);
//     onChangeCallback(calculateClip(touchX, width, precision));
//   };

//   useEffect(() => {
//     currentValue !== initialValue && setValue(initialValue);
//   }, [initialValue]);

//   return (
//     <S.Wrapper
//       size={size}
//       value={currentValue}
//       onMouseMove={handlePrecision}
//       onTouchMove={onTouchMove}
//     >
//       <img src="/assets/images/star.png" className={"cover"} />
//       <img src="/assets/images/starOpacity.png" className={"base"} />
//     </S.Wrapper>
//   );
// };
// export default RatingComponent;

// const Wrapper = styled.div<{ size: number; value: number }>`
//   display: inline-block;
//   width: ${({ size }) => `${size}px`};
//   height: ${({ size }) => `${size}px`};
//   position: relative;

//   & > img {
//     position: absolute;
//     height: 100%;
//     width: 100%;
//   }

//   & .base {
//     z-index: 1;
//   }
//   & .cover {
//     z-index: 2;
//     clip-path: ${({ value }) => {
//       const width = value * 100;
//       return `polygon(0 0, ${width}% 0, ${width}% 100%, 0 100%)`;
//     }};
//   }
// `;

// const S = {
//   Wrapper,
// };
