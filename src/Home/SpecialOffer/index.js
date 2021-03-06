import React from 'react';
import styled from 'styled-components';

import pobeda from "./pobeda.png";
import luft from "./luft.png";
import icon from "./icon.svg";

const SpecialOffer = styled.div`
      background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
      
      @media screen and (min-width: 1024px) {
        padding-left: 140px;
        padding-right: 140px;
      }
`;

const TitleSpecialOffer = styled.h2`
      padding-top: 16px;
      padding-bottom: 24px;
      color: #fff;
      font-size: 28px;
      font-weight: 400;
      margin: 0;
      line-height: 33px;
      text-align: left;
      width: 80%;
`;

const Content = styled.div`
      @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: nowrap;
      }
`;

const Card = styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 12px;
      min-height: 270px;
      background-color: #fff;
      
      @media screen and (min-width: 768px) {
        flex-basis: 50%;
        margin-right: 16px;
        
        &:last-child {
          margin-right: 0;
        }
      }
      
      @media screen and (min-width: 1024px) {
        margin-right: 68px;
        
        &:last-child {
          margin-right: 0;
        }
      }
`;

const HeaderCard = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 22px 16px 21px 16px;
      background-color: #cd2027;
      position: relative;
`;

const TitleCard = styled.p`
      margin: 0;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
`;

const MainCard = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fff;
      padding-top: 20px;
      min-height: 207px;
`;

const CardUp = styled.div`
      display: flex;
      justify-content: space-between;
      padding: 0 8px;
      padding-bottom: 24px;
`;

const Logo = styled.img`
      height: 30px;
      width: 122px;
      
      @media screen and (min-width: 768px) {
        width: 100px;
        height: 25px;
      }
`;

const CardInfo = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
`;

const CostCard = styled.div`
      color: #5c5c5c;
      text-align: right;
      display: flex;
      flex-direction: row;
      min-height: 16px;
      margin-bottom: 10px;
`;

const TextCard = styled.p`
      margin: 0;
      padding: 0;
      color: #5c5c5c;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 16px;
      padding-right: 4px;  
`;

const PriceCard = styled.p`
      margin: 0;
      margin: 0
      color: #5c5c5c;
      font-size: 20px;
      line-height: 16px;
      text-align: right;
`;

const DayCard = styled.p`
      margin: 0;
      color: #d93633;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 15px;
`;

const AdsCard = styled.p`
      margin: 0;
      padding: 0;
      color: #242424;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 16px;
      padding: 0 8px;
`;

const ButtonCard = styled.button`
      border: 2px solid #cd1f27;
      margin: 40px 8px 16px 8px;
      color: #d93533;
      background-color: #fff;
      padding: 10px 0;
      cursor: pointer;
      
      &:hover {
        color: #ff9d1b;
        border-color: #ff9d1b;
        transition: 0.1s;
      }
`;

const Icon = styled.img`
      width: 38px;
      height: 38px;
      position: absolute;
      right: 16px;
`;

const ContentInfo = styled.div`
      @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 8px;
        padding-bottom: 24px;
      }
`;

const LinkAllOffer = styled.a`
      display: block;
      text-align: center;
      text-decoration: underline;
      padding-top: 32px;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      line-height: 20px;
      text-align: center;
      cursor: pointer;
      
      @media screen and (min-width: 768px) {
        padding-top: 0;
      }
      
      &:hover {
        transition: 0.15s;
        color: #ff9d1b;
      }
`;

const Text = styled.p`
      margin: 0;
      display: block;
      text-align: center;
      padding-top: 8px;
      padding-bottom: 24px;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      margin: 0;
      line-height: 20px;
      text-align: center;
      
      @media screen and (min-width: 768px) {
        padding: 0;
      }
`;

export default () => {
    return (
        <SpecialOffer>
            <div className="container">
                <TitleSpecialOffer>
                    ?????????????????????????????? ???? ????????????????????
                </TitleSpecialOffer>
                <Content>
                    <Card>
                        <HeaderCard>
                            <TitleCard>
                                ???????????? ???? 499 ????????????!
                            </TitleCard>
                        </HeaderCard>
                        <MainCard>
                            <CardUp>
                                <Logo alt="pobeda" src={pobeda} />
                                <CardInfo>
                                    <CostCard>
                                        <TextCard>
                                            ????
                                        </TextCard>
                                        <PriceCard>
                                            499??????
                                        </PriceCard>
                                    </CostCard>
                                    <DayCard>
                                        ?????????????????? 45 ????????
                                    </DayCard>
                                </CardInfo>
                            </CardUp>
                            <AdsCard>
                                ???????????? ???? 499 ????????????!
                            </AdsCard>
                            <AdsCard>
                                ?????????????????????? ?????????????????????? ???? ???????????????????????? ????????????
                            </AdsCard>
                            <ButtonCard>
                                ???????????? ??????????????????????
                            </ButtonCard>
                        </MainCard>
                    </Card>
                    <Card>
                        <HeaderCard>
                            <TitleCard>
                                ?? ??????-???????? ???? 20 680??????
                            </TitleCard>
                            <Icon alt="icon" src={icon} />
                        </HeaderCard>
                        <MainCard>
                            <CardUp>
                                <Logo alt="luft" src={luft} />
                                <CardInfo>
                                    <CostCard>
                                        <TextCard>
                                            ????
                                        </TextCard>
                                        <PriceCard>
                                            20 680??????
                                        </PriceCard>
                                    </CostCard>
                                    <DayCard>
                                        ?????????????????? 19 ????????
                                    </DayCard>
                                </CardInfo>
                            </CardUp>
                            <AdsCard>
                                ???? ???????????? ?? ?????? ???? 20680 ????????????! ?????????????????????? ?????????????????????? ????
                                ???????????????????????? Lufthansa
                            </AdsCard>
                            <ButtonCard>
                                ???????????? ??????????????????????
                            </ButtonCard>
                        </MainCard>
                    </Card>
                    <Card>
                        <HeaderCard>
                            <TitleCard>
                                ?? ??????-???????????????? ????...
                            </TitleCard>
                            <Icon alt="icon" src={icon} />
                        </HeaderCard>
                        <MainCard>
                            <CardUp>
                                <Logo alt="luft" src={luft} />
                                <CardInfo>
                                    <CostCard>
                                        <TextCard>
                                            ????
                                        </TextCard>
                                        <PriceCard>
                                            20 350??????
                                        </PriceCard>
                                    </CostCard>
                                    <DayCard>
                                        ?????????????????? 19 ????????
                                    </DayCard>
                                </CardInfo>
                            </CardUp>
                            <AdsCard>
                                ???? ???????????? ?? ?????? ???? 22360 ????????????! ?????????????????????? ?????????????????????? ????
                                ???????????????????????? Lufthansa
                            </AdsCard>
                            <ButtonCard>
                                ???????????? ??????????????????????
                            </ButtonCard>
                        </MainCard>
                    </Card>
                </Content>
                <ContentInfo>
                    <LinkAllOffer>
                        ???????????????? ?????? ??????????????????????????????
                    </LinkAllOffer>
                    <Text>
                        * ?????????????? ???????? ???? ??????????????????????
                    </Text>
                </ContentInfo>
            </div>
        </SpecialOffer>
    )
}
