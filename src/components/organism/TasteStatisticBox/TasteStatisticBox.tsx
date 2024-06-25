import React, { useEffect, ReactNode } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import Link from "next/link";
import { S } from "./styles";

ChartJS.register(ArcElement);

{
  /* TODO: 실 데이터로 변경 시 정해진 chartData type 파일에 정리  */
}
type chartData = {
  tasteName: string;
  ranking: number;
  score: number;
  percentageScore: number;
  color: string;
};

type Props = {
  chartData: chartData[];
  reviewsNum: number;
  children?: ReactNode;
};

const TasteStatisticBox = ({ chartData, reviewsNum, children }: Props) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const plugins = [
    {
      beforeDraw: chart => {
        const { width, height, ctx } = chart;
        ctx.restore();

        // text1 스타일 설정
        const text1 = `${reviewsNum}개`;
        ctx.font = "bold 20px sans-serif";
        ctx.textBaseline = "middle";
        const text1X = Math.round((width - ctx.measureText(text1).width) / 2);
        const text1Y = height / 2 - 8;
        ctx.fillText(text1, text1X, text1Y);

        // text2 스타일 설정
        const text2 = "평가";
        ctx.font = "14px sans-serif";
        ctx.textBaseline = "middle";
        const text2X = Math.round((width - ctx.measureText(text2).width) / 2);
        const text2Y = height / 2 + 12;
        ctx.fillText(text2, text2X, text2Y);

        ctx.save();
      },
    },
  ];

  let data = {
    datasets: [
      {
        data: [42, 33, 25],
        backgroundColor: ["#FF6384", "#FFCE56", "#FF9F40"],
      },
    ],
  };

  useEffect(() => {
    let percentageList = chartData.map(data => data.percentageScore);
    let backgroundColor = chartData.map(data => data.color);

    data.datasets[0].data = percentageList;
    data.datasets[0].backgroundColor = backgroundColor;
  }, []);

  return (
    <S.Wrapper>
      <div style={{ width: "15rem", height: "15rem" }}>
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
      <ul>
        {chartData.map((item, index) => {
          return (
            <S.ChartLineText key={index}>
              <div>
                <div style={{ background: item.color }}></div>
                <span>{`${item.ranking}위 ${item.tasteName}`}</span>
              </div>
              <span>{`${item.score}점 (${item.percentageScore}%)`}</span>
            </S.ChartLineText>
          );
        })}
      </ul>
      {children}
    </S.Wrapper>
  );
};

export default TasteStatisticBox;
