import React from 'react';
import styled from 'styled-components';

import vk from './vk.svg';
import facebook from './face.svg';
import insta from './insta.svg';
import twitter from './twitter.svg';
import viber from './viber.svg';
import apple from './store.svg';
import google from './google.svg';
import win from './win.svg';
import arrow from './right-arrow.svg';

const Footer = styled.footer`
      background-color: #fff;
      padding-top: 32px;
      
      @media screen and (min-width: 1024px) {
        padding-left: 140px;
        padding-right: 140px;
      }
`;

const Title = styled.h3`
      color: #4a4a4a;
      font-size: 12px;
      font-weight: 500;
      margin: 0;
      line-height: 16px;
      padding-top: 16px;
      text-align: left;
`;

const Countries = styled.div`
      display: flex;
      flex-direction: column;
      padding-bottom: 31px;
`;

const Country = styled.a`
      color: #5b5b5c;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 16px;
      padding-top: 12px;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
`;

const LinkFooter = Country.extend`
      text-decoration: none;
      padding-right: 9px;
`;

const MainLink = styled.a`
      color: #5b5b5c;
      font-size: 12px;
      font-weight: 600;
      margin: 0;
      line-height: 16px;
      padding-top: 16px;
      text-decoration: none;
      
      &:after {
        content: '';
        display: inline-block;
        background: url(${arrow});
        width: 10px;
        height: 8px;
        padding-left: 15px;
        background-repeat: no-repeat;
        background-position: center;
      }
      
      &:hover {
        text-decoration: underline;
      }
`;

const AboutFooter = styled.div`
      border-top: 1px solid #e0e6e8;
      
      @media screen and (min-width: 1024px) {
        border-top: none;
      }
`;

const AboutLink = styled.div`
      display: flex;
      flex-wrap: wrap;
      padding-top: 24px;
      
      @media screen and (min-width: 1024px) {
        padding-top: 0;
      }
`;

const SocialNetwork = styled.div`
      padding-top: 16px;
      display: flex;
      flex-wrap: wrap;
`;

const Social = styled.div`
      display: flex;
      flex-wrap: wrap;
      flex-basis: 33%;
      align-items: center;
      padding-bottom: 12px;
      
      @media screen and (min-width: 768px) {
        flex-basis: auto;
      }
`;

const SocialLink = styled.a`
      text-decoration: none;
      color: #4a4a4a;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 16px;
      text-align: left;
      padding-right: 12px;
      
      &:hover {
        opacity: 0.9;
      }
`;

const SocialImage = styled.img`
      padding-right: 3px;
      padding-top: 2px;
`;

const LinkHotel = styled.a`
      text-decoration: none;
      color: #4a4a4a;
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      margin: 0;
      display: block;
      padding-top: 24px;
      padding-bottom: 16px;
      text-align: center;
      
      &:hover {
        text-decoration: underline;
      }
      
      @media screen and (min-width: 768px) {
        padding-top: 16px;
        text-align: left;
      }
`;

const Download = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
      }
`;

const DownloadLink = styled.a`
      padding-bottom: 8px;
      text-decoration: none;
      
      @media screen and (min-width: 768px) {
        padding-right: 10px;
      }
`;

const Image = styled.img``;

const FinalText = styled.p`
      color: #5b5b5c;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
      line-height: 16px;
      padding-top: 24px;
      padding-bottom: 24px;
      display: block;
      text-align: center;
      
      @media screen and (min-width: 768px) {
        text-align: left;
      }
`;

const FooterDown = styled.div`
      @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #e0e6e8;
      }
`;

const FooterLeft = styled.div`
      @media screen and (min-width: 1024px) {
        padding-top: 10px;
      }
`;
const FooterRight = styled.div`
      @media screen and (min-width: 1024px) {
        padding-top: 40px;
      }
`;

export default () => {
    return (
        <Footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            ????????????
                        </Title>
                        <Countries>
                            <Country href='#'>
                                ????????????
                            </Country>
                            <Country href='#'>
                                ??????????????
                            </Country>
                            <Country href='#'>
                                ????????????????????
                            </Country>
                            <Country href='#'>
                                ????????
                            </Country>
                            <Country href='#'>
                                ????????????????
                            </Country>
                            <Country href='#'>
                                ????????????
                            </Country>
                            <MainLink href='#'>
                                ?????? ????????????
                            </MainLink>
                        </Countries>
                    </div>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            ????????????
                        </Title>
                        <Countries>
                            <Country href='#'>
                                ????????????
                            </Country>
                            <Country href='#'>
                                ??????????-??????????????????
                            </Country>
                            <Country href='#'>
                                ??????????????????????
                            </Country>
                            <Country href='#'>
                                ??????????
                            </Country>
                            <Country href='#'>
                                ????????????????????????
                            </Country>
                            <Country href='#'>
                                ????????????
                            </Country>
                            <MainLink href='#'>
                                ?????? ????????????
                            </MainLink>
                        </Countries>
                    </div>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            ????????????????????????
                        </Title>
                        <Countries>
                            <Country href='#'>
                                Air Berlin
                            </Country>
                            <Country href='#'>
                                Air France
                            </Country>
                            <Country href='#'>
                                Alitalia
                            </Country>
                            <Country href='#'>
                                Air Baltica
                            </Country>
                            <Country href='#'>
                                Emirates
                            </Country>
                            <Country href='#'>
                                KLM
                            </Country>
                            <MainLink href='#'>
                                ?????? ????????????????????????
                            </MainLink>
                        </Countries>
                    </div>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            ??????????????????
                        </Title>
                        <Countries>
                            <Country href='#'>
                                ????????????????????
                            </Country>
                            <Country href='#'>
                                ??????????????
                            </Country>
                            <Country href='#'>
                                ????????????????????
                            </Country>
                            <Country href='#'>
                                ??????????????????
                            </Country>
                            <Country href='#'>
                                ??????????????????????
                            </Country>
                            <Country href='#'>
                                ??????????????
                            </Country>
                            <MainLink href='#'>
                                ?????? ??????????????????
                            </MainLink>
                        </Countries>
                    </div>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            ??????????????????????
                        </Title>
                        <Countries>
                            <Country href='#'>
                                MOW-SIP
                            </Country>
                            <Country href='#'>
                                MOW-AER
                            </Country>
                            <Country href='#'>
                                MOW-TIV
                            </Country>
                            <Country href='#'>
                                MOW-MRV
                            </Country>
                            <Country href='#'>
                                LED-MOW
                            </Country>
                            <Country href='#'>
                                MOW-BKK
                            </Country>
                        </Countries>
                    </div>
                    <div className='col-xs-6 col-md-3 col-xl-2'>
                        <Title>
                            ??????????????
                        </Title>
                        <Countries>
                            <Country href='#'>
                                ?????????????? ??????????????????
                            </Country>
                            <Country href='#'>
                                ???????????????? ???????????? ??????
                            </Country>
                            <Country href='#'>
                                ?????????? ???????????? ??????
                            </Country>
                            <Country href='#'>
                                ??????????????????????????????
                            </Country>
                            <Country href='#'>
                                ?????????????? ??????
                            </Country>
                            <Country href='#'>
                                ????????
                            </Country>
                            <Country href='#'>
                                ????????????
                            </Country>
                        </Countries>
                    </div>
                </div>
                <FooterDown>
                    <FooterLeft>
                        <AboutFooter>
                            <AboutLink>
                                <LinkFooter href='#'>
                                    ?? ????????????????
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    ?????????????????????? ??????????????????
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    ??????????????
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    ????????????????
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    ????????????
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    ??????????????
                                </LinkFooter>
                                <LinkFooter href='#'>
                                    White Label ????????????????????
                                </LinkFooter>
                            </AboutLink>
                        </AboutFooter>
                        <SocialNetwork>
                            <Social>
                                <SocialLink href='https://vk.com'>
                                    <SocialImage alt='vk' src={vk} />
                                    ??????????????????
                                </SocialLink>
                            </Social>
                            <Social>
                                <SocialLink href='https://facebook.com'>
                                    <SocialImage alt='face' src={facebook} />
                                    ??????????????
                                </SocialLink>
                            </Social>
                            <Social>
                                <SocialLink href='https://instagram.com'>
                                    <SocialImage alt='insta' src={insta} />
                                    ??????????????????
                                </SocialLink>
                            </Social>
                            <Social>
                                <SocialLink href='https://twitter.com'>
                                    <SocialImage alt='twitter' src={twitter} />
                                    ??????????????
                                </SocialLink>
                            </Social>
                            <Social>
                                <SocialLink href='https://viber.com'>
                                    <SocialImage alt='viber' src={viber} />
                                    ????????????
                                </SocialLink>
                            </Social>
                        </SocialNetwork>
                        <LinkHotel href='#'>
                            ?????????? ?? ???????????????????????? ????????????
                        </LinkHotel>
                    </FooterLeft>
                    <FooterRight>
                        <Download>
                            <DownloadLink href='https://www.apple.com/ios/app-store/'>
                                <Image alt='apple' src={apple} />
                            </DownloadLink>
                            <DownloadLink href='https://store.google.com/'>
                                <Image alt='google' src={google} />
                            </DownloadLink>
                            <DownloadLink href='https://www.microsoft.com/store/appsvnext/windows?rtc=1'>
                                <Image alt='win' src={win} />
                            </DownloadLink>
                        </Download>
                        <FinalText>
                            ?? 2007???2018, Aviasales ??? ?????????????? ????????????????????
                        </FinalText>
                    </FooterRight>
                </FooterDown>
            </div>
        </Footer>
    );
};
