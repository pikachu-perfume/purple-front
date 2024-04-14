import Banner from "./banner";

// 임시 텍스트. 나중에 api 연동하면 데이터로 교체하고 삭제.
const text = `안개가 자욱한 시원한 향기입니다.안개가 자욱한 시원한 향기입니다. 안개가 자욱한 시원한 향기입니다.안개가 자욱한 시원한 향기입니다. 안개가 자욱한 시원한 향기입니다.안개가 자욱한 시원한 향기입니다.`;

function PublicBanners() {
  return (
    <>
      <Banner text={text} />
    </>
  );
}
export default PublicBanners;
