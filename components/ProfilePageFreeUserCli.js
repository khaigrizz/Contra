import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const ProfilePageFreeUserCli = () => {
  return (
    <View style={styles.profilePageFreeUserCli}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <View style={styles.profileShadowBox}>
          <View style={styles.barsStatusBarIphoneL}>
            <View style={styles.battery}>
              <View style={styles.border} />
              <Image
                style={styles.capIcon}
                contentFit="cover"
                source={require("../assets/cap.png")}
              />
              <View style={styles.capacity} />
            </View>
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              contentFit="cover"
              source={require("../assets/cellular-connection.png")}
            />
            <View style={styles.timeStyle}>
              <Text style={styles.time}>9:41</Text>
            </View>
          </View>
          <Text style={[styles.myProfile, styles.myProfileTypo]}>
            My Profile
          </Text>
          <Text style={styles.myCard}>My Card</Text>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={styles.childCardShadowBox} />
            <View style={styles.header}>
              <Image
                style={styles.memojiIcon}
                contentFit="cover"
                source={require("../assets/memoji.png")}
              />
              <Text
                style={[styles.freelancerArtist, styles.helloWelcomeToTypo]}
              >
                Freelancer, Artist
              </Text>
              <Text style={[styles.deanTajuddin, styles.myProfileTypo]}>
                Dean Tajuddin
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/mappin6.png")}
              />
              <Text style={[styles.bangiSelangor, styles.bangiSelangorTypo]}>
                Bangi, Selangor
              </Text>
              <Image
                style={[styles.userInterfaceShare, styles.userLayout1]}
                contentFit="cover"
                source={require("../assets/user-interface--share.png")}
              />
              <Image
                style={[styles.userInterfacePen, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/user-interface--pen.png")}
              />
              <Text style={styles.freemiumUser}>Freemium User</Text>
            </View>
            <Image
              style={[styles.userInterfaceMenu, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/user-interface--menu.png")}
            />
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox} />
              <View style={styles.groupParent}>
                <Image
                  style={styles.groupIcon}
                  contentFit="cover"
                  source={require("../assets/group26.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group27.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group28.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/group29.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.tagsProfile}>
            <View style={styles.shoppingTagParent}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag13.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Batik Artist
              </Text>
            </View>
            <View style={[styles.shoppingTagGroup, styles.shoppingFlexBox]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag14.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Illustrator
              </Text>
            </View>
            <View style={[styles.shoppingTagContainer, styles.shoppingFlexBox]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag14.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Textile Artist
              </Text>
            </View>
          </View>
          <Image
            style={[styles.userInterfacePen1, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-interface--pen1.png")}
          />
          <Image
            style={[styles.userInterfacePen2, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-interface--pen1.png")}
          />
          <Image
            style={[styles.userInterfacePen3, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-interface--pen1.png")}
          />
          <Text style={styles.bio}>Bio</Text>
          <View style={styles.bioDescriptionWrapper}>
            <Text style={[styles.bioDescription, styles.armanRokniFlexBox]}>
              I'm a passionate event organizer with a knack for transforming
              ideas into unforgettable experiences. From intimate gatherings to
              large-scale conferences, I thrive on the challenge of exceeding
              expectations and creating moments that leave a lasting impact.
            </Text>
          </View>
          <Text style={[styles.aboutMe, styles.reviewTypo]}>About me</Text>
          <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
          <Text style={[styles.collections, styles.reviewTypo]}>
            Collections
          </Text>
          <View
            style={[styles.profilePageFreeUserCliChild, styles.profilePosition]}
          />
          <View
            style={[styles.profilePageFreeUserCliItem, styles.profilePosition]}
          />
          <View style={[styles.createNewProjectParent, styles.parentFlexBox]}>
            <Text style={[styles.createNewProject, styles.bangiSelangorTypo]}>
              Create new Project
            </Text>
            <Image
              style={styles.userInterfacePlus}
              contentFit="cover"
              source={require("../assets/user-interface--plus.png")}
            />
          </View>
          <View style={styles.eventCardShadowBox1}>
            <Image
              style={[styles.maskGroupIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group2.png")}
            />
            <View style={[styles.eventCardChild, styles.childPosition]} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon2.png")}
            />
            <View style={styles.nameStar} />
            <Text style={[styles.pestaWownita, styles.pestaWownitaTypo]}>
              Pesta WoWnita
            </Text>
            <View style={[styles.antDesignstarFilledParent, styles.antFlexBox]}>
              <Image
                style={styles.antDesignstarFilledIcon}
                contentFit="cover"
                source={require("../assets/antdesignstarfilled3.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>4.9</Text>
            </View>
            <View style={styles.dateIconShadowBox}>
              <View
                style={[styles.dateIconCarouselChild, styles.childPosition]}
              />
              <Text style={[styles.armanRokni, styles.armanRokniFlexBox]}>
                <Text style={styles.armanRokniTxtContainer}>
                  <Text style={styles.text1}>{`8
`}</Text>
                  <Text style={styles.mar}>Mar</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.minParent}>
              <Text style={[styles.min, styles.minTypo]}>
                Central Market, Kuala Lumpur
              </Text>
              <Image
                style={[styles.groupChild, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group-61.png")}
              />
            </View>
            <View style={[styles.groupGroup, styles.groupPosition]}>
              <Image
                style={[styles.groupIcon4, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group30.png")}
              />
              <Text style={[styles.kLiked, styles.likedTypo]}>+2k Liked</Text>
              <Text style={[styles.k, styles.kTypo]}>+10k</Text>
            </View>
            <Image
              style={[styles.component1Icon, styles.component1IconLayout]}
              contentFit="cover"
              source={require("../assets/component-12.png")}
            />
          </View>
          <View style={styles.eventCardShadowBox}>
            <Image
              style={[styles.maskGroupIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group4.png")}
            />
            <View style={[styles.eventCardChild, styles.childPosition]} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon3.png")}
            />
            <View style={[styles.antDesignstarFilledGroup, styles.antFlexBox]}>
              <Image
                style={styles.antDesignstarFilledIcon}
                contentFit="cover"
                source={require("../assets/antdesignstarfilled5.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>4.8</Text>
            </View>
            <View style={styles.dateIconShadowBox}>
              <View
                style={[styles.dateIconCarouselChild, styles.childPosition]}
              />
              <Text style={[styles.armanRokni, styles.armanRokniFlexBox]}>
                <Text style={styles.armanRokniTxtContainer}>
                  <Text style={styles.text1}>{`22
`}</Text>
                  <Text style={styles.mar}>mar</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.minParent}>
              <Text style={[styles.min, styles.minTypo]}>
                Central Market, Kuala Lumpur
              </Text>
              <Image
                style={[styles.groupChild, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group-61.png")}
              />
            </View>
            <View style={[styles.groupContainer, styles.groupPosition]}>
              <Image
                style={[styles.groupIcon5, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group30.png")}
              />
              <Text style={[styles.kLiked1, styles.likedTypo]}>+1k Liked</Text>
            </View>
            <Text style={[styles.pasarCorakHati, styles.pestaWownitaTypo]}>
              Pasar Corak Hati Raya
            </Text>
            <Text style={[styles.k1, styles.kTypo]}>+12k</Text>
            <Image
              style={[styles.component1Icon1, styles.component1IconLayout]}
              contentFit="cover"
              source={require("../assets/component-16.png")}
            />
          </View>
          <View
            style={[
              styles.profilePageFreeUserCliInner,
              styles.property1defaultLayout,
            ]}
          />
          <View
            style={[styles.profileCardFreemium, styles.rectangleParentLayout]}
          >
            <View style={styles.childCardShadowBox} />
            <View style={styles.header}>
              <Image
                style={styles.memojiIcon}
                contentFit="cover"
                source={require("../assets/memoji.png")}
              />
              <Text
                style={[styles.freelancerArtist, styles.helloWelcomeToTypo]}
              >
                Freelancer, Artist
              </Text>
              <Text style={[styles.deanTajuddin, styles.myProfileTypo]}>
                Dean Tajuddin
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/mappin6.png")}
              />
              <Text style={[styles.bangiSelangor, styles.bangiSelangorTypo]}>
                Bangi, Selangor
              </Text>
              <Image
                style={[styles.userInterfaceShare, styles.userLayout1]}
                contentFit="cover"
                source={require("../assets/user-interface--share.png")}
              />
              <Text style={[styles.helloWelcomeTo, styles.helloWelcomeToTypo]}>
                Hello, welcome to my card!
              </Text>
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox} />
              <View style={styles.groupParent}>
                <Image
                  style={styles.groupIcon}
                  contentFit="cover"
                  source={require("../assets/group26.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group27.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group28.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/group31.png")}
                />
              </View>
            </View>
          </View>
          <Text style={[styles.iMakeImmerse, styles.iMakeImmerseTypo]}>
            I make immerse Batik Prints. View my recent works in my socials
            above. Thank you!
          </Text>
          <Image
            style={[styles.userInterfaceClose, styles.userLayout1]}
            contentFit="cover"
            source={require("../assets/user-interface--close.png")}
          />
          <Text style={[styles.getContraPremium, styles.likedTypo]}>
            Get Contra Premium to embed links in your profile!
          </Text>
          <Image
            style={styles.userInterfaceBolt}
            contentFit="cover"
            source={require("../assets/user-interface--bolt.png")}
          />
        </View>
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <View style={styles.profileShadowBox}>
          <View style={styles.barsStatusBarIphoneL}>
            <View style={styles.battery}>
              <View style={styles.border} />
              <Image
                style={styles.capIcon}
                contentFit="cover"
                source={require("../assets/cap2.png")}
              />
              <View style={styles.capacity} />
            </View>
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi2.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              contentFit="cover"
              source={require("../assets/cellular-connection2.png")}
            />
            <View style={styles.timeStyle}>
              <Text style={styles.time}>9:41</Text>
            </View>
          </View>
          <Text style={[styles.myProfile, styles.myProfileTypo]}>
            My Profile
          </Text>
          <Text style={styles.myCard}>My Card</Text>
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <View style={styles.childCardShadowBox} />
            <View style={styles.header}>
              <Image
                style={styles.memojiIcon}
                contentFit="cover"
                source={require("../assets/memoji1.png")}
              />
              <Text
                style={[styles.freelancerArtist, styles.helloWelcomeToTypo]}
              >
                Freelancer, Artist
              </Text>
              <Text style={[styles.deanTajuddin, styles.myProfileTypo]}>
                Dean Tajuddin
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/mappin7.png")}
              />
              <Text style={[styles.bangiSelangor, styles.bangiSelangorTypo]}>
                Bangi, Selangor
              </Text>
              <Image
                style={[styles.userInterfaceShare, styles.userLayout1]}
                contentFit="cover"
                source={require("../assets/user-interface--share2.png")}
              />
              <Image
                style={[styles.userInterfacePen, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/user-interface--pen2.png")}
              />
              <Text style={styles.freemiumUser}>Freemium User</Text>
            </View>
            <Image
              style={[styles.userInterfaceMenu, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/user-interface--menu1.png")}
            />
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox} />
              <View style={styles.groupParent}>
                <Image
                  style={styles.groupIcon}
                  contentFit="cover"
                  source={require("../assets/group32.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group33.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group34.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/group35.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.tagsProfile}>
            <View style={styles.shoppingTagParent}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag15.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Batik Artist
              </Text>
            </View>
            <View style={[styles.shoppingTagGroup, styles.shoppingFlexBox]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag16.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Illustrator
              </Text>
            </View>
            <View style={[styles.shoppingTagContainer, styles.shoppingFlexBox]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag16.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Textile Artist
              </Text>
            </View>
          </View>
          <Image
            style={[styles.userInterfacePen1, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-interface--pen3.png")}
          />
          <Image
            style={[styles.userInterfacePen2, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-interface--pen3.png")}
          />
          <Image
            style={[styles.userInterfacePen3, styles.userLayout]}
            contentFit="cover"
            source={require("../assets/user-interface--pen3.png")}
          />
          <Text style={styles.bio}>Bio</Text>
          <View style={styles.bioDescriptionWrapper}>
            <Text style={[styles.bioDescription, styles.armanRokniFlexBox]}>
              I'm a passionate event organizer with a knack for transforming
              ideas into unforgettable experiences. From intimate gatherings to
              large-scale conferences, I thrive on the challenge of exceeding
              expectations and creating moments that leave a lasting impact.
            </Text>
          </View>
          <Text style={[styles.aboutMe, styles.reviewTypo]}>About me</Text>
          <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
          <Text style={[styles.collections, styles.reviewTypo]}>
            Collections
          </Text>
          <View
            style={[styles.profilePageFreeUserCliChild, styles.profilePosition]}
          />
          <View
            style={[styles.profilePageFreeUserCliItem, styles.profilePosition]}
          />
          <View style={[styles.createNewProjectParent, styles.parentFlexBox]}>
            <Text style={[styles.createNewProject, styles.bangiSelangorTypo]}>
              Create new Project
            </Text>
            <Image
              style={styles.userInterfacePlus}
              contentFit="cover"
              source={require("../assets/user-interface--plus1.png")}
            />
          </View>
          <View style={styles.eventCardShadowBox1}>
            <Image
              style={[styles.maskGroupIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group5.png")}
            />
            <View style={[styles.eventCardChild, styles.childPosition]} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon4.png")}
            />
            <View style={styles.nameStar} />
            <Text style={[styles.pestaWownita, styles.pestaWownitaTypo]}>
              Pesta WoWnita
            </Text>
            <View style={[styles.antDesignstarFilledParent, styles.antFlexBox]}>
              <Image
                style={styles.antDesignstarFilledIcon}
                contentFit="cover"
                source={require("../assets/antdesignstarfilled6.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>4.9</Text>
            </View>
            <View style={styles.dateIconShadowBox}>
              <View
                style={[styles.dateIconCarouselChild, styles.childPosition]}
              />
              <Text style={[styles.armanRokni, styles.armanRokniFlexBox]}>
                <Text style={styles.armanRokniTxtContainer}>
                  <Text style={styles.text1}>{`8
`}</Text>
                  <Text style={styles.mar}>Mar</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.minParent}>
              <Text style={[styles.min, styles.minTypo]}>
                Central Market, Kuala Lumpur
              </Text>
              <Image
                style={[styles.groupChild, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group-62.png")}
              />
            </View>
            <View style={[styles.groupGroup, styles.groupPosition]}>
              <Image
                style={[styles.groupIcon4, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group36.png")}
              />
              <Text style={[styles.kLiked, styles.likedTypo]}>+2k Liked</Text>
              <Text style={[styles.k, styles.kTypo]}>+10k</Text>
            </View>
            <Image
              style={[styles.component1Icon, styles.component1IconLayout]}
              contentFit="cover"
              source={require("../assets/component-17.png")}
            />
          </View>
          <View style={styles.eventCardShadowBox}>
            <Image
              style={[styles.maskGroupIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group6.png")}
            />
            <View style={[styles.eventCardChild, styles.childPosition]} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon5.png")}
            />
            <View style={[styles.antDesignstarFilledGroup, styles.antFlexBox]}>
              <Image
                style={styles.antDesignstarFilledIcon}
                contentFit="cover"
                source={require("../assets/antdesignstarfilled7.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>4.8</Text>
            </View>
            <View style={styles.dateIconShadowBox}>
              <View
                style={[styles.dateIconCarouselChild, styles.childPosition]}
              />
              <Text style={[styles.armanRokni, styles.armanRokniFlexBox]}>
                <Text style={styles.armanRokniTxtContainer}>
                  <Text style={styles.text1}>{`22
`}</Text>
                  <Text style={styles.mar}>mar</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.minParent}>
              <Text style={[styles.min, styles.minTypo]}>
                Central Market, Kuala Lumpur
              </Text>
              <Image
                style={[styles.groupChild, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group-62.png")}
              />
            </View>
            <View style={[styles.groupContainer, styles.groupPosition]}>
              <Image
                style={[styles.groupIcon5, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group36.png")}
              />
              <Text style={[styles.kLiked1, styles.likedTypo]}>+1k Liked</Text>
            </View>
            <Text style={[styles.pasarCorakHati, styles.pestaWownitaTypo]}>
              Pasar Corak Hati Raya
            </Text>
            <Text style={[styles.k1, styles.kTypo]}>+12k</Text>
            <Image
              style={[styles.component1Icon1, styles.component1IconLayout]}
              contentFit="cover"
              source={require("../assets/component-18.png")}
            />
          </View>
          <View
            style={[
              styles.profilePageFreeUserCliInner,
              styles.property1defaultLayout,
            ]}
          />
          <View
            style={[styles.profileCardFreemium, styles.rectangleParentLayout]}
          >
            <View style={styles.childCardShadowBox} />
            <View style={styles.header}>
              <Image
                style={styles.memojiIcon}
                contentFit="cover"
                source={require("../assets/memoji1.png")}
              />
              <Text
                style={[styles.freelancerArtist, styles.helloWelcomeToTypo]}
              >
                Freelancer, Artist
              </Text>
              <Text style={[styles.deanTajuddin, styles.myProfileTypo]}>
                Dean Tajuddin
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/mappin7.png")}
              />
              <Text style={[styles.bangiSelangor, styles.bangiSelangorTypo]}>
                Bangi, Selangor
              </Text>
              <Image
                style={[styles.userInterfaceShare, styles.userLayout1]}
                contentFit="cover"
                source={require("../assets/user-interface--share2.png")}
              />
              <Text style={[styles.helloWelcomeTo, styles.helloWelcomeToTypo]}>
                Hello, welcome to my card!
              </Text>
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox} />
              <View style={styles.groupParent}>
                <Image
                  style={styles.groupIcon}
                  contentFit="cover"
                  source={require("../assets/group32.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group33.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group34.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/group35.png")}
                />
              </View>
            </View>
          </View>
          <Text style={[styles.iMakeImmerse, styles.iMakeImmerseTypo]}>
            I make immerse Batik Prints. View my recent works in my socials
            above. Thank you!
          </Text>
          <Image
            style={[styles.userInterfaceClose, styles.userLayout1]}
            contentFit="cover"
            source={require("../assets/user-interface--close1.png")}
          />
          <Text style={[styles.getContraPremium, styles.likedTypo]}>
            Get Contra Premium to embed links in your profile!
          </Text>
          <Image
            style={styles.userInterfaceBolt}
            contentFit="cover"
            source={require("../assets/user-interface--bolt1.png")}
          />
        </View>
        <View
          style={[styles.accountCardLinkCopiedToClParent, styles.parentFlexBox]}
        >
          <Text style={[styles.accountCardLink, styles.iMakeImmerseTypo]}>
            Account card link copied to clipboard
          </Text>
          <Image
            style={[styles.fileAndFolderClipboard, styles.userLayout1]}
            contentFit="cover"
            source={require("../assets/file-and-folder--clipboard.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    height: 811,
    width: 375,
    position: "absolute",
  },
  myProfileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParentLayout: {
    width: "88.53%",
    height: "33.53%",
    position: "absolute",
  },
  helloWelcomeToTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bangiSelangorTypo: {
    fontFamily: FontFamily.figtreeRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  userLayout1: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  groupIconLayout: {
    bottom: "0.91%",
    top: "0.45%",
    width: "20.19%",
    height: "98.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  eventTypo: {
    marginLeft: 7.4,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  shoppingFlexBox: {
    backgroundColor: Color.colorPowderblue,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xl_2,
    top: 0,
    position: "absolute",
  },
  userLayout: {
    opacity: 0.2,
    left: "88.53%",
    right: "6.13%",
    width: "5.33%",
    height: "2.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  armanRokniFlexBox: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  reviewTypo: {
    top: "61.27%",
    fontFamily: FontFamily.figtreeSemiBold,
    fontSize: FontSize.size_sm_5,
    textAlign: "left",
    color: Color.titelTextColor,
    fontWeight: "600",
    position: "absolute",
  },
  profilePosition: {
    top: "63.56%",
    borderStyle: "solid",
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorWhite,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  pestaWownitaTypo: {
    lineHeight: 11,
    fontSize: FontSize.size_5xs_2,
    fontFamily: FontFamily.bodyMediumBold,
    left: "6.52%",
    top: "75.31%",
    textAlign: "left",
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
    position: "absolute",
  },
  antFlexBox: {
    justifyContent: "flex-end",
    bottom: "19.01%",
    top: "75.62%",
    width: "16.77%",
    height: "5.36%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    marginLeft: 4.12,
    lineHeight: 9,
    fontSize: FontSize.size_6xs_2,
    textAlign: "left",
    color: Color.colorMidnightblue_100,
    fontWeight: "700",
  },
  minTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
    top: "0%",
  },
  groupPosition: {
    bottom: "5.62%",
    top: "87.92%",
    height: "6.46%",
    left: "6.52%",
    position: "absolute",
  },
  likedTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  kTypo: {
    color: Color.primary,
    fontFamily: FontFamily.montserratSemiBold,
    lineHeight: 10,
    fontSize: FontSize.size_6xs_2,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  component1IconLayout: {
    right: "15.37%",
    width: "8.25%",
    height: "6.46%",
    left: "76.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iMakeImmerseTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    letterSpacing: 0,
  },
  border: {
    right: 2,
    borderRadius: 3,
    width: 22,
    opacity: 0.35,
    borderColor: Color.titelTextColor,
    borderStyle: "solid",
    top: 0,
    height: 11,
    position: "absolute",
    borderWidth: 1,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.titelTextColor,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 15,
    height: 11,
    width: 24,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.titelTextColor,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    left: 0,
    width: 54,
    position: "absolute",
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
    width: 54,
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: "5.42%",
    top: "0.12%",
    right: "-0.53%",
    bottom: "94.45%",
    left: "0.53%",
    width: "100%",
    position: "absolute",
  },
  myProfile: {
    top: "7.03%",
    left: "6.13%",
    fontSize: FontSize.size_xl_6,
    color: Color.colorMidnightblue_100,
  },
  myCard: {
    top: "11.59%",
    left: "8.27%",
    display: "none",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.bodySmallBold_size,
    textAlign: "left",
    color: Color.titelTextColor,
    position: "absolute",
  },
  childCardShadowBox: {
    height: 240,
    width: 319,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.colorTeal,
    left: 9,
    top: 27,
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  memojiIcon: {
    top: 30,
    left: 103,
    borderRadius: 607,
    width: 126,
    height: 126,
    position: "absolute",
    overflow: "hidden",
  },
  freelancerArtist: {
    top: "70.04%",
    left: "34.38%",
    color: Color.colorWhite,
    fontSize: FontSize.bodySmallBold_size,
  },
  deanTajuddin: {
    top: 156,
    left: 100,
    fontSize: FontSize.size_mid,
    lineHeight: 24,
    color: Color.colorWhite,
  },
  mapPinIcon: {
    height: "4.71%",
    width: "3.65%",
    top: "78.6%",
    right: "61.37%",
    bottom: "16.69%",
    left: "34.98%",
  },
  bangiSelangor: {
    top: 202,
    left: 131,
    fontSize: FontSize.bodySmallBold_size,
    position: "absolute",
  },
  userInterfaceShare: {
    top: 46,
    left: 286,
    position: "absolute",
  },
  userInterfacePen: {
    height: "9.34%",
    width: "7.24%",
    top: "17.12%",
    right: "84.02%",
    bottom: "73.54%",
    left: "8.75%",
  },
  freemiumUser: {
    top: 12,
    left: 137,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.titelTextColor,
    position: "absolute",
  },
  header: {
    width: 332,
    height: 257,
    left: 0,
    top: 0,
    position: "absolute",
  },
  userInterfaceMenu: {
    height: "8.82%",
    width: "7.23%",
    top: "-4.41%",
    bottom: "95.59%",
    left: "92.77%",
    right: "0%",
    maxWidth: "100%",
  },
  frameChildShadowBox: {
    elevation: 3.42,
    shadowRadius: 3.42,
    borderRadius: 26,
    height: 41,
    width: 183,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupIcon: {
    bottom: "1.36%",
    left: "79.81%",
    width: "20.19%",
    height: "98.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon1: {
    right: "52.47%",
    left: "27.35%",
  },
  groupIcon2: {
    right: "26.23%",
    left: "53.58%",
  },
  groupIcon3: {
    height: "96.82%",
    width: "19.81%",
    top: "4.55%",
    right: "78.33%",
    bottom: "-1.36%",
    left: "1.86%",
  },
  groupParent: {
    top: 10,
    left: 37,
    width: 107,
    height: 22,
    position: "absolute",
  },
  rectangleGroup: {
    top: 231,
    left: 77,
    height: 41,
    width: 183,
    position: "absolute",
  },
  rectangleParent: {
    top: "8.63%",
    right: "5.6%",
    bottom: "57.84%",
    left: "5.87%",
  },
  shoppingTag: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  eventPlanner: {
    color: Color.colorWhite,
  },
  shoppingTagParent: {
    left: 2,
    padding: 7,
    borderRadius: Border.br_3xl_2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorTeal,
    top: 0,
    position: "absolute",
  },
  eventPlanner1: {
    color: Color.colorTeal,
  },
  shoppingTagGroup: {
    left: 95,
  },
  shoppingTagContainer: {
    left: 180,
  },
  tagsProfile: {
    height: "4.31%",
    width: "73.33%",
    top: "44.13%",
    right: "13.33%",
    bottom: "51.55%",
    left: "13.33%",
    position: "absolute",
  },
  userInterfacePen1: {
    top: "44.5%",
    bottom: "53.03%",
  },
  userInterfacePen2: {
    top: "49.56%",
    bottom: "47.98%",
  },
  userInterfacePen3: {
    top: "61.02%",
    bottom: "36.51%",
  },
  bio: {
    top: "50.05%",
    left: "6.93%",
    fontFamily: FontFamily.figtreeSemiBold,
    fontSize: FontSize.size_sm_5,
    textAlign: "left",
    color: Color.titelTextColor,
    fontWeight: "600",
    position: "absolute",
  },
  bioDescription: {
    fontSize: FontSize.size_2xs_7,
    color: Color.colorGray_300,
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
  },
  bioDescriptionWrapper: {
    height: "8.26%",
    width: "84.27%",
    top: "51.65%",
    right: "6.67%",
    bottom: "40.09%",
    left: "9.07%",
    opacity: 0.5,
    position: "absolute",
  },
  aboutMe: {
    left: "7.49%",
  },
  review: {
    left: "27.23%",
  },
  collections: {
    left: "41.68%",
  },
  profilePageFreeUserCliChild: {
    height: "0.11%",
    width: "18.91%",
    right: "39.6%",
    bottom: "36.33%",
    left: "41.49%",
    borderTopWidth: 0.9,
    borderColor: Color.titelTextColor,
  },
  profilePageFreeUserCliItem: {
    height: "0.09%",
    width: "55.39%",
    right: "37.79%",
    bottom: "36.35%",
    left: "6.83%",
    borderColor: Color.colorGray_1600,
    borderTopWidth: 0.7,
  },
  createNewProject: {
    fontSize: FontSize.size_3xs_1,
  },
  userInterfacePlus: {
    height: 15,
    marginLeft: 10,
    width: 15,
    overflow: "hidden",
  },
  createNewProjectParent: {
    top: 529,
    left: 28,
    backgroundColor: Color.primary,
    width: 121,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    borderRadius: Border.br_11xl,
    alignItems: "center",
    flexDirection: "row",
  },
  maskGroupIcon: {
    height: "78.28%",
    bottom: "21.72%",
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
  },
  eventCardChild: {
    height: "27.86%",
    top: "72.14%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    bottom: "0%",
  },
  icon: {
    height: "8.59%",
    width: "10.98%",
    right: "6.45%",
    bottom: "85.78%",
    left: "82.57%",
    borderRadius: 51,
    top: "5.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nameStar: {
    height: "5.63%",
    width: "79.77%",
    right: "10.31%",
    bottom: "19.06%",
    left: "9.91%",
    top: "75.31%",
    alignItems: "center",
    position: "absolute",
  },
  pestaWownita: {
    width: "39.72%",
    fontFamily: FontFamily.bodyMediumBold,
  },
  antDesignstarFilledIcon: {
    width: 10,
    height: 10,
    overflow: "hidden",
  },
  text: {
    fontFamily: FontFamily.bodyMediumBold,
  },
  antDesignstarFilledParent: {
    right: "6.85%",
    left: "76.38%",
    justifyContent: "flex-end",
    bottom: "19.01%",
    top: "75.62%",
    width: "16.77%",
    height: "5.36%",
  },
  dateIconCarouselChild: {
    height: "96.67%",
    bottom: "3.33%",
    borderRadius: 5,
    top: "0%",
  },
  text1: {
    fontSize: FontSize.size_3xs_3,
    lineHeight: 3,
  },
  mar: {
    fontSize: FontSize.size_7xs_1,
    lineHeight: 7,
  },
  armanRokniTxtContainer: {
    width: "100%",
  },
  armanRokni: {
    height: "93.75%",
    width: "73.28%",
    top: "6.25%",
    left: "13.36%",
    textTransform: "uppercase",
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    display: "flex",
    textAlign: "center",
  },
  dateIconShadowBox: {
    elevation: 2.06,
    shadowRadius: 2.06,
    bottom: "81.87%",
    right: "78.04%",
    width: "15.44%",
    height: "12.5%",
    left: "6.52%",
    top: "5.63%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  min: {
    left: "10.93%",
    fontSize: FontSize.size_6xs_7,
    position: "absolute",
  },
  groupChild: {
    width: "8.3%",
    right: "91.7%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  minParent: {
    height: "4.27%",
    width: "65.74%",
    top: "81.25%",
    right: "27.74%",
    bottom: "14.48%",
    left: "6.52%",
    opacity: 0.5,
    position: "absolute",
  },
  groupIcon4: {
    width: "21.83%",
    right: "78.17%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  kLiked: {
    left: "25.78%",
    color: Color.universe,
    lineHeight: 10,
    top: "12.1%",
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: FontSize.size_6xs_2,
  },
  k: {
    top: "16.94%",
    left: "89.39%",
  },
  groupGroup: {
    width: "87.76%",
    right: "5.72%",
  },
  component1Icon: {
    top: "88.49%",
    bottom: "5.05%",
  },
  eventCardShadowBox1: {
    height: 192,
    width: 150,
    left: 29,
    top: 580,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  text2: {
    fontFamily: FontFamily.figtreeBold,
  },
  antDesignstarFilledGroup: {
    right: "6.52%",
    left: "76.71%",
    justifyContent: "flex-end",
    bottom: "19.01%",
    top: "75.62%",
    width: "16.77%",
    height: "5.36%",
  },
  groupIcon5: {
    width: "45.71%",
    right: "54.29%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  kLiked1: {
    left: "53.97%",
    color: Color.colorDarkslateblue_100,
    lineHeight: 10,
    top: "12.1%",
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: FontSize.size_6xs_2,
  },
  groupContainer: {
    width: "41.92%",
    right: "51.56%",
  },
  pasarCorakHati: {
    width: "54.82%",
    fontFamily: FontFamily.bodyMediumBold,
  },
  k1: {
    top: "89.79%",
    left: "84.96%",
  },
  component1Icon1: {
    top: "89.27%",
    bottom: "4.27%",
  },
  eventCardShadowBox: {
    left: 197,
    height: 192,
    width: 150,
    top: 580,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  profilePageFreeUserCliInner: {
    top: -3,
    left: -1,
    backgroundColor: Color.colorGray_1000,
  },
  helloWelcomeTo: {
    top: -11,
    left: 73,
    color: Color.colorWhite,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  profileCardFreemium: {
    top: "27.49%",
    right: "5.87%",
    bottom: "38.98%",
    left: "5.6%",
  },
  iMakeImmerse: {
    top: 508,
    left: 30,
    width: 320,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    color: Color.colorTeal,
    justifyContent: "center",
    fontSize: FontSize.bodySmallBold_size,
  },
  userInterfaceClose: {
    top: 178,
    left: 325,
    position: "absolute",
  },
  getContraPremium: {
    top: 599,
    left: 65,
    fontSize: FontSize.size_3xs,
    textDecoration: "underline",
    color: Color.colorWhite,
  },
  userInterfaceBolt: {
    top: 596,
    left: 46,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  profileShadowBox: {
    shadowOpacity: 1,
    elevation: 100,
    shadowRadius: 100,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  property1default: {
    top: 20,
    left: 20,
    width: 375,
  },
  accountCardLink: {
    fontSize: FontSize.size_mini_1,
    color: Color.colorWhite,
  },
  fileAndFolderClipboard: {
    opacity: 0.8,
    marginLeft: 11.58,
  },
  accountCardLinkCopiedToClParent: {
    height: "5.82%",
    width: "92.64%",
    top: "90.83%",
    right: "3.09%",
    bottom: "3.35%",
    left: "4.27%",
    borderRadius: 35,
    backgroundColor: Color.colorGray_1300,
    padding: 12,
    justifyContent: "center",
  },
  property1variant2: {
    top: 851,
    left: 20,
    width: 375,
  },
  profilePageFreeUserCli: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    width: 415,
    height: 1682,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default ProfilePageFreeUserCli;
