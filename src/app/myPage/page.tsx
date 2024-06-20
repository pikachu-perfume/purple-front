"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import ProfileBox from "./_components/ProfileBox/ProfileBox";
import PurfumeScroll from "./_components/PurfumeScroll/PurfumeScroll";
import { S } from "./styles";
import { useRouter } from 'next/navigation';

const MyPage = () => {
    const route = useRouter();

    return (
        <>
            <NavHeader></NavHeader>
            <S.ProfileBoxOuter>
                <ProfileBox onClick={() => route.push('/myPage/profileSetting')} />
            </S.ProfileBoxOuter>
            <S.Title>
                취향통계
            </S.Title>
            <S.Title>
                작성한 코멘트
            </S.Title>
            <PurfumeScroll />
        </>
    );
};

export default MyPage;