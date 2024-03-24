import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ProfileDetail = () => {
  return (
    <View style={styles.profileDetail}>
      <View style={styles.property1default}>
        <View style={[styles.profileDetails, styles.profileLayout]}>
          <View style={[styles.rectangleParent, styles.headerLayout]}>
            <View style={[styles.frameChild, styles.frameChildShadowBox2]} />
            <View style={[styles.header, styles.headerLayout]}>
              <View style={[styles.ellipseParent, styles.frameItemLayout]}>
                <Image
                  style={[styles.frameItem, styles.frameItemPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-29.png")}
                />
                <Image
                  style={[styles.memojiBoys315, styles.memojiLayout]}
                  contentFit="cover"
                  source={require("../assets/memoji-boys-315.png")}
                />
              </View>
              <Text style={styles.profileDetail1}>Profile Detail</Text>
              <Image
                style={[styles.vectorIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
              <Text style={[styles.fullTimeFreelancer, styles.fullTypo]}>
                Full-Time Freelancer
              </Text>
              <Text style={[styles.lucyTanner, styles.lucyTannerTypo]}>
                Lucy Tanner
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/mappin.png")}
              />
              <Text style={styles.subangJayaSelangor}>
                Subang Jaya, Selangor
              </Text>
              <Image
                style={[
                  styles.userInterfaceShare,
                  styles.userInterfaceShareLayout,
                ]}
                contentFit="cover"
                source={require("../assets/user-interface--share.png")}
              />
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox1} />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupIcon1, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group3.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group4.png")}
                />
                <Image
                  style={[styles.groupIcon4, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group5.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.tagsProfile, styles.tagsLayout]}>
            <View
              style={[styles.shoppingTagParent, styles.shoppingParentFlexBox4]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag1.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Handcraft Artisan
              </Text>
            </View>
            <View
              style={[styles.shoppingTagGroup, styles.shoppingParentFlexBox3]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag2.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Batik Artist
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagContainer,
                styles.shoppingParentFlexBox4,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag1.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Workshops
              </Text>
            </View>
            <View style={[styles.frameView, styles.shoppingParentFlexBox3]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag2.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Small Business Owner
              </Text>
            </View>
            <View
              style={[styles.shoppingTagParent1, styles.shoppingParentFlexBox3]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag2.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Creative Minds
              </Text>
            </View>
            <View
              style={[styles.shoppingTagParent2, styles.shoppingParentFlexBox3]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag2.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Traditional Batik
              </Text>
            </View>
          </View>
          <Text style={[styles.bio, styles.bioTypo]}>Bio</Text>
          <View style={[styles.bioDescriptionWrapper, styles.bioWrapperLayout]}>
            <Text style={[styles.bioDescription, styles.hereAreSomeTypo]}>
              I'm a passionate event organizer with a knack for transforming
              ideas into unforgettable experiences. From intimate gatherings to
              large-scale conferences, I thrive on the challenge of exceeding
              expectations and creating moments that leave a lasting impact.
            </Text>
          </View>
          <View style={styles.bioDescriptionContainer}>
            <Text style={[styles.bioDescription1, styles.bioFlexBox]}>
              <Text style={styles.bioDescriptionTxtContainer}>
                <Text style={styles.myExpertiseLies}>{`My expertise lies in:
Event planning and coordination (virtual & in-person)
Venue sourcing and negotiation
Budget management and logistics
Vendor selection and communication
Marketing and promotion
Event execution and flawless on-site management
My passion lies in:
Seeing the joy and connection events foster
Bringing people together to learn, celebrate, or network
Working collaboratively with clients to bring their vision to life
Injecting creativity and innovation into every event detail
Ready to turn your next event into a success story? Let's chat!
`}</Text>
                <Text
                  style={styles.eventplannerEventmanagement}
                >{`#EventPlanner #EventManagement #EventPro #MeetingPlanner #ConferencePlanner #EventProduction #ExperientialMarketing #CorporateEvents #NonProfitEvents #VirtualEvents #HybridEvents
`}</Text>
                <Text style={styles.myExpertiseLies}>{`pen_spark
`}</Text>
              </Text>
            </Text>
          </View>
          <Text style={[styles.aboutMe, styles.reviewTypo]}>About me</Text>
          <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
          <Text style={[styles.collections, styles.reviewTypo]}>
            Collections
          </Text>
          <View
            style={[styles.profileDetailsChild, styles.profileChildPosition]}
          />
          <Image
            style={styles.profileDetailsItem}
            contentFit="cover"
            source={require("../assets/line-5.png")}
          />
        </View>
        <View style={[styles.profileDetails1, styles.profileLayout]}>
          <View
            style={[styles.rectangleContainer, styles.rectangleParentLayout]}
          >
            <View style={[styles.rectangleView, styles.frameChildShadowBox2]} />
            <View style={[styles.header, styles.headerLayout]}>
              <View style={[styles.ellipseParent, styles.frameItemLayout]}>
                <Image
                  style={[styles.frameItem, styles.frameItemPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-29.png")}
                />
                <Image
                  style={[styles.memojiBoys315, styles.memojiLayout]}
                  contentFit="cover"
                  source={require("../assets/memoji-boys-315.png")}
                />
              </View>
              <Text style={styles.profileDetail1}>Profile Detail</Text>
              <Image
                style={[styles.vectorIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
              <Text style={[styles.fullTimeFreelancer, styles.fullTypo]}>
                Full-Time Freelancer
              </Text>
              <Text style={[styles.lucyTanner, styles.lucyTannerTypo]}>
                Lucy Tanner
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/mappin1.png")}
              />
              <Text style={styles.subangJayaSelangor}>
                Subang Jaya, Selangor
              </Text>
              <Image
                style={[
                  styles.userInterfaceShare,
                  styles.userInterfaceShareLayout,
                ]}
                contentFit="cover"
                source={require("../assets/user-interface--share.png")}
              />
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox1} />
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupIcon1, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group6.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group7.png")}
                />
                <Image
                  style={[styles.groupIcon4, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group5.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.tagsProfile, styles.tagsLayout]}>
            <View
              style={[styles.shoppingTagParent, styles.shoppingParentFlexBox4]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag3.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Handcraft Artisan
              </Text>
            </View>
            <View
              style={[styles.shoppingTagGroup, styles.shoppingParentFlexBox3]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag4.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Batik Artist
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagContainer,
                styles.shoppingParentFlexBox4,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag3.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Workshops
              </Text>
            </View>
            <View style={[styles.frameView, styles.shoppingParentFlexBox3]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag4.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Small Business Owner
              </Text>
            </View>
            <View
              style={[styles.shoppingTagParent1, styles.shoppingParentFlexBox3]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag4.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Creative Minds
              </Text>
            </View>
            <View
              style={[styles.shoppingTagParent2, styles.shoppingParentFlexBox3]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag4.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Traditional Batik
              </Text>
            </View>
          </View>
          <View style={styles.ratingStar}>
            <Text style={styles.ratings}>(100 ratings)</Text>
            <Text style={styles.text}>4.7</Text>
            <Image
              style={[styles.component1Icon, styles.groupIconLayout2]}
              contentFit="cover"
              source={require("../assets/component-11.png")}
            />
          </View>
          <Text style={[styles.bio, styles.bioTypo]}>Bio</Text>
          <View style={[styles.bioDescriptionWrapper, styles.bioWrapperLayout]}>
            <Text style={[styles.bioDescription, styles.hereAreSomeTypo]}>
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
            style={[styles.profileDetailsInner, styles.profileChildPosition]}
          />
          <View style={[styles.lineView, styles.lineViewPosition]} />
          <View style={[styles.reviewCard, styles.reviewCardLayout]}>
            <View style={[styles.reviewCardChild, styles.reviewCardLayout]} />
            <Text
              style={[styles.leonardoDaVinci, styles.lovedTheCoursePosition]}
            >
              Leonardo Da Vinci
            </Text>
            <Text
              style={[styles.lovedTheCourse, styles.lovedTheCoursePosition]}
            >
              Loved the course. I've learned some very subtle tecniques,
              expecially on leaves.
            </Text>
            <Text style={styles.today}>Today</Text>
            <Image
              style={[
                styles.generalImageSquare,
                styles.userInterfaceShareLayout,
              ]}
              contentFit="cover"
              source={require("../assets/general--image--square.png")}
            />
            <Image
              style={styles.reviewCardItem}
              contentFit="cover"
              source={require("../assets/frame-33768.png")}
            />
            <View style={styles.likesDislikes}>
              <View style={styles.dislikes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsup.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>12</Text>
              </View>
              <View style={styles.likes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsdown.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>3</Text>
              </View>
            </View>
          </View>
          <View style={[styles.reviewCard1, styles.reviewCardLayout]}>
            <View style={[styles.reviewCardChild, styles.reviewCardLayout]} />
            <Text
              style={[styles.leonardoDaVinci, styles.lovedTheCoursePosition]}
            >
              Leonardo Da Vinci
            </Text>
            <Text
              style={[styles.lovedTheCourse, styles.lovedTheCoursePosition]}
            >
              Loved the course. I've learned some very subtle tecniques,
              expecially on leaves.
            </Text>
            <Text style={styles.today}>Today</Text>
            <Image
              style={[
                styles.generalImageSquare,
                styles.userInterfaceShareLayout,
              ]}
              contentFit="cover"
              source={require("../assets/general--image--square.png")}
            />
            <Image
              style={styles.reviewCardItem}
              contentFit="cover"
              source={require("../assets/frame-33768.png")}
            />
            <View style={styles.likesDislikes}>
              <View style={styles.dislikes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsup.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>12</Text>
              </View>
              <View style={styles.likes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsdown.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>3</Text>
              </View>
            </View>
          </View>
          <View style={[styles.reviewCard2, styles.reviewCardLayout]}>
            <View style={[styles.reviewCardChild, styles.reviewCardLayout]} />
            <Text
              style={[styles.leonardoDaVinci, styles.lovedTheCoursePosition]}
            >
              Leonardo Da Vinci
            </Text>
            <Text
              style={[styles.lovedTheCourse, styles.lovedTheCoursePosition]}
            >
              Loved the course. I've learned some very subtle tecniques,
              expecially on leaves.
            </Text>
            <Text style={styles.today}>Today</Text>
            <Image
              style={[
                styles.generalImageSquare,
                styles.userInterfaceShareLayout,
              ]}
              contentFit="cover"
              source={require("../assets/general--image--square.png")}
            />
            <Image
              style={styles.reviewCardItem}
              contentFit="cover"
              source={require("../assets/frame-33768.png")}
            />
            <View style={styles.likesDislikes}>
              <View style={styles.dislikes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsup.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>12</Text>
              </View>
              <View style={styles.likes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsdown.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.reviewCard3, styles.reviewCardLayout]}>
          <View style={[styles.reviewCardChild, styles.reviewCardLayout]} />
          <Text style={[styles.leonardoDaVinci, styles.lovedTheCoursePosition]}>
            Leonardo Da Vinci
          </Text>
          <Text style={[styles.lovedTheCourse, styles.lovedTheCoursePosition]}>
            Loved the course. I've learned some very subtle tecniques,
            expecially on leaves.
          </Text>
          <Text style={styles.today}>Today</Text>
          <Image
            style={[styles.generalImageSquare, styles.userInterfaceShareLayout]}
            contentFit="cover"
            source={require("../assets/general--image--square.png")}
          />
          <Image
            style={styles.reviewCardItem}
            contentFit="cover"
            source={require("../assets/frame-33768.png")}
          />
          <View style={styles.likesDislikes}>
            <View style={styles.dislikes}>
              <Image
                style={styles.thumbsUpIcon}
                contentFit="cover"
                source={require("../assets/thumbsup.png")}
              />
              <Text style={[styles.text1, styles.text1Position]}>12</Text>
            </View>
            <View style={styles.likes}>
              <Image
                style={styles.thumbsUpIcon}
                contentFit="cover"
                source={require("../assets/thumbsdown.png")}
              />
              <Text style={[styles.text1, styles.text1Position]}>3</Text>
            </View>
          </View>
        </View>
        <View style={[styles.profileDetails2, styles.groupIconPosition]}>
          <View
            style={[styles.rectangleContainer, styles.rectangleParentLayout]}
          >
            <View style={[styles.frameChild2, styles.frameChildShadowBox2]} />
            <View style={[styles.header, styles.headerLayout]}>
              <View style={[styles.ellipseParent, styles.frameItemLayout]}>
                <Image
                  style={[styles.frameItem, styles.frameItemPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-29.png")}
                />
                <Image
                  style={[styles.memojiBoys315, styles.memojiLayout]}
                  contentFit="cover"
                  source={require("../assets/memoji-boys-315.png")}
                />
              </View>
              <Text style={styles.profileDetail1}>Profile Detail</Text>
              <Image
                style={[styles.vectorIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
              <Text style={[styles.fullTimeFreelancer, styles.fullTypo]}>
                Full-Time Freelancer
              </Text>
              <Text style={[styles.lucyTanner, styles.lucyTannerTypo]}>
                Lucy Tanner
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/mappin1.png")}
              />
              <Text style={styles.subangJayaSelangor}>
                Subang Jaya, Selangor
              </Text>
              <Image
                style={[
                  styles.userInterfaceShare,
                  styles.userInterfaceShareLayout,
                ]}
                contentFit="cover"
                source={require("../assets/user-interface--share.png")}
              />
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox1} />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
            </View>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <Image
                style={[styles.groupIcon1, styles.groupIconPosition]}
                contentFit="cover"
                source={require("../assets/group8.png")}
              />
              <Image
                style={[styles.groupIcon2, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group6.png")}
              />
              <Image
                style={[styles.groupIcon3, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group7.png")}
              />
              <Image
                style={[styles.groupIcon4, styles.groupIconLayout1]}
                contentFit="cover"
                source={require("../assets/group5.png")}
              />
            </View>
          </View>
          <View style={[styles.tagsProfile, styles.tagsLayout]}>
            <View
              style={[styles.shoppingTagParent, styles.shoppingParentFlexBox4]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag3.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Handcraft Artisan
              </Text>
            </View>
            <View
              style={[styles.shoppingTagGroup, styles.shoppingParentFlexBox3]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag4.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Batik Artist
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagContainer,
                styles.shoppingParentFlexBox4,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag3.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Workshops
              </Text>
            </View>
            <View style={[styles.frameView, styles.shoppingParentFlexBox3]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag4.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Small Business Owner
              </Text>
            </View>
            <View
              style={[styles.shoppingTagParent1, styles.shoppingParentFlexBox3]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag4.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Creative Minds
              </Text>
            </View>
            <View
              style={[styles.shoppingTagParent2, styles.shoppingParentFlexBox3]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag4.png")}
              />
              <Text style={[styles.eventPlanner1, styles.eventTypo]}>
                Traditional Batik
              </Text>
            </View>
          </View>
          <Text style={[styles.bio, styles.bioTypo]}>Bio</Text>
          <View style={[styles.bioDescriptionWrapper, styles.bioWrapperLayout]}>
            <Text style={[styles.bioDescription, styles.hereAreSomeTypo]}>
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
            style={[styles.profileDetailsChild1, styles.profileChildPosition]}
          />
          <View
            style={[styles.profileDetailsChild2, styles.lineViewPosition]}
          />
          <View style={styles.eventCardShadowBox1}>
            <Image
              style={[styles.maskGroupIcon, styles.groupIconPosition]}
              contentFit="cover"
              source={require("../assets/mask-group2.png")}
            />
            <View style={[styles.eventCardChild, styles.groupIconPosition]} />
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
                source={require("../assets/antdesignstarfilled1.png")}
              />
              <Text style={[styles.text9, styles.textTypo]}>4.9</Text>
            </View>
            <View style={styles.dateIconShadowBox}>
              <View
                style={[styles.dateIconCarouselChild, styles.groupIconPosition]}
              />
              <Text style={[styles.armanRokni, styles.bioFlexBox]}>
                <Text style={styles.bioDescriptionTxtContainer}>
                  <Text style={styles.text10}>{`8
`}</Text>
                  <Text style={styles.mar}>Mar</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.minParent}>
              <Text style={styles.min}>Central Market, Kuala Lumpur</Text>
              <Image
                style={[styles.groupChild, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group-61.png")}
              />
            </View>
            <View style={[styles.groupParent1, styles.groupParentPosition]}>
              <Image
                style={[styles.groupIcon14, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group9.png")}
              />
              <Text style={[styles.kLiked, styles.likedTypo]}>+2k Liked</Text>
              <Text style={[styles.k, styles.kTypo]}>+10k</Text>
            </View>
            <Image
              style={[styles.component1Icon1, styles.component1IconLayout]}
              contentFit="cover"
              source={require("../assets/component-12.png")}
            />
          </View>
          <View style={styles.eventCardShadowBox}>
            <Image
              style={[styles.maskGroupIcon, styles.groupIconPosition]}
              contentFit="cover"
              source={require("../assets/mask-group3.png")}
            />
            <View style={[styles.eventCardChild, styles.groupIconPosition]} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon3.png")}
            />
            <View style={[styles.antDesignstarFilledGroup, styles.antFlexBox]}>
              <Image
                style={styles.antDesignstarFilledIcon}
                contentFit="cover"
                source={require("../assets/antdesignstarfilled2.png")}
              />
              <Text style={[styles.text11, styles.textTypo]}>4.8</Text>
            </View>
            <View style={styles.dateIconShadowBox}>
              <View
                style={[styles.dateIconCarouselChild, styles.groupIconPosition]}
              />
              <Text style={[styles.armanRokni, styles.bioFlexBox]}>
                <Text style={styles.bioDescriptionTxtContainer}>
                  <Text style={styles.text10}>{`22
`}</Text>
                  <Text style={styles.mar}>mar</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.minParent}>
              <Text style={styles.min}>Central Market, Kuala Lumpur</Text>
              <Image
                style={[styles.groupChild, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group-61.png")}
              />
            </View>
            <View style={[styles.groupParent2, styles.groupParentPosition]}>
              <Image
                style={[styles.groupIcon15, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group9.png")}
              />
              <Text style={[styles.kLiked1, styles.likedTypo]}>+1k Liked</Text>
            </View>
            <Text style={[styles.pasarCorakHati, styles.pestaWownitaTypo]}>
              Pasar Corak Hati Raya
            </Text>
            <Text style={[styles.k1, styles.kTypo]}>+12k</Text>
            <Image
              style={[styles.component1Icon2, styles.component1IconLayout]}
              contentFit="cover"
              source={require("../assets/component-13.png")}
            />
          </View>
          <Text style={[styles.hereAreSome, styles.hereAreSomeTypo]}>
            Here are some of my recent works
          </Text>
        </View>
      </View>
      <View style={[styles.property1variant3, styles.property1variantPosition]}>
        <View style={[styles.profileDetails, styles.profileLayout]}>
          <View style={[styles.rectangleParent, styles.headerLayout]}>
            <View style={[styles.frameChild5, styles.frameChildBg]} />
            <View style={[styles.header, styles.headerLayout]}>
              <Image
                style={[styles.ellipseParent, styles.frameItemLayout]}
                contentFit="cover"
                source={require("../assets/frame-33774.png")}
              />
              <Text style={styles.profileDetail1}>Profile Detail</Text>
              <Image
                style={[styles.vectorIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
              <Text style={[styles.fullTimeFlorist, styles.fullTypo]}>
                Full-Time Florist
              </Text>
              <Text style={[styles.funkyFlowersFlorist, styles.lucyTannerTypo]}>
                Funky Flowers Florist
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/mappin2.png")}
              />
              <Text style={styles.subangJayaSelangor}>
                Petaling Jaya, Selangor
              </Text>
              <Image
                style={[
                  styles.userInterfaceShare,
                  styles.userInterfaceShareLayout,
                ]}
                contentFit="cover"
                source={require("../assets/user-interface--share1.png")}
              />
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox1} />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupIcon1, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group10.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group11.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group12.png")}
                />
                <Image
                  style={[styles.groupIcon4, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group13.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.tagsProfile, styles.tagsLayout]}>
            <View style={[styles.shoppingTagParent15, styles.frameChildBg]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag5.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Florist
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagParent16,
                styles.shoppingParentFlexBox2,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag6.png")}
              />
              <Text style={[styles.eventPlanner19, styles.eventTypo]}>
                Flower Shop
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagParent17,
                styles.shoppingParentFlexBox2,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag6.png")}
              />
              <Text style={[styles.eventPlanner19, styles.eventTypo]}>
                Bouquet
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagParent18,
                styles.shoppingParentFlexBox2,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag7.png")}
              />
              <Text style={[styles.eventPlanner19, styles.eventTypo]}>
                Roses
              </Text>
            </View>
            <View style={[styles.shoppingTagParent19, styles.frameChildBg]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag8.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Small Business
              </Text>
            </View>
          </View>
          <Text style={[styles.bio, styles.bioTypo]}>Bio</Text>
          <View style={[styles.bioDescriptionWrapper, styles.bioWrapperLayout]}>
            <Text style={[styles.bioDescription, styles.hereAreSomeTypo]}>
              I'm a passionate event organizer with a knack for transforming
              ideas into unforgettable experiences. From intimate gatherings to
              large-scale conferences, I thrive on the challenge of exceeding
              expectations and creating moments that leave a lasting impact.
            </Text>
          </View>
          <View style={styles.bioDescriptionContainer}>
            <Text style={[styles.bioDescription1, styles.bioFlexBox]}>
              <Text style={styles.bioDescriptionTxtContainer}>
                <Text style={styles.myExpertiseLies}>{`My expertise lies in:
Event planning and coordination (virtual & in-person)
Venue sourcing and negotiation
Budget management and logistics
Vendor selection and communication
Marketing and promotion
Event execution and flawless on-site management
My passion lies in:
Seeing the joy and connection events foster
Bringing people together to learn, celebrate, or network
Working collaboratively with clients to bring their vision to life
Injecting creativity and innovation into every event detail
Ready to turn your next event into a success story? Let's chat!
`}</Text>
                <Text
                  style={styles.eventplannerEventmanagement}
                >{`#EventPlanner #EventManagement #EventPro #MeetingPlanner #ConferencePlanner #EventProduction #ExperientialMarketing #CorporateEvents #NonProfitEvents #VirtualEvents #HybridEvents
`}</Text>
                <Text style={styles.myExpertiseLies}>{`pen_spark
`}</Text>
              </Text>
            </Text>
          </View>
          <Text style={[styles.aboutMe, styles.reviewTypo]}>About me</Text>
          <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
          <Text style={[styles.collections, styles.reviewTypo]}>
            Collections
          </Text>
          <View
            style={[styles.profileDetailsChild, styles.profileChildPosition]}
          />
          <Image
            style={styles.profileDetailsItem}
            contentFit="cover"
            source={require("../assets/line-5.png")}
          />
        </View>
        <View style={[styles.profileDetails1, styles.profileLayout]}>
          <View style={[styles.rectangleParent, styles.headerLayout]}>
            <View style={[styles.frameChild7, styles.frameChildBg]} />
            <View style={[styles.header, styles.headerLayout]}>
              <Image
                style={[styles.ellipseParent, styles.frameItemLayout]}
                contentFit="cover"
                source={require("../assets/frame-33774.png")}
              />
              <Text style={styles.profileDetail1}>Profile Detail</Text>
              <Image
                style={[styles.vectorIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
              <Text style={[styles.fullTimeFlorist, styles.fullTypo]}>
                Full-Time Florist
              </Text>
              <Text style={[styles.funkyFlowersFlorist, styles.lucyTannerTypo]}>
                Funky Flowers Florist
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/mappin3.png")}
              />
              <Text style={styles.subangJayaSelangor}>
                Petaling Jaya, Selangor
              </Text>
              <Image
                style={[
                  styles.userInterfaceShare,
                  styles.userInterfaceShareLayout,
                ]}
                contentFit="cover"
                source={require("../assets/user-interface--share1.png")}
              />
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox1} />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupIcon1, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group10.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group14.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group15.png")}
                />
                <Image
                  style={[styles.groupIcon4, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group13.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.tagsProfile, styles.tagsLayout]}>
            <View style={[styles.shoppingTagParent15, styles.frameChildBg]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag5.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Florist
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagParent16,
                styles.shoppingParentFlexBox2,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag6.png")}
              />
              <Text style={[styles.eventPlanner19, styles.eventTypo]}>
                Flower Shop
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagParent17,
                styles.shoppingParentFlexBox2,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag6.png")}
              />
              <Text style={[styles.eventPlanner19, styles.eventTypo]}>
                Bouquet
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagParent18,
                styles.shoppingParentFlexBox2,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag7.png")}
              />
              <Text style={[styles.eventPlanner19, styles.eventTypo]}>
                Roses
              </Text>
            </View>
            <View style={[styles.shoppingTagParent19, styles.frameChildBg]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag8.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Small Business
              </Text>
            </View>
          </View>
          <Text style={[styles.bio, styles.bioTypo]}>Bio</Text>
          <View style={[styles.bioDescriptionWrapper, styles.bioWrapperLayout]}>
            <Text style={[styles.bioDescription, styles.hereAreSomeTypo]}>
              I'm a passionate event organizer with a knack for transforming
              ideas into unforgettable experiences. From intimate gatherings to
              large-scale conferences, I thrive on the challenge of exceeding
              expectations and creating moments that leave a lasting impact.
            </Text>
          </View>
          <View style={styles.bioDescriptionContainer}>
            <Text style={[styles.bioDescription1, styles.bioFlexBox]}>
              <Text style={styles.bioDescriptionTxtContainer}>
                <Text style={styles.myExpertiseLies}>{`My expertise lies in:
Event planning and coordination (virtual & in-person)
Venue sourcing and negotiation
Budget management and logistics
Vendor selection and communication
Marketing and promotion
Event execution and flawless on-site management
My passion lies in:
Seeing the joy and connection events foster
Bringing people together to learn, celebrate, or network
Working collaboratively with clients to bring their vision to life
Injecting creativity and innovation into every event detail
Ready to turn your next event into a success story? Let's chat!
`}</Text>
                <Text
                  style={styles.eventplannerEventmanagement}
                >{`#EventPlanner #EventManagement #EventPro #MeetingPlanner #ConferencePlanner #EventProduction #ExperientialMarketing #CorporateEvents #NonProfitEvents #VirtualEvents #HybridEvents
`}</Text>
                <Text style={styles.myExpertiseLies}>{`pen_spark
`}</Text>
              </Text>
            </Text>
          </View>
          <Text style={[styles.aboutMe, styles.reviewTypo]}>About me</Text>
          <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
          <Text style={[styles.collections, styles.reviewTypo]}>
            Collections
          </Text>
          <View
            style={[styles.profileDetailsChild, styles.profileChildPosition]}
          />
          <Image
            style={styles.profileDetailsItem}
            contentFit="cover"
            source={require("../assets/line-5.png")}
          />
        </View>
        <View style={[styles.profileDetails2, styles.groupIconPosition]}>
          <View style={[styles.rectangleParent, styles.headerLayout]}>
            <View style={[styles.frameChild9, styles.frameChildBg]} />
            <View style={[styles.header, styles.headerLayout]}>
              <Image
                style={[styles.ellipseParent, styles.frameItemLayout]}
                contentFit="cover"
                source={require("../assets/frame-33774.png")}
              />
              <Text style={styles.profileDetail1}>Profile Detail</Text>
              <Image
                style={[styles.vectorIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
              <Text style={[styles.fullTimeFlorist, styles.fullTypo]}>
                Full-Time Florist
              </Text>
              <Text style={[styles.funkyFlowersFlorist, styles.lucyTannerTypo]}>
                Funky Flowers Florist
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/mappin3.png")}
              />
              <Text style={styles.subangJayaSelangor}>
                Petaling Jaya, Selangor
              </Text>
              <Image
                style={[
                  styles.userInterfaceShare,
                  styles.userInterfaceShareLayout,
                ]}
                contentFit="cover"
                source={require("../assets/user-interface--share1.png")}
              />
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox1} />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupIcon1, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group16.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group14.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group15.png")}
                />
                <Image
                  style={[styles.groupIcon4, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group13.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.tagsProfile, styles.tagsLayout]}>
            <View style={[styles.shoppingTagParent15, styles.frameChildBg]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag5.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Florist
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagParent16,
                styles.shoppingParentFlexBox2,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag6.png")}
              />
              <Text style={[styles.eventPlanner19, styles.eventTypo]}>
                Flower Shop
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagParent17,
                styles.shoppingParentFlexBox2,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag6.png")}
              />
              <Text style={[styles.eventPlanner19, styles.eventTypo]}>
                Bouquet
              </Text>
            </View>
            <View
              style={[
                styles.shoppingTagParent18,
                styles.shoppingParentFlexBox2,
              ]}
            >
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag7.png")}
              />
              <Text style={[styles.eventPlanner19, styles.eventTypo]}>
                Roses
              </Text>
            </View>
            <View style={[styles.shoppingTagParent19, styles.frameChildBg]}>
              <Image
                style={styles.shoppingTag}
                contentFit="cover"
                source={require("../assets/shopping--tag8.png")}
              />
              <Text style={[styles.eventPlanner, styles.eventTypo]}>
                Small Business
              </Text>
            </View>
          </View>
          <Text style={[styles.bio, styles.bioTypo]}>Bio</Text>
          <View style={[styles.bioDescriptionWrapper, styles.bioWrapperLayout]}>
            <Text style={[styles.bioDescription, styles.hereAreSomeTypo]}>
              I'm a passionate event organizer with a knack for transforming
              ideas into unforgettable experiences. From intimate gatherings to
              large-scale conferences, I thrive on the challenge of exceeding
              expectations and creating moments that leave a lasting impact.
            </Text>
          </View>
          <View style={styles.bioDescriptionContainer}>
            <Text style={[styles.bioDescription1, styles.bioFlexBox]}>
              <Text style={styles.bioDescriptionTxtContainer}>
                <Text style={styles.myExpertiseLies}>{`My expertise lies in:
Event planning and coordination (virtual & in-person)
Venue sourcing and negotiation
Budget management and logistics
Vendor selection and communication
Marketing and promotion
Event execution and flawless on-site management
My passion lies in:
Seeing the joy and connection events foster
Bringing people together to learn, celebrate, or network
Working collaboratively with clients to bring their vision to life
Injecting creativity and innovation into every event detail
Ready to turn your next event into a success story? Let's chat!
`}</Text>
                <Text
                  style={styles.eventplannerEventmanagement}
                >{`#EventPlanner #EventManagement #EventPro #MeetingPlanner #ConferencePlanner #EventProduction #ExperientialMarketing #CorporateEvents #NonProfitEvents #VirtualEvents #HybridEvents
`}</Text>
                <Text style={styles.myExpertiseLies}>{`pen_spark
`}</Text>
              </Text>
            </Text>
          </View>
          <Text style={[styles.aboutMe, styles.reviewTypo]}>About me</Text>
          <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
          <Text style={[styles.collections, styles.reviewTypo]}>
            Collections
          </Text>
          <View
            style={[styles.profileDetailsChild, styles.profileChildPosition]}
          />
          <Image
            style={styles.profileDetailsItem}
            contentFit="cover"
            source={require("../assets/line-5.png")}
          />
        </View>
      </View>
      <View style={[styles.property1variant2, styles.property1variantPosition]}>
        <View style={[styles.profileDetails2, styles.groupIconPosition]}>
          <Text style={[styles.aboutMe, styles.reviewTypo]}>About me</Text>
          <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
          <Text style={[styles.collections, styles.reviewTypo]}>
            Collections
          </Text>
          <View
            style={[styles.profileDetailsChild1, styles.profileChildPosition]}
          />
          <View
            style={[styles.profileDetailsChild2, styles.lineViewPosition]}
          />
          <View style={styles.eventCardShadowBox1}>
            <Image
              style={[styles.maskGroupIcon, styles.groupIconPosition]}
              contentFit="cover"
              source={require("../assets/mask-group2.png")}
            />
            <View style={[styles.eventCardChild, styles.groupIconPosition]} />
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
              <Text style={[styles.text9, styles.textTypo]}>4.9</Text>
            </View>
            <View style={styles.dateIconShadowBox}>
              <View
                style={[styles.dateIconCarouselChild, styles.groupIconPosition]}
              />
              <Text style={[styles.armanRokni, styles.bioFlexBox]}>
                <Text style={styles.bioDescriptionTxtContainer}>
                  <Text style={styles.text10}>{`8
`}</Text>
                  <Text style={styles.mar}>Mar</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.minParent}>
              <Text style={styles.min}>Central Market, Kuala Lumpur</Text>
              <Image
                style={[styles.groupChild, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group-61.png")}
              />
            </View>
            <View style={[styles.groupParent1, styles.groupParentPosition]}>
              <Image
                style={[styles.groupIcon14, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group17.png")}
              />
              <Text style={[styles.kLiked, styles.likedTypo]}>+2k Liked</Text>
              <Text style={[styles.k, styles.kTypo]}>+10k</Text>
            </View>
            <Image
              style={[styles.component1Icon1, styles.component1IconLayout]}
              contentFit="cover"
              source={require("../assets/component-12.png")}
            />
          </View>
          <View style={styles.eventCardShadowBox}>
            <Image
              style={[styles.maskGroupIcon, styles.groupIconPosition]}
              contentFit="cover"
              source={require("../assets/mask-group3.png")}
            />
            <View style={[styles.eventCardChild, styles.groupIconPosition]} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon3.png")}
            />
            <View style={[styles.antDesignstarFilledGroup, styles.antFlexBox]}>
              <Image
                style={styles.antDesignstarFilledIcon}
                contentFit="cover"
                source={require("../assets/antdesignstarfilled4.png")}
              />
              <Text style={[styles.text11, styles.textTypo]}>4.8</Text>
            </View>
            <View style={styles.dateIconShadowBox}>
              <View
                style={[styles.dateIconCarouselChild, styles.groupIconPosition]}
              />
              <Text style={[styles.armanRokni, styles.bioFlexBox]}>
                <Text style={styles.bioDescriptionTxtContainer}>
                  <Text style={styles.text10}>{`22
`}</Text>
                  <Text style={styles.mar}>mar</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.minParent}>
              <Text style={styles.min}>Central Market, Kuala Lumpur</Text>
              <Image
                style={[styles.groupChild, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group-61.png")}
              />
            </View>
            <View style={[styles.groupParent2, styles.groupParentPosition]}>
              <Image
                style={[styles.groupIcon15, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group17.png")}
              />
              <Text style={[styles.kLiked1, styles.likedTypo]}>+1k Liked</Text>
            </View>
            <Text style={[styles.pasarCorakHati, styles.pestaWownitaTypo]}>
              Pasar Corak Hati Raya
            </Text>
            <Text style={[styles.k1, styles.kTypo]}>+12k</Text>
            <Image
              style={[styles.component1Icon2, styles.component1IconLayout]}
              contentFit="cover"
              source={require("../assets/component-13.png")}
            />
          </View>
          <Text style={[styles.hereAreSome, styles.hereAreSomeTypo]}>
            Here are some of my recent works
          </Text>
          <View style={[styles.rectangleParent10, styles.text1Position]}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.header, styles.headerLayout]}>
              <View style={[styles.ellipseParent, styles.frameItemLayout]}>
                <Image
                  style={[styles.frameItem, styles.frameItemPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-291.png")}
                />
                <Image
                  style={[styles.memojiBoys3153, styles.memojiLayout]}
                  contentFit="cover"
                  source={require("../assets/memoji-boys-3151.png")}
                />
              </View>
              <Text style={styles.profileDetail1}>Profile Detail</Text>
              <Image
                style={[styles.vectorIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
              <Text style={[styles.fullTimeFreelancer, styles.fullTypo]}>
                Full-Time Freelancer
              </Text>
              <Text style={[styles.lucyTanner, styles.lucyTannerTypo]}>
                Raghu Simon
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/mappin4.png")}
              />
              <Text style={styles.subangJayaSelangor}>
                Subang Jaya, Selangor
              </Text>
              <Image
                style={[
                  styles.userInterfaceShare,
                  styles.userInterfaceShareLayout,
                ]}
                contentFit="cover"
                source={require("../assets/user-interface--share1.png")}
              />
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox1} />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupIcon1, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group18.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group19.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group20.png")}
                />
                <Image
                  style={[styles.groupIcon4, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group21.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.tagsProfile6, styles.text1Position]}>
            <View style={styles.instanceParent}>
              <View
                style={[
                  styles.shoppingTagParent30,
                  styles.shoppingParentFlexBox1,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag9.png")}
                />
                <Text style={[styles.eventPlanner, styles.eventTypo]}>
                  Event Planner
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent31,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag10.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Non profit Events
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent32,
                  styles.shoppingParentFlexBox1,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag9.png")}
                />
                <Text style={[styles.eventPlanner, styles.eventTypo]}>
                  Experiential Marketing
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent33,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag10.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Event Production
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent34,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag10.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Virtual Events
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent35,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag10.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Corporate Events
                </Text>
              </View>
            </View>
          </View>
          <Text style={[styles.bio6, styles.bioTypo]}>Bio</Text>
          <View
            style={[styles.bioDescriptionWrapper7, styles.bioWrapperLayout]}
          >
            <Text style={[styles.bioDescription, styles.hereAreSomeTypo]}>
              I'm a passionate event organizer with a knack for transforming
              ideas into unforgettable experiences. From intimate gatherings to
              large-scale conferences, I thrive on the challenge of exceeding
              expectations and creating moments that leave a lasting impact.
            </Text>
          </View>
        </View>
        <View style={[styles.profileDetails1, styles.profileLayout]}>
          <View style={styles.ratingStar}>
            <Text style={styles.ratings}>(100 ratings)</Text>
            <Text style={styles.text}>4.7</Text>
            <Image
              style={[styles.component1Icon, styles.groupIconLayout2]}
              contentFit="cover"
              source={require("../assets/component-11.png")}
            />
          </View>
          <Text style={[styles.aboutMe, styles.reviewTypo]}>About me</Text>
          <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
          <Text style={[styles.collections, styles.reviewTypo]}>
            Collections
          </Text>
          <View
            style={[styles.profileDetailsInner, styles.profileChildPosition]}
          />
          <View style={[styles.lineView, styles.lineViewPosition]} />
          <View style={[styles.reviewCard, styles.reviewCardLayout]}>
            <View style={[styles.reviewCardChild, styles.reviewCardLayout]} />
            <Text
              style={[styles.leonardoDaVinci, styles.lovedTheCoursePosition]}
            >
              Leonardo Da Vinci
            </Text>
            <Text
              style={[styles.lovedTheCourse, styles.lovedTheCoursePosition]}
            >
              Loved the course. I've learned some very subtle tecniques,
              expecially on leaves.
            </Text>
            <Text style={styles.today}>Today</Text>
            <Image
              style={[
                styles.generalImageSquare,
                styles.userInterfaceShareLayout,
              ]}
              contentFit="cover"
              source={require("../assets/general--image--square.png")}
            />
            <Image
              style={styles.reviewCardItem}
              contentFit="cover"
              source={require("../assets/frame-33768.png")}
            />
            <View style={styles.likesDislikes}>
              <View style={styles.dislikes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsup.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>12</Text>
              </View>
              <View style={styles.likes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsdown.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>3</Text>
              </View>
            </View>
          </View>
          <View style={[styles.reviewCard1, styles.reviewCardLayout]}>
            <View style={[styles.reviewCardChild, styles.reviewCardLayout]} />
            <Text
              style={[styles.leonardoDaVinci, styles.lovedTheCoursePosition]}
            >
              Leonardo Da Vinci
            </Text>
            <Text
              style={[styles.lovedTheCourse, styles.lovedTheCoursePosition]}
            >
              Loved the course. I've learned some very subtle tecniques,
              expecially on leaves.
            </Text>
            <Text style={styles.today}>Today</Text>
            <Image
              style={[
                styles.generalImageSquare,
                styles.userInterfaceShareLayout,
              ]}
              contentFit="cover"
              source={require("../assets/general--image--square.png")}
            />
            <Image
              style={styles.reviewCardItem}
              contentFit="cover"
              source={require("../assets/frame-33768.png")}
            />
            <View style={styles.likesDislikes}>
              <View style={styles.dislikes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsup.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>12</Text>
              </View>
              <View style={styles.likes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsdown.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>3</Text>
              </View>
            </View>
          </View>
          <View style={[styles.reviewCard2, styles.reviewCardLayout]}>
            <View style={[styles.reviewCardChild, styles.reviewCardLayout]} />
            <Text
              style={[styles.leonardoDaVinci, styles.lovedTheCoursePosition]}
            >
              Leonardo Da Vinci
            </Text>
            <Text
              style={[styles.lovedTheCourse, styles.lovedTheCoursePosition]}
            >
              Loved the course. I've learned some very subtle tecniques,
              expecially on leaves.
            </Text>
            <Text style={styles.today}>Today</Text>
            <Image
              style={[
                styles.generalImageSquare,
                styles.userInterfaceShareLayout,
              ]}
              contentFit="cover"
              source={require("../assets/general--image--square.png")}
            />
            <Image
              style={styles.reviewCardItem}
              contentFit="cover"
              source={require("../assets/frame-33768.png")}
            />
            <View style={styles.likesDislikes}>
              <View style={styles.dislikes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsup.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>12</Text>
              </View>
              <View style={styles.likes}>
                <Image
                  style={styles.thumbsUpIcon}
                  contentFit="cover"
                  source={require("../assets/thumbsdown.png")}
                />
                <Text style={[styles.text1, styles.text1Position]}>3</Text>
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent12, styles.tagsProfile7Position]}>
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.header, styles.headerLayout]}>
              <View style={[styles.ellipseParent, styles.frameItemLayout]}>
                <Image
                  style={[styles.frameItem, styles.frameItemPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-291.png")}
                />
                <Image
                  style={[styles.memojiBoys3153, styles.memojiLayout]}
                  contentFit="cover"
                  source={require("../assets/memoji-boys-3151.png")}
                />
              </View>
              <Text style={styles.profileDetail1}>Profile Detail</Text>
              <Image
                style={[styles.vectorIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
              <Text style={[styles.fullTimeFreelancer, styles.fullTypo]}>
                Full-Time Freelancer
              </Text>
              <Text style={[styles.lucyTanner, styles.lucyTannerTypo]}>
                Raghu Simon
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/mappin4.png")}
              />
              <Text style={styles.subangJayaSelangor}>
                Subang Jaya, Selangor
              </Text>
              <Image
                style={[
                  styles.userInterfaceShare,
                  styles.userInterfaceShareLayout,
                ]}
                contentFit="cover"
                source={require("../assets/user-interface--share1.png")}
              />
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox1} />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupIcon1, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group22.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group19.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group20.png")}
                />
                <Image
                  style={[styles.groupIcon4, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group21.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.tagsProfile7, styles.tagsProfile7Position]}>
            <View style={styles.instanceParent}>
              <View
                style={[
                  styles.shoppingTagParent30,
                  styles.shoppingParentFlexBox1,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag9.png")}
                />
                <Text style={[styles.eventPlanner, styles.eventTypo]}>
                  Event Planner
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent31,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag10.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Non profit Events
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent32,
                  styles.shoppingParentFlexBox1,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag9.png")}
                />
                <Text style={[styles.eventPlanner, styles.eventTypo]}>
                  Experiential Marketing
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent33,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag10.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Event Production
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent34,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag10.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Virtual Events
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent35,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag10.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Corporate Events
                </Text>
              </View>
            </View>
          </View>
          <Text style={[styles.bio7, styles.bioTypo]}>Bio</Text>
          <View
            style={[styles.bioDescriptionWrapper8, styles.bioWrapperLayout]}
          >
            <Text style={[styles.bioDescription, styles.hereAreSomeTypo]}>
              I'm a passionate event organizer with a knack for transforming
              ideas into unforgettable experiences. From intimate gatherings to
              large-scale conferences, I thrive on the challenge of exceeding
              expectations and creating moments that leave a lasting impact.
            </Text>
          </View>
        </View>
        <View style={[styles.profileDetails, styles.profileLayout]}>
          <View
            style={[styles.rectangleParent14, styles.rectangleParentLayout]}
          >
            <View style={styles.frameChildShadowBox} />
            <View style={[styles.header, styles.headerLayout]}>
              <View style={[styles.ellipseParent, styles.frameItemLayout]}>
                <Image
                  style={[styles.frameItem, styles.frameItemPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-291.png")}
                />
                <Image
                  style={[styles.memojiBoys3153, styles.memojiLayout]}
                  contentFit="cover"
                  source={require("../assets/memoji-boys-3151.png")}
                />
              </View>
              <Text style={styles.profileDetail1}>Profile Detail</Text>
              <Image
                style={[styles.vectorIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
              <Text style={[styles.fullTimeFreelancer, styles.fullTypo]}>
                Full-Time Freelancer
              </Text>
              <Text style={[styles.lucyTanner, styles.lucyTannerTypo]}>
                Raghu Simon
              </Text>
              <Image
                style={[styles.mapPinIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/mappin5.png")}
              />
              <Text style={styles.subangJayaSelangor}>
                Subang Jaya, Selangor
              </Text>
              <Image
                style={[
                  styles.userInterfaceShare,
                  styles.userInterfaceShareLayout,
                ]}
                contentFit="cover"
                source={require("../assets/user-interface--share1.png")}
              />
            </View>
            <View style={styles.rectangleGroup}>
              <View style={styles.frameChildShadowBox1} />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout2]}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Image
                  style={[styles.groupIcon1, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group22.png")}
                />
                <Image
                  style={[styles.groupIcon2, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group23.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group24.png")}
                />
                <Image
                  style={[styles.groupIcon4, styles.groupIconLayout1]}
                  contentFit="cover"
                  source={require("../assets/group21.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.tagsProfile, styles.tagsLayout]}>
            <View style={styles.instanceParent}>
              <View
                style={[
                  styles.shoppingTagParent30,
                  styles.shoppingParentFlexBox1,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag11.png")}
                />
                <Text style={[styles.eventPlanner, styles.eventTypo]}>
                  Event Planner
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent31,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag12.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Non profit Events
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent32,
                  styles.shoppingParentFlexBox1,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag11.png")}
                />
                <Text style={[styles.eventPlanner, styles.eventTypo]}>
                  Experiential Marketing
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent33,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag12.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Event Production
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent34,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag12.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Virtual Events
                </Text>
              </View>
              <View
                style={[
                  styles.shoppingTagParent35,
                  styles.shoppingParentFlexBox,
                ]}
              >
                <Image
                  style={styles.shoppingTag}
                  contentFit="cover"
                  source={require("../assets/shopping--tag12.png")}
                />
                <Text style={[styles.eventPlanner34, styles.eventTypo]}>
                  Corporate Events
                </Text>
              </View>
            </View>
          </View>
          <Text style={[styles.bio, styles.bioTypo]}>Bio</Text>
          <View style={[styles.bioDescriptionWrapper, styles.bioWrapperLayout]}>
            <Text style={[styles.bioDescription, styles.hereAreSomeTypo]}>
              I'm a passionate event organizer with a knack for transforming
              ideas into unforgettable experiences. From intimate gatherings to
              large-scale conferences, I thrive on the challenge of exceeding
              expectations and creating moments that leave a lasting impact.
            </Text>
          </View>
          <View style={styles.bioDescriptionContainer}>
            <Text style={[styles.bioDescription1, styles.bioFlexBox]}>
              <Text style={styles.bioDescriptionTxtContainer}>
                <Text style={styles.myExpertiseLies}>{`My expertise lies in:
Event planning and coordination (virtual & in-person)
Venue sourcing and negotiation
Budget management and logistics
Vendor selection and communication
Marketing and promotion
Event execution and flawless on-site management
My passion lies in:
Seeing the joy and connection events foster
Bringing people together to learn, celebrate, or network
Working collaboratively with clients to bring their vision to life
Injecting creativity and innovation into every event detail
Ready to turn your next event into a success story? Let's chat!
`}</Text>
                <Text
                  style={styles.eventplannerEventmanagement}
                >{`#EventPlanner #EventManagement #EventPro #MeetingPlanner #ConferencePlanner #EventProduction #ExperientialMarketing #CorporateEvents #NonProfitEvents #VirtualEvents #HybridEvents
`}</Text>
                <Text style={styles.myExpertiseLies}>{`pen_spark
`}</Text>
              </Text>
            </Text>
          </View>
          <Text style={[styles.aboutMe, styles.reviewTypo]}>About me</Text>
          <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
          <Text style={[styles.collections, styles.reviewTypo]}>
            Collections
          </Text>
          <View
            style={[styles.profileDetailsChild, styles.profileChildPosition]}
          />
          <Image
            style={styles.profileDetailsItem}
            contentFit="cover"
            source={require("../assets/line-5.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    width: "31.12%",
    backgroundColor: Color.colorWhite,
    bottom: "0%",
    top: "0%",
    height: "100%",
    overflow: "hidden",
  },
  headerLayout: {
    width: 332,
    position: "absolute",
  },
  frameChildShadowBox2: {
    height: 240,
    width: 319,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    top: 27,
    left: 9,
  },
  frameItemLayout: {
    width: 126,
    position: "absolute",
  },
  frameItemPosition: {
    left: "50%",
    top: "50%",
  },
  memojiLayout: {
    height: 128,
    width: 105,
    position: "absolute",
  },
  groupIconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fullTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: "70.04%",
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.bodySmallBold_size,
    position: "absolute",
  },
  lucyTannerTypo: {
    lineHeight: 24,
    fontSize: FontSize.size_mid,
    top: 156,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  userInterfaceShareLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupLayout: {
    height: 22,
    width: 107,
    position: "absolute",
  },
  groupIconPosition: {
    right: "0%",
    position: "absolute",
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
  groupIconLayout1: {
    width: "20.19%",
    height: "98.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tagsLayout: {
    height: 66,
    width: 351,
  },
  shoppingParentFlexBox4: {
    padding: 7,
    borderRadius: Border.br_3xl_2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  eventTypo: {
    marginLeft: 7.4,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    textAlign: "left",
  },
  shoppingParentFlexBox3: {
    backgroundColor: Color.colorPink,
    padding: 7,
    flexDirection: "row",
    borderRadius: Border.br_3xl_2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  bioTypo: {
    fontFamily: FontFamily.figtreeSemiBold,
    fontSize: FontSize.size_sm_5,
    color: Color.titelTextColor,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  bioWrapperLayout: {
    opacity: 0.5,
    width: "84.27%",
    height: "8.25%",
    position: "absolute",
  },
  hereAreSomeTypo: {
    fontSize: FontSize.size_2xs_7,
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
    position: "absolute",
  },
  bioFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  reviewTypo: {
    top: 491,
    color: Color.titelTextColor,
    fontFamily: FontFamily.figtreeSemiBold,
    fontSize: FontSize.size_sm_5,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  profileChildPosition: {
    height: 1,
    borderTopWidth: 0.9,
    borderColor: Color.titelTextColor,
    borderStyle: "solid",
    top: 510,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 267,
    width: 332,
  },
  lineViewPosition: {
    borderTopWidth: 0.7,
    borderColor: Color.colorGray_1600,
    height: 1,
    borderStyle: "solid",
    top: 510,
    position: "absolute",
  },
  reviewCardLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  lovedTheCoursePosition: {
    left: 38,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  text1Position: {
    left: 12,
    position: "absolute",
  },
  pestaWownitaTypo: {
    lineHeight: 11,
    fontFamily: FontFamily.bodyMediumBold,
    left: "6.52%",
    top: "75.31%",
    fontSize: FontSize.size_5xs_2,
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
    flexDirection: "row",
    alignItems: "center",
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
  groupParentPosition: {
    bottom: "5.62%",
    top: "87.92%",
    height: "6.46%",
    left: "6.52%",
    position: "absolute",
  },
  likedTypo: {
    top: "12.1%",
    fontSize: FontSize.size_6xs_2,
    fontFamily: FontFamily.montserratSemiBold,
    lineHeight: 10,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  kTypo: {
    fontSize: FontSize.size_6xs_2,
    fontFamily: FontFamily.montserratSemiBold,
    lineHeight: 10,
    color: Color.primary,
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
  property1variantPosition: {
    left: 20,
    height: 812,
    width: 1205,
    position: "absolute",
  },
  frameChildBg: {
    backgroundColor: Color.colorGoldenrod_100,
    position: "absolute",
  },
  shoppingParentFlexBox2: {
    backgroundColor: Color.colorGold_100,
    padding: 7,
    flexDirection: "row",
    borderRadius: Border.br_3xl_2,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  shoppingParentFlexBox1: {
    backgroundColor: Color.colorMidnightblue_100,
    padding: 7,
    flexDirection: "row",
    borderRadius: Border.br_3xl_2,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  shoppingParentFlexBox: {
    backgroundColor: Color.colorLightsteelblue,
    padding: 7,
    flexDirection: "row",
    borderRadius: Border.br_3xl_2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  tagsProfile7Position: {
    left: 14,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorMediumvioletred,
    width: 319,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    top: 27,
    position: "absolute",
  },
  frameItem: {
    marginTop: -57.25,
    marginLeft: -63,
    height: 126,
    width: 126,
    position: "absolute",
  },
  memojiBoys315: {
    marginTop: -68.75,
    marginLeft: -53.4,
    left: "50%",
    top: "50%",
  },
  ellipseParent: {
    top: 19,
    height: 137,
    left: 104,
  },
  profileDetail1: {
    marginTop: -128.5,
    width: "30.76%",
    left: "38.3%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorMidnightblue_100,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.bodySmallBold_size,
    top: "50%",
    position: "absolute",
  },
  vectorIcon: {
    height: "3.74%",
    width: "1.78%",
    right: "98.22%",
    bottom: "94.9%",
    top: "1.36%",
    left: "0%",
    position: "absolute",
  },
  fullTimeFreelancer: {
    left: "31.06%",
    color: Color.colorWhite,
  },
  lucyTanner: {
    left: 112,
    textAlign: "left",
  },
  mapPinIcon: {
    height: "4.71%",
    width: "3.65%",
    top: "78.6%",
    right: "66.8%",
    bottom: "16.69%",
    left: "29.55%",
    position: "absolute",
  },
  subangJayaSelangor: {
    top: 202,
    left: 113,
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.bodySmallBold_size,
    position: "absolute",
  },
  userInterfaceShare: {
    left: 286,
    top: 46,
    overflow: "hidden",
  },
  header: {
    height: 257,
    left: 0,
    top: 0,
  },
  frameChildShadowBox1: {
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
    height: "49.51%",
    width: "5.85%",
    top: "31.22%",
    right: "76.37%",
    bottom: "19.27%",
    left: "17.78%",
    position: "absolute",
  },
  groupIcon1: {
    bottom: "1.36%",
    left: "79.81%",
    width: "20.19%",
    height: "98.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: "0%",
  },
  groupIcon2: {
    right: "52.47%",
    left: "27.35%",
  },
  groupIcon3: {
    right: "26.23%",
    left: "53.58%",
  },
  groupIcon4: {
    right: "79.81%",
    top: "1.36%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
  },
  groupParent: {
    top: 10,
    left: 37,
  },
  rectangleGroup: {
    top: 231,
    left: 77,
    height: 41,
    width: 183,
    position: "absolute",
  },
  rectangleParent: {
    top: 41,
    height: 272,
    left: 21,
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
    backgroundColor: Color.colorBrown_100,
    padding: 7,
    borderRadius: Border.br_3xl_2,
    top: 0,
    position: "absolute",
    left: 2,
  },
  eventPlanner1: {
    color: Color.colorBrown_100,
  },
  shoppingTagGroup: {
    left: 122,
    top: 0,
  },
  shoppingTagContainer: {
    left: 214,
    backgroundColor: Color.colorBrown_100,
    padding: 7,
    borderRadius: Border.br_3xl_2,
    top: 0,
    position: "absolute",
  },
  frameView: {
    top: 33,
    left: 2,
  },
  shoppingTagParent1: {
    left: 143,
    top: 33,
  },
  shoppingTagParent2: {
    left: 250,
    top: 33,
  },
  tagsProfile: {
    top: 330,
    left: 9,
    position: "absolute",
  },
  bio: {
    top: 400,
    color: Color.titelTextColor,
    left: 22,
  },
  bioDescription: {
    color: Color.colorGray_300,
    width: "100%",
    alignItems: "center",
    display: "flex",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  bioDescriptionWrapper: {
    top: "50.86%",
    right: "7.73%",
    bottom: "40.89%",
    left: "8%",
  },
  myExpertiseLies: {
    color: Color.colorGray_300,
  },
  eventplannerEventmanagement: {
    color: Color.primary,
  },
  bioDescriptionTxtContainer: {
    width: "100%",
  },
  bioDescription1: {
    fontSize: FontSize.size_3xs_1,
    width: "100%",
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  bioDescriptionContainer: {
    height: "33.37%",
    width: "79.73%",
    top: "63.18%",
    right: "14.4%",
    bottom: "3.45%",
    left: "5.87%",
    opacity: 0.8,
    position: "absolute",
  },
  aboutMe: {
    left: 24,
  },
  review: {
    left: 98,
  },
  collections: {
    left: 152,
  },
  profileDetailsChild: {
    width: 64,
    left: 22,
  },
  profileDetailsItem: {
    left: 61,
    width: 168,
    height: 0,
    top: 510,
    position: "absolute",
  },
  profileDetails: {
    right: "68.88%",
    backgroundColor: Color.colorWhite,
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorMediumvioletred,
    width: 319,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    top: 27,
    position: "absolute",
  },
  rectangleContainer: {
    top: 46,
    left: 21,
    position: "absolute",
  },
  ratings: {
    height: "72.31%",
    width: "63.72%",
    top: "9.23%",
    left: "36.28%",
    fontSize: FontSize.size_4xs_7,
    fontFamily: FontFamily.figtreeMedium,
    color: Color.shadesOfBlackGrey3,
    lineHeight: 10,
    fontWeight: "500",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_2xs_9,
    fontFamily: FontFamily.montserratSemiBold,
    left: 14,
    color: Color.titelTextColor,
    fontWeight: "600",
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  component1Icon: {
    width: "13.83%",
    right: "86.17%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  ratingStar: {
    height: "1.6%",
    width: "25.07%",
    top: "49.63%",
    right: "5.6%",
    bottom: "48.77%",
    left: "69.33%",
    position: "absolute",
  },
  profileDetailsInner: {
    left: 94,
    width: 55,
  },
  lineView: {
    width: 209,
    left: 21,
  },
  reviewCardChild: {
    top: -6,
    left: -6,
    borderColor: Color.colorGray_1100,
    width: 309,
    height: 61,
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
  },
  leonardoDaVinci: {
    marginTop: -21.5,
    fontSize: FontSize.size_3xs_5,
    lineHeight: 12,
    color: Color.universe,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 38,
  },
  lovedTheCourse: {
    marginTop: -1,
    fontSize: FontSize.size_3xs,
    lineHeight: 13,
    color: Color.objectBlack60,
    width: 244,
    height: 27,
    fontFamily: FontFamily.figtreeRegular,
  },
  today: {
    marginTop: -10.5,
    right: 239,
    lineHeight: 11,
    color: Color.colorGray_1200,
    fontSize: FontSize.size_5xs_2,
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  generalImageSquare: {
    top: 9,
    borderRadius: 18,
    left: 0,
  },
  reviewCardItem: {
    top: 4,
    left: 138,
    width: 51,
    height: 11,
    position: "absolute",
  },
  thumbsUpIcon: {
    width: 9,
    height: 9,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    fontSize: FontSize.size_5xs_4,
    letterSpacing: 0.1,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    color: Color.subtitleTextColor,
    textAlign: "left",
    top: 0,
  },
  dislikes: {
    width: 21,
    height: 9,
  },
  likes: {
    width: 17,
    marginLeft: 12.25,
    height: 9,
  },
  likesDislikes: {
    left: 232,
    paddingHorizontal: 0,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  reviewCard: {
    top: "64.9%",
    bottom: "29.06%",
    left: "10.67%",
    right: "10.24%",
    width: "79.09%",
    borderRadius: Border.br_mini,
    height: "6.03%",
  },
  reviewCard1: {
    top: "81.16%",
    bottom: "12.81%",
    left: "10.67%",
    right: "10.24%",
    width: "79.09%",
    borderRadius: Border.br_mini,
    height: "6.03%",
  },
  reviewCard2: {
    top: "73.03%",
    bottom: "20.94%",
    left: "10.67%",
    right: "10.24%",
    width: "79.09%",
    borderRadius: Border.br_mini,
    height: "6.03%",
  },
  profileDetails1: {
    right: "34.44%",
    left: "34.44%",
    backgroundColor: Color.colorWhite,
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  reviewCard3: {
    width: "24.61%",
    top: "89.41%",
    right: "37.63%",
    bottom: "4.56%",
    left: "37.76%",
    height: "6.03%",
    borderRadius: Border.br_mini,
  },
  frameChild2: {
    backgroundColor: Color.colorMediumvioletred,
    width: 319,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    top: 27,
    position: "absolute",
  },
  groupContainer: {
    top: 241,
    left: 114,
  },
  profileDetailsChild1: {
    width: 74,
    left: 152,
  },
  profileDetailsChild2: {
    width: 213,
    left: 22,
  },
  maskGroupIcon: {
    height: "78.28%",
    bottom: "21.72%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    top: "0%",
  },
  eventCardChild: {
    height: "27.86%",
    top: "72.14%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    width: "100%",
    backgroundColor: Color.colorWhite,
    left: "0%",
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
  text9: {
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
    width: "100%",
    backgroundColor: Color.colorWhite,
    left: "0%",
    top: "0%",
  },
  text10: {
    fontSize: FontSize.size_3xs_3,
    lineHeight: 3,
  },
  mar: {
    fontSize: FontSize.size_7xs_1,
    lineHeight: 7,
  },
  armanRokni: {
    height: "93.75%",
    width: "73.28%",
    top: "6.25%",
    left: "13.36%",
    textTransform: "uppercase",
    textAlign: "center",
    color: Color.colorMidnightblue_100,
    display: "flex",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
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
    color: Color.colorGray_300,
    fontFamily: FontFamily.figtreeRegular,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  groupChild: {
    width: "8.3%",
    right: "91.7%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
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
  groupIcon14: {
    width: "21.83%",
    right: "78.17%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  kLiked: {
    left: "25.78%",
    color: Color.universe,
  },
  k: {
    top: "16.94%",
    left: "89.39%",
  },
  groupParent1: {
    width: "87.76%",
    right: "5.72%",
  },
  component1Icon1: {
    top: "88.49%",
    bottom: "5.05%",
  },
  eventCardShadowBox1: {
    height: 192,
    width: 150,
    left: 29,
    top: 546,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  text11: {
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
  groupIcon15: {
    width: "45.71%",
    right: "54.29%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  kLiked1: {
    left: "53.97%",
    color: Color.colorDarkslateblue_100,
  },
  groupParent2: {
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
  component1Icon2: {
    top: "89.27%",
    bottom: "4.27%",
  },
  eventCardShadowBox: {
    left: 197,
    height: 192,
    width: 150,
    top: 546,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  hereAreSome: {
    top: 521,
    left: 26,
    opacity: 0.4,
    color: Color.titelTextColor,
  },
  profileDetails2: {
    left: "68.88%",
    backgroundColor: Color.colorWhite,
    bottom: "0%",
    top: "0%",
    width: "31.12%",
    height: "100%",
    overflow: "hidden",
  },
  property1default: {
    top: 18,
    height: 812,
    width: 1205,
    left: 21,
    position: "absolute",
  },
  frameChild5: {
    height: 240,
    width: 319,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    top: 27,
    left: 9,
    backgroundColor: Color.colorGoldenrod_100,
  },
  fullTimeFlorist: {
    left: "35.28%",
    color: Color.colorWhite,
  },
  funkyFlowersFlorist: {
    left: 72,
    textAlign: "left",
  },
  shoppingTagParent15: {
    width: 76,
    padding: 7,
    borderRadius: Border.br_3xl_2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorGoldenrod_100,
    left: 2,
    top: 0,
  },
  eventPlanner19: {
    color: Color.colorDarkgoldenrod,
  },
  shoppingTagParent16: {
    left: 84,
    width: 97,
  },
  shoppingTagParent17: {
    left: 187,
    width: 86,
  },
  shoppingTagParent18: {
    left: 279,
    width: 72,
  },
  shoppingTagParent19: {
    left: 33,
    width: 103,
    top: 33,
    padding: 7,
    borderRadius: Border.br_3xl_2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorGoldenrod_100,
  },
  frameChild7: {
    height: 240,
    width: 319,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    top: 27,
    left: 9,
    backgroundColor: Color.colorGoldenrod_100,
  },
  frameChild9: {
    height: 240,
    width: 319,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    top: 27,
    left: 9,
    backgroundColor: Color.colorGoldenrod_100,
  },
  property1variant3: {
    top: 1684,
  },
  frameChildShadowBox: {
    backgroundColor: Color.primary,
    height: 240,
    width: 319,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    left: 9,
    top: 27,
    position: "absolute",
  },
  memojiBoys3153: {
    top: 22,
    left: 11,
  },
  rectangleParent10: {
    top: 37,
    height: 267,
    width: 332,
  },
  shoppingTagParent30: {
    left: 0,
  },
  eventPlanner34: {
    color: Color.galaxy,
  },
  shoppingTagParent31: {
    left: 104,
    top: 0,
  },
  shoppingTagParent32: {
    left: 223,
  },
  shoppingTagParent33: {
    left: 42,
    top: 33,
  },
  shoppingTagParent34: {
    left: 158,
    top: 33,
  },
  shoppingTagParent35: {
    left: 262,
    top: 33,
  },
  instanceParent: {
    width: 375,
    height: 60,
    left: 2,
    top: 0,
    position: "absolute",
  },
  tagsProfile6: {
    top: 327,
    height: 66,
    width: 351,
  },
  bio6: {
    top: 397,
    left: 25,
    color: Color.titelTextColor,
  },
  bioDescriptionWrapper7: {
    top: "50.49%",
    right: "6.93%",
    bottom: "41.26%",
    left: "8.8%",
  },
  rectangleParent12: {
    top: 39,
    height: 267,
    width: 332,
  },
  tagsProfile7: {
    top: 329,
    height: 66,
    width: 351,
  },
  bio7: {
    top: 399,
    left: 27,
    color: Color.titelTextColor,
  },
  bioDescriptionWrapper8: {
    top: "50.74%",
    right: "6.4%",
    bottom: "41.01%",
    left: "9.33%",
  },
  rectangleParent14: {
    top: 40,
    left: 9,
    position: "absolute",
  },
  property1variant2: {
    top: 852,
  },
  profileDetail: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet_100,
    width: 1245,
    height: 2516,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default ProfileDetail;
