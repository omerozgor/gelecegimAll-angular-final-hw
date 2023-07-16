import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comments: Comment[] = [];

  constructor() {
    // comments için mock data oluşturuldu
    this.comments = [
      {
        commentId: 1,
        postId: 41,
        userId: 8,
        comment: "Music is the universal language that speaks to our souls.",
        creationDate: "2022-01-24T15:57:38",
        isConfirmed: true
      },
      {
        commentId: 2,
        postId: 15,
        userId: 19,
        comment: "This blog post perfectly captures the magic of music.",
        creationDate: "2021-10-24T13:19:15",
        isConfirmed: true
      },
      {
        commentId: 3,
        postId: 25,
        userId: 11,
        comment: "I am constantly amazed by the power of music to evoke emotions.",
        creationDate: "2021-06-07T20:05:57",
        isConfirmed: true
      },
      {
        commentId: 4,
        postId: 1,
        userId: 12,
        comment: "The way music can transport us to different times and places is incredible.",
        creationDate: "2021-03-12T20:21:22",
        isConfirmed: true
      },
      {
        commentId: 5,
        postId: 42,
        userId: 3,
        comment: "I couldnt agree more with the points made in this blog post. Music is life!",
        creationDate: "2022-08-24T19:15:58",
        isConfirmed: false
      },
      {
        commentId: 6,
        postId: 34,
        userId: 9,
        comment: "Music has the ability to heal and bring people together.",
        creationDate: "2023-04-14T01:35:09",
        isConfirmed: false
      },
      {
        commentId: 7,
        postId: 41,
        userId: 12,
        comment: "The passion and dedication that musicians pour into their craft is inspiring.",
        creationDate: "2021-11-17T00:59:32",
        isConfirmed: true
      },
      {
        commentId: 8,
        postId: 50,
        userId: 14,
        comment: "I have discovered so many amazing artists and songs through this blog.",
        creationDate: "2021-08-05T22:07:48",
        isConfirmed: true
      },
      {
        commentId: 9,
        postId: 50,
        userId: 14,
        comment: "Music has the power to uplift our spirits and brighten even the darkest days.",
        creationDate: "2022-09-27T12:55:43",
        isConfirmed: true
      },
      {
        commentId: 10,
        postId: 15,
        userId: 19,
        comment: "I am grateful for the role music plays in my life. It is a constant companion.",
        creationDate: "2023-04-26T04:22:38",
        isConfirmed: true
      },
      {
        commentId: 11,
        postId: 34,
        userId: 4,
        comment: "The way music can capture and express complex emotions is truly remarkable.",
        creationDate: "2020-07-16T16:38:28",
        isConfirmed: true
      },
      {
        commentId: 12,
        postId: 15,
        userId: 2,
        comment: "This blog post reminds me of the incredible diversity of music genres and styles.",
        creationDate: "2022-10-10T22:32:08",
        isConfirmed: true
      },
      {
        commentId: 13,
        postId: 26,
        userId: 3,
        comment: "Music has the power to ignite memories and take us back in time.",
        creationDate: "2021-05-07T17:40:51",
        isConfirmed: false
      },
      {
        commentId: 14,
        postId: 50,
        userId: 16,
        comment: "I love how this blog post highlights the importance of music education.",
        creationDate: "2023-06-10T02:39:04",
        isConfirmed: true
      },
      {
        commentId: 15,
        postId: 25,
        userId: 10,
        comment: "Music is a form of self-expression that allows us to share our innermost thoughts and feelings.",
        creationDate: "2020-10-13T22:40:35",
        isConfirmed: true
      },
      {
        commentId: 16,
        postId: 1,
        userId: 4,
        comment: "The impact of music on our mental and emotional well-being is profound.",
        creationDate: "2023-02-04T13:48:09",
        isConfirmed: true
      },
      {
        commentId: 17,
        postId: 49,
        userId: 7,
        comment: "This blog post perfectly articulates the influence of music on culture and society.",
        creationDate: "2022-10-24T05:17:05",
        isConfirmed: true
      },
      {
        commentId: 18,
        postId: 3,
        userId: 14,
        comment: "I am constantly in awe of the talent and creativity of musicians.",
        creationDate: "2022-08-23T10:15:59",
        isConfirmed: true
      },
      {
        commentId: 19,
        postId: 2,
        userId: 5,
        comment: "Music has the ability to bring joy and comfort to people from all walks of life.",
        creationDate: "2023-01-21T15:16:56",
        isConfirmed: true
      },
      {
        commentId: 20,
        postId: 1,
        userId: 6,
        comment: "I resonate with the idea that music is a soundtrack to our lives.",
        creationDate: "2021-12-20T04:19:51",
        isConfirmed: true
      },
      {
        commentId: 21,
        postId: 25,
        userId: 6,
        comment: "This blog post is a beautiful tribute to the transformative power of music.",
        creationDate: "2021-10-30T11:13:26",
        isConfirmed: true
      },
      {
        commentId: 22,
        postId: 3,
        userId: 14,
        comment: "Music has the power to inspire, motivate, and empower us.",
        creationDate: "2020-11-08T11:00:33",
        isConfirmed: true
      },
      {
        commentId: 23,
        postId: 14,
        userId: 8,
        comment: "I cant imagine a world without music. It adds color and depth to our existence.",
        creationDate: "2021-11-07T01:43:08",
        isConfirmed: false
      },
      {
        commentId: 24,
        postId: 50,
        userId: 4,
        comment: "I appreciate how this blog post explores the connection between music and memories.",
        creationDate: "2020-10-17T03:54:54",
        isConfirmed: false
      },
      {
        commentId: 25,
        postId: 42,
        userId: 2,
        comment: "Music has the ability to spark a range of emotions, from happiness to nostalgia.",
        creationDate: "2021-12-24T08:08:42",
        isConfirmed: false
      },
      {
        commentId: 26,
        postId: 26,
        userId: 2,
        comment: "I am grateful for the artists who use their music to address social issues and promote change.",
        creationDate: "2023-03-02T00:12:58",
        isConfirmed: true
      },
      {
        commentId: 27,
        postId: 25,
        userId: 10,
        comment: "This blog post highlights the role of music in celebrating cultural diversity.",
        creationDate: "2021-04-25T22:27:11",
        isConfirmed: false
      },
      {
        commentId: 28,
        postId: 14,
        userId: 17,
        comment: "I love how music can create a sense of unity and bring people together.",
        creationDate: "2020-08-09T20:37:47",
        isConfirmed: true
      },
      {
        commentId: 29,
        postId: 2,
        userId: 13,
        comment: "Music has the power to transcend language barriers and communicate on a deeper level.",
        creationDate: "2022-05-01T16:17:26",
        isConfirmed: true
      },
      {
        commentId: 30,
        postId: 14,
        userId: 16,
        comment: "This blog post perfectly captures the thrill of discovering new music.",
        creationDate: "2023-03-27T21:22:14",
        isConfirmed: true
      },
      {
        commentId: 31,
        postId: 50,
        userId: 8,
        comment: "I am amazed by the way music can resonate with different individuals in unique ways.",
        creationDate: "2022-12-20T20:29:29",
        isConfirmed: true
      },
      {
        commentId: 32,
        postId: 13,
        userId: 15,
        comment: "Music is a constant companion in both the highs and lows of life.",
        creationDate: "2022-02-24T09:19:06",
        isConfirmed: false
      },
      {
        commentId: 33,
        postId: 42,
        userId: 17,
        comment: "I am inspired by the stories of musicians who overcome challenges to pursue their passion.",
        creationDate: "2022-09-29T01:05:09",
        isConfirmed: true
      },
      {
        commentId: 34,
        postId: 2,
        userId: 15,
        comment: "This blog post reminds me of the incredible influence that music has on our emotions.",
        creationDate: "2023-05-06T05:12:12",
        isConfirmed: false
      },
      {
        commentId: 35,
        postId: 13,
        userId: 6,
        comment: "I am grateful for the artists who use their music to bring awareness to important causes.",
        creationDate: "2022-10-27T21:28:25",
        isConfirmed: true
      },
      {
        commentId: 36,
        postId: 26,
        userId: 19,
        comment: "Music has the ability to evoke memories and transport us to specific moments in time.",
        creationDate: "2020-08-03T04:12:57",
        isConfirmed: true
      },
      {
        commentId: 37,
        postId: 13,
        userId: 3,
        comment: "This blog post highlights the power of music to bring comfort and solace during difficult times.",
        creationDate: "2022-07-31T08:05:11",
        isConfirmed: true
      },
      {
        commentId: 38,
        postId: 1,
        userId: 18,
        comment: "I am constantly amazed by the creativity and innovation within the music industry.",
        creationDate: "2023-05-15T01:57:08",
        isConfirmed: false
      },
      {
        commentId: 39,
        postId: 14,
        userId: 18,
        comment: "Music is a form of self-expression that allows us to communicate without words.",
        creationDate: "2021-02-01T03:42:01",
        isConfirmed: false
      },
      {
        commentId: 40,
        postId: 50,
        userId: 19,
        comment: "This blog post perfectly captures the way music can give voice to our deepest emotions.",
        creationDate: "2022-02-27T10:05:53",
        isConfirmed: false
      },
      {
        commentId: 41,
        postId: 1,
        userId: 13,
        comment: "I love how music has the ability to bring back memories and stir nostalgia.",
        creationDate: "2020-06-20T08:37:54",
        isConfirmed: true
      },
      {
        commentId: 42,
        postId: 34,
        userId: 16,
        comment: "Music has the power to provide a sense of escapism and transport us to different worlds.",
        creationDate: "2020-11-05T21:46:18",
        isConfirmed: false
      },
      {
        commentId: 43,
        postId: 49,
        userId: 2,
        comment: "This blog post reminds me of the joy and excitement that music concerts bring.",
        creationDate: "2022-06-01T04:03:26",
        isConfirmed: true
      },
      {
        commentId: 44,
        postId: 2,
        userId: 7,
        comment: "I am grateful for the artists who use their platform to spread positivity and inspire others.",
        creationDate: "2022-08-10T02:11:14",
        isConfirmed: true
      },
      {
        commentId: 45,
        postId: 50,
        userId: 8,
        comment: "Music is a source of inspiration and a catalyst for creativity in my own life.",
        creationDate: "2023-02-22T04:17:19",
        isConfirmed: false
      },
      {
        commentId: 46,
        postId: 50,
        userId: 19,
        comment: "This blog post perfectly articulates the influence of music on personal growth and self-discovery.",
        creationDate: "2021-10-18T03:08:17",
        isConfirmed: true
      },
      {
        commentId: 47,
        postId: 34,
        userId: 2,
        comment: "I appreciate the way music can evoke a wide range of emotions and create a deep connection.",
        creationDate: "2022-06-25T10:13:51",
        isConfirmed: true
      },
      {
        commentId: 48,
        postId: 14,
        userId: 1,
        comment: "Music has the ability to unite people from different backgrounds and cultures.",
        creationDate: "2023-01-20T23:55:00",
        isConfirmed: true
      },
      {
        commentId: 49,
        postId: 13,
        userId: 9,
        comment: "This blog post highlights the therapeutic benefits of music for our mental well-being.",
        creationDate: "2020-06-22T01:21:07",
        isConfirmed: true
      },
      {
        commentId: 50,
        postId: 49,
        userId: 9,
        comment: "I am constantly in awe of the way music can evoke memories and emotions with just a few notes.",
        creationDate: "2021-02-12T13:21:34",
        isConfirmed: true
      },
      {
        commentId: 51,
        postId: 50,
        userId: 9,
        comment: "Music has the power to make us feel understood, even when we cant find the right words.",
        creationDate: "2023-05-26T14:34:28",
        isConfirmed: true
      },
      {
        commentId: 52,
        postId: 33,
        userId: 13,
        comment: "This blog post reminds me of the incredible artistry and skill that goes into creating music.",
        creationDate: "2020-11-01T00:39:46",
        isConfirmed: true
      },
      {
        commentId: 53,
        postId: 41,
        userId: 11,
        comment: "I am grateful for the artists who use their music to inspire change and spark conversations.",
        creationDate: "2021-01-17T18:13:15",
        isConfirmed: true
      },
      {
        commentId: 54,
        postId: 13,
        userId: 7,
        comment: "Music is a form of self-care that allows us to escape from the stresses of everyday life.",
        creationDate: "2023-02-01T13:16:59",
        isConfirmed: true
      },
      {
        commentId: 55,
        postId: 2,
        userId: 12,
        comment: "This blog post perfectly captures the way music can create a sense of belonging and community.",
        creationDate: "2022-02-04T01:25:29",
        isConfirmed: true
      },
      {
        commentId: 56,
        postId: 49,
        userId: 8,
        comment: "I appreciate the way music can provide a sense of comfort and solace during challenging times.",
        creationDate: "2023-05-30T14:46:33",
        isConfirmed: true
      },
      {
        commentId: 57,
        postId: 42,
        userId: 7,
        comment: "Music has the ability to bring people together and foster a sense of unity and understanding.",
        creationDate: "2022-04-14T18:20:04",
        isConfirmed: false
      },
      {
        commentId: 58,
        postId: 42,
        userId: 20,
        comment: "This blog post highlights the way music can evoke nostalgia and transport us to specific moments.",
        creationDate: "2022-09-06T17:07:57",
        isConfirmed: true
      },
      {
        commentId: 59,
        postId: 3,
        userId: 6,
        comment: "I am constantly amazed by the way music can tap into our emotions and touch our souls.",
        creationDate: "2021-10-28T09:55:13",
        isConfirmed: true
      },
      {
        commentId: 60,
        postId: 1,
        userId: 5,
        comment: "Music is a universal language that has the power to bridge cultural and language barriers.",
        creationDate: "2022-12-27T03:11:12",
        isConfirmed: true
      },
      {
        commentId: 61,
        postId: 1,
        userId: 15,
        comment: "This blog post reminds me of the way music can serve as a form of self-expression and catharsis.",
        creationDate: "2020-06-19T16:33:38",
        isConfirmed: true
      },
      {
        commentId: 62,
        postId: 14,
        userId: 16,
        comment: "I am grateful for the artists who use their music to tell powerful stories and shed light on important issues.",
        creationDate: "2021-04-30T11:25:28",
        isConfirmed: true
      },
      {
        commentId: 63,
        postId: 34,
        userId: 8,
        comment: "Music has the ability to inspire and motivate us to overcome challenges and reach for our dreams.",
        creationDate: "2022-10-05T09:20:48",
        isConfirmed: true
      },
      {
        commentId: 64,
        postId: 3,
        userId: 20,
        comment: "This blog post perfectly captures the way music can bring joy and happiness into our lives.",
        creationDate: "2022-04-19T17:16:02",
        isConfirmed: true
      },
      {
        commentId: 65,
        postId: 33,
        userId: 19,
        comment: "I appreciate the way music can serve as a soundtrack to our lives, marking significant moments and experiences.",
        creationDate: "2020-09-20T08:13:37",
        isConfirmed: true
      },
      {
        commentId: 66,
        postId: 1,
        userId: 18,
        comment: "Music has the power to evoke memories and emotions in a way that words alone cannot.",
        creationDate: "2023-05-10T20:21:49",
        isConfirmed: false
      },
      {
        commentId: 67,
        postId: 49,
        userId: 16,
        comment: "This blog post highlights the way music can foster a sense of connection and empathy among listeners.",
        creationDate: "2022-08-26T16:07:27",
        isConfirmed: true
      },
      {
        commentId: 68,
        postId: 34,
        userId: 16,
        comment: "I am constantly in awe of the way music can transport us to different times and places with just a few notes.",
        creationDate: "2022-09-05T12:02:03",
        isConfirmed: false
      },
      {
        commentId: 69,
        postId: 13,
        userId: 10,
        comment: "Music is a powerful tool for self-expression and allows us to communicate our innermost thoughts and feelings.",
        creationDate: "2021-11-25T21:14:32",
        isConfirmed: true
      },
      {
        commentId: 70,
        postId: 50,
        userId: 11,
        comment: "This blog post reminds me of the way music has the ability to inspire and uplift us, even in the darkest times.",
        creationDate: "2022-10-23T12:12:01",
        isConfirmed: true
      },
      {
        commentId: 71,
        postId: 6,
        userId: 2,
        comment: "Sports bring people together like nothing else. It is a beautiful thing.",
        creationDate: "2021-07-27T06:23:53",
        isConfirmed: true
      },
      {
        commentId: 72,
        postId: 35,
        userId: 1,
        comment: "I am constantly in awe of the dedication and athleticism of these athletes.",
        creationDate: "2021-07-07T18:54:54",
        isConfirmed: false
      },
      {
        commentId: 73,
        postId: 6,
        userId: 12,
        comment: "This blog post perfectly captures the thrill and excitement of sports.",
        creationDate: "2022-06-10T09:44:37",
        isConfirmed: true
      },
      {
        commentId: 74,
        postId: 28,
        userId: 13,
        comment: "Sports have a way of inspiring us and pushing us beyond our limits.",
        creationDate: "2022-06-17T07:22:34",
        isConfirmed: false
      },
      {
        commentId: 75,
        postId: 4,
        userId: 15,
        comment: "I couldnt agree more with the points made in this blog post. Sports truly unite us.",
        creationDate: "2021-04-15T04:16:25",
        isConfirmed: true
      },
      {
        commentId: 76,
        postId: 5,
        userId: 13,
        comment: "I love how sports can teach us valuable life lessons about teamwork and perseverance.",
        creationDate: "2022-09-02T17:55:23",
        isConfirmed: true
      },
      {
        commentId: 77,
        postId: 43,
        userId: 13,
        comment: "The way athletes overcome obstacles and achieve greatness is truly inspiring.",
        creationDate: "2021-09-08T19:10:51",
        isConfirmed: true
      },
      {
        commentId: 78,
        postId: 52,
        userId: 10,
        comment: "I have discovered so many incredible sports moments and stories through this blog.",
        creationDate: "2021-02-11T20:45:22",
        isConfirmed: false
      },
      {
        commentId: 79,
        postId: 51,
        userId: 1,
        comment: "Sports have the power to uplift our spirits and ignite our passion.",
        creationDate: "2022-11-07T19:53:37",
        isConfirmed: true
      },
      {
        commentId: 80,
        postId: 28,
        userId: 2,
        comment: "I am grateful for the role sports play in bringing communities together.",
        creationDate: "2020-08-26T15:01:53",
        isConfirmed: false
      },
      {
        commentId: 81,
        postId: 17,
        userId: 13,
        comment: "The intensity and competitiveness of sports is captivating.",
        creationDate: "2021-11-03T09:56:48",
        isConfirmed: true
      },
      {
        commentId: 82,
        postId: 5,
        userId: 15,
        comment: "This blog post highlights the impact that sports can have on personal growth and character development.",
        creationDate: "2022-04-02T18:32:09",
        isConfirmed: true
      },
      {
        commentId: 83,
        postId: 52,
        userId: 13,
        comment: "Sports have a way of creating memories that last a lifetime.",
        creationDate: "2023-05-19T10:57:54",
        isConfirmed: false
      },
      {
        commentId: 84,
        postId: 16,
        userId: 14,
        comment: "I appreciate the way sports can teach us about grace, sportsmanship, and respect.",
        creationDate: "2022-05-03T06:11:09",
        isConfirmed: false
      },
      {
        commentId: 85,
        postId: 28,
        userId: 16,
        comment: "Sports are a celebration of the human spirit and what we can achieve with determination.",
        creationDate: "2022-02-19T03:28:49",
        isConfirmed: true
      },
      {
        commentId: 86,
        postId: 36,
        userId: 13,
        comment: "The way sports can captivate and engage millions of fans is incredible.",
        creationDate: "2021-10-13T05:54:32",
        isConfirmed: true
      },
      {
        commentId: 87,
        postId: 4,
        userId: 6,
        comment: "This blog post reminds me of the incredible stories of triumph and resilience in sports.",
        creationDate: "2023-02-16T04:17:08",
        isConfirmed: true
      },
      {
        commentId: 88,
        postId: 27,
        userId: 13,
        comment: "I am constantly in awe of the skill and athleticism of these athletes.",
        creationDate: "2022-09-17T13:41:22",
        isConfirmed: true
      },
      {
        commentId: 89,
        postId: 5,
        userId: 6,
        comment: "Sports have the ability to transcend cultural boundaries and bring people together from all walks of life.",
        creationDate: "2021-07-27T07:04:57",
        isConfirmed: true
      },
      {
        commentId: 90,
        postId: 35,
        userId: 10,
        comment: "I resonate with the idea that sports are a universal language that everyone can understand.",
        creationDate: "2023-01-19T07:50:36",
        isConfirmed: false
      },
      {
        commentId: 91,
        postId: 16,
        userId: 11,
        comment: "This blog post is a testament to the power of sports in inspiring future generations.",
        creationDate: "2022-03-07T11:18:25",
        isConfirmed: true
      },
      {
        commentId: 92,
        postId: 4,
        userId: 10,
        comment: "Sports have a way of pushing us beyond our comfort zones and unlocking our full potential.",
        creationDate: "2022-02-22T03:40:32",
        isConfirmed: true
      },
      {
        commentId: 93,
        postId: 17,
        userId: 10,
        comment: "I cant imagine a world without sports. They add excitement and joy to our lives.",
        creationDate: "2023-03-31T12:28:01",
        isConfirmed: true
      },
      {
        commentId: 94,
        postId: 43,
        userId: 20,
        comment: "I appreciate how this blog post explores the impact of sports on physical and mental well-being.",
        creationDate: "2021-01-28T23:01:38",
        isConfirmed: false
      },
      {
        commentId: 95,
        postId: 5,
        userId: 15,
        comment: "Sports have the power to teach us about discipline, commitment, and hard work.",
        creationDate: "2020-11-21T15:09:29",
        isConfirmed: true
      },
      {
        commentId: 96,
        postId: 6,
        userId: 16,
        comment: "This blog post perfectly captures the way sports can create lifelong friendships and camaraderie.",
        creationDate: "2020-07-24T04:59:22",
        isConfirmed: false
      },
      {
        commentId: 97,
        postId: 5,
        userId: 16,
        comment: "I am grateful for the athletes who use their platform to make a positive impact on society.",
        creationDate: "2023-03-22T14:10:08",
        isConfirmed: true
      },
      {
        commentId: 98,
        postId: 16,
        userId: 9,
        comment: "Sports have a way of teaching us about resilience and bouncing back from setbacks.",
        creationDate: "2022-03-26T14:47:53",
        isConfirmed: false
      },
      {
        commentId: 99,
        postId: 43,
        userId: 1,
        comment: "This blog post highlights the way sports can inspire us to chase our dreams and never give up.",
        creationDate: "2020-08-06T22:35:03",
        isConfirmed: true
      },
      {
        commentId: 100,
        postId: 16,
        userId: 19,
        comment: "I am constantly amazed by the passion and dedication of sports fans around the world.",
        creationDate: "2022-02-24T12:07:58",
        isConfirmed: true
      },
      {
        commentId: 101,
        postId: 44,
        userId: 1,
        comment: "Sports have the ability to break down barriers and unite people from different cultures and backgrounds.",
        creationDate: "2022-05-15T21:46:33",
        isConfirmed: true
      },
      {
        commentId: 102,
        postId: 4,
        userId: 11,
        comment: "This blog post reminds me of the incredible sportsmanship and fair play that exists in the world of sports.",
        creationDate: "2021-02-09T02:52:26",
        isConfirmed: true
      },
      {
        commentId: 103,
        postId: 36,
        userId: 20,
        comment: "I am grateful for the moments of joy and excitement that sports bring into our lives.",
        creationDate: "2020-10-06T20:00:59",
        isConfirmed: true
      },
      {
        commentId: 104,
        postId: 28,
        userId: 11,
        comment: "Sports have the power to instill values such as teamwork, discipline, and perseverance.",
        creationDate: "2021-01-22T06:27:59",
        isConfirmed: true
      },
      {
        commentId: 105,
        postId: 16,
        userId: 9,
        comment: "This blog post perfectly captures the way sports can ignite a sense of community and belonging.",
        creationDate: "2022-12-22T04:14:59",
        isConfirmed: false
      },
      {
        commentId: 106,
        postId: 16,
        userId: 7,
        comment: "I appreciate the way sports can teach us about the importance of setting goals and working hard to achieve them.",
        creationDate: "2021-11-13T17:39:37",
        isConfirmed: true
      },
      {
        commentId: 107,
        postId: 35,
        userId: 12,
        comment: "Sports have a way of capturing our hearts and making us feel a part of something bigger.",
        creationDate: "2021-02-28T03:27:10",
        isConfirmed: true
      },
      {
        commentId: 108,
        postId: 18,
        userId: 18,
        comment: "This blog post highlights the way sports can provide a sense of escape and entertainment in our busy lives.",
        creationDate: "2023-01-07T13:59:55",
        isConfirmed: true
      },
      {
        commentId: 109,
        postId: 28,
        userId: 2,
        comment: "I am constantly in awe of the dedication and sacrifices that athletes make to excel in their sport.",
        creationDate: "2021-10-17T10:48:16",
        isConfirmed: true
      },
      {
        commentId: 110,
        postId: 52,
        userId: 6,
        comment: "Sports have the ability to inspire us to push our limits and reach for greatness.",
        creationDate: "2023-04-25T06:24:01",
        isConfirmed: true
      },
      {
        commentId: 111,
        postId: 44,
        userId: 8,
        comment: "This blog post reminds me of the unforgettable sports moments that have shaped history.",
        creationDate: "2021-03-27T04:06:21",
        isConfirmed: false
      },
      {
        commentId: 112,
        postId: 36,
        userId: 5,
        comment: "I am grateful for the athletes who serve as role models for future generations.",
        creationDate: "2020-07-10T21:16:41",
        isConfirmed: true
      },
      {
        commentId: 113,
        postId: 27,
        userId: 17,
        comment: "Sports have a way of teaching us about resilience and never giving up, both on and off the field.",
        creationDate: "2022-08-15T07:03:39",
        isConfirmed: true
      },
      {
        commentId: 114,
        postId: 35,
        userId: 3,
        comment: "This blog post perfectly captures the way sports can teach us about the importance of teamwork and cooperation.",
        creationDate: "2023-06-08T07:57:44",
        isConfirmed: true
      },
      {
        commentId: 115,
        postId: 28,
        userId: 5,
        comment: "I appreciate the way sports can bring people from different backgrounds together, fostering understanding and respect.",
        creationDate: "2021-12-16T15:47:47",
        isConfirmed: true
      },
      {
        commentId: 116,
        postId: 51,
        userId: 7,
        comment: "Sports have the power to transform lives and inspire positive change in communities.",
        creationDate: "2023-05-20T02:45:24",
        isConfirmed: true
      },
      {
        commentId: 117,
        postId: 35,
        userId: 9,
        comment: "This blog post highlights the way sports can fuel our competitive spirit and drive us to excel.",
        creationDate: "2020-09-23T20:17:34",
        isConfirmed: true
      },
      {
        commentId: 118,
        postId: 6,
        userId: 20,
        comment: "I am constantly amazed by the sheer athleticism and skill displayed by athletes in various sports.",
        creationDate: "2022-07-17T23:19:05",
        isConfirmed: true
      },
      {
        commentId: 119,
        postId: 44,
        userId: 16,
        comment: "Sports have the ability to create lasting memories that we can cherish for a lifetime.",
        creationDate: "2022-03-04T04:09:58",
        isConfirmed: true
      },
      {
        commentId: 120,
        postId: 27,
        userId: 2,
        comment: "This blog post reminds me of the excitement and anticipation that comes with watching a thrilling sports event.",
        creationDate: "2023-04-17T16:59:44",
        isConfirmed: false
      },
      {
        commentId: 121,
        postId: 28,
        userId: 14,
        comment: "I am grateful for the moments of pure joy and celebration that sports bring into our lives.",
        creationDate: "2022-09-29T19:16:56",
        isConfirmed: true
      },
      {
        commentId: 122,
        postId: 28,
        userId: 17,
        comment: "Sports have a way of uniting people, regardless of their differences, through a shared love for the game.",
        creationDate: "2020-09-13T22:44:25",
        isConfirmed: true
      },
      {
        commentId: 123,
        postId: 4,
        userId: 1,
        comment: "This blog post highlights the way sports can teach us important lessons about resilience and perseverance in the face of challenges.",
        creationDate: "2022-10-29T03:12:02",
        isConfirmed: true
      },
      {
        commentId: 124,
        postId: 4,
        userId: 14,
        comment: "I appreciate the way sports can bring out the best in people and inspire acts of kindness and sportsmanship.",
        creationDate: "2023-04-19T04:39:48",
        isConfirmed: true
      },
      {
        commentId: 125,
        postId: 17,
        userId: 8,
        comment: "Sports have the power to create unforgettable stories of triumph, courage, and determination.",
        creationDate: "2022-12-09T01:31:17",
        isConfirmed: true
      },
      {
        commentId: 126,
        postId: 43,
        userId: 7,
        comment: "This blog post perfectly captures the electrifying atmosphere of a live sports event.",
        creationDate: "2020-11-01T03:05:22",
        isConfirmed: true
      },
      {
        commentId: 127,
        postId: 36,
        userId: 11,
        comment: "I am constantly in awe of the dedication and sacrifices athletes make to reach the pinnacle of their sport.",
        creationDate: "2023-03-17T22:17:57",
        isConfirmed: false
      },
      {
        commentId: 128,
        postId: 51,
        userId: 16,
        comment: "Sports have the ability to transcend age, gender, and background, creating a sense of unity among fans.",
        creationDate: "2022-09-12T12:21:12",
        isConfirmed: false
      },
      {
        commentId: 129,
        postId: 17,
        userId: 7,
        comment: "This blog post reminds me of the incredible camaraderie and bonds formed through participation in team sports.",
        creationDate: "2022-01-27T17:10:14",
        isConfirmed: true
      },
      {
        commentId: 130,
        postId: 43,
        userId: 3,
        comment: "I am grateful for the values instilled by sports, such as hard work, perseverance, and sportsmanship.",
        creationDate: "2020-08-11T04:08:48",
        isConfirmed: true
      },
      {
        commentId: 131,
        postId: 51,
        userId: 15,
        comment: "Sports have a way of pushing us to our limits and revealing our true potential.",
        creationDate: "2021-08-06T00:15:58",
        isConfirmed: true
      },
      {
        commentId: 132,
        postId: 52,
        userId: 12,
        comment: "This blog post highlights the way sports can inspire us to overcome obstacles and achieve our goals.",
        creationDate: "2022-12-03T06:55:30",
        isConfirmed: false
      },
      {
        commentId: 133,
        postId: 17,
        userId: 2,
        comment: "I appreciate the way sports can teach us about the importance of fair play and respect for opponents.",
        creationDate: "2022-12-01T20:24:58",
        isConfirmed: true
      },
      {
        commentId: 134,
        postId: 6,
        userId: 18,
        comment: "Sports have the power to ignite passion and create lifelong fans and supporters.",
        creationDate: "2023-06-14T15:36:17",
        isConfirmed: false
      },
      {
        commentId: 135,
        postId: 6,
        userId: 20,
        comment: "This blog post perfectly captures the way sports can bring people together, fostering a sense of belonging and community.",
        creationDate: "2023-04-26T07:17:40",
        isConfirmed: true
      },
      {
        commentId: 136,
        postId: 44,
        userId: 9,
        comment: "I am constantly amazed by the strategic thinking and mental toughness required in sports.",
        creationDate: "2022-02-08T05:56:09",
        isConfirmed: true
      },
      {
        commentId: 137,
        postId: 27,
        userId: 4,
        comment: "Sports have the ability to break down barriers and bridge divides, promoting inclusivity and equality.",
        creationDate: "2022-08-20T08:34:32",
        isConfirmed: true
      },
      {
        commentId: 138,
        postId: 28,
        userId: 9,
        comment: "This blog post reminds me of the countless hours of joy and excitement that sports have brought into my life.",
        creationDate: "2022-12-09T21:03:15",
        isConfirmed: false
      },
      {
        commentId: 139,
        postId: 36,
        userId: 14,
        comment: "I am grateful for the athletes who use their platform to make a positive impact and inspire change.",
        creationDate: "2023-03-29T05:30:08",
        isConfirmed: true
      },
      {
        commentId: 140,
        postId: 51,
        userId: 17,
        comment: "Sports have a way of teaching us resilience and the importance of bouncing back from setbacks.",
        creationDate: "2021-03-12T17:40:36",
        isConfirmed: true
      },
      {
        commentId: 141,
        postId: 21,
        userId: 14,
        comment: "Gaming has become a wonderful form of entertainment and escapism.",
        creationDate: "2023-05-06T10:32:05",
        isConfirmed: false
      },
      {
        commentId: 142,
        postId: 30,
        userId: 1,
        comment: "I am constantly amazed by the incredible worlds and storytelling in video games.",
        creationDate: "2020-11-16T06:05:01",
        isConfirmed: true
      },
      {
        commentId: 143,
        postId: 30,
        userId: 4,
        comment: "This blog post perfectly captures the joy and excitement that gaming brings into our lives.",
        creationDate: "2021-08-31T15:44:43",
        isConfirmed: true
      },
      {
        commentId: 144,
        postId: 19,
        userId: 14,
        comment: "Gaming has a way of immersing us in new adventures and experiences.",
        creationDate: "2022-10-17T18:04:07",
        isConfirmed: false
      },
      {
        commentId: 145,
        postId: 38,
        userId: 5,
        comment: "I couldnt agree more with the points made in this blog post. Gaming is a true art form.",
        creationDate: "2022-12-05T00:41:38",
        isConfirmed: true
      },
      {
        commentId: 146,
        postId: 21,
        userId: 6,
        comment: "I love how gaming can transport us to different worlds and let us be a part of epic stories.",
        creationDate: "2021-09-03T15:02:49",
        isConfirmed: true
      },
      {
        commentId: 147,
        postId: 45,
        userId: 16,
        comment: "The creativity and innovation in the gaming industry are truly mind-blowing.",
        creationDate: "2021-10-28T20:06:24",
        isConfirmed: true
      },
      {
        commentId: 148,
        postId: 54,
        userId: 18,
        comment: "I have discovered so many amazing games through this blog. It is expanded my gaming horizons.",
        creationDate: "2023-04-05T13:47:49",
        isConfirmed: false
      },
      {
        commentId: 149,
        postId: 54,
        userId: 8,
        comment: "Gaming has the power to bring people together and create lasting friendships.",
        creationDate: "2023-01-06T23:26:43",
        isConfirmed: true
      },
      {
        commentId: 150,
        postId: 9,
        userId: 18,
        comment: "I am grateful for the countless hours of fun and excitement that gaming has provided me.",
        creationDate: "2020-12-21T09:18:37",
        isConfirmed: false
      },
      {
        commentId: 151,
        postId: 29,
        userId: 7,
        comment: "The way games challenge us and encourage problem-solving skills is fantastic.",
        creationDate: "2021-09-16T07:57:51",
        isConfirmed: true
      },
      {
        commentId: 152,
        postId: 38,
        userId: 1,
        comment: "This blog post highlights the way gaming can be a form of self-expression and creativity.",
        creationDate: "2022-02-02T18:44:43",
        isConfirmed: true
      },
      {
        commentId: 153,
        postId: 37,
        userId: 8,
        comment: "Gaming has a way of sparking our imagination and taking us on incredible journeys.",
        creationDate: "2022-06-20T11:26:42",
        isConfirmed: true
      },
      {
        commentId: 154,
        postId: 30,
        userId: 3,
        comment: "I appreciate how this blog post explores the positive impact of gaming on mental stimulation and cognitive abilities.",
        creationDate: "2022-09-27T16:52:05",
        isConfirmed: true
      },
      {
        commentId: 155,
        postId: 45,
        userId: 5,
        comment: "Gaming has the power to bring people from different backgrounds together, fostering a sense of community.",
        creationDate: "2023-05-23T19:29:17",
        isConfirmed: true
      },
      {
        commentId: 156,
        postId: 20,
        userId: 5,
        comment: "This blog post reminds me of the nostalgic memories I have of playing games from my childhood.",
        creationDate: "2022-10-07T17:41:58",
        isConfirmed: false
      },
      {
        commentId: 157,
        postId: 38,
        userId: 11,
        comment: "I am grateful for the developers who pour their passion and talent into creating unforgettable gaming experiences.",
        creationDate: "2020-10-20T16:28:31",
        isConfirmed: true
      },
      {
        commentId: 158,
        postId: 8,
        userId: 2,
        comment: "Gaming has a way of challenging us and pushing us to overcome obstacles.",
        creationDate: "2022-03-04T05:06:26",
        isConfirmed: true
      },
      {
        commentId: 159,
        postId: 7,
        userId: 3,
        comment: "This blog post perfectly captures the way gaming can provide a much-needed escape from reality.",
        creationDate: "2022-01-20T09:46:25",
        isConfirmed: true
      },
      {
        commentId: 160,
        postId: 45,
        userId: 2,
        comment: "I appreciate the way gaming can transport us to different time periods and cultures, promoting diversity and understanding.",
        creationDate: "2022-10-17T09:31:44",
        isConfirmed: false
      },
      {
        commentId: 161,
        postId: 9,
        userId: 2,
        comment: "This blog post is a testament to the way gaming has evolved and become a mainstream form of entertainment.",
        creationDate: "2022-08-03T01:43:37",
        isConfirmed: true
      },
      {
        commentId: 162,
        postId: 29,
        userId: 7,
        comment: "Gaming has a way of connecting people across the globe, breaking down geographical barriers.",
        creationDate: "2022-08-01T03:23:57",
        isConfirmed: true
      },
      {
        commentId: 163,
        postId: 45,
        userId: 8,
        comment: "I cant imagine a world without gaming. It has become an integral part of our culture.",
        creationDate: "2020-12-19T08:35:01",
        isConfirmed: true
      },
      {
        commentId: 164,
        postId: 20,
        userId: 19,
        comment: "I appreciate how this blog post explores the social aspect of gaming and the communities that form around shared interests.",
        creationDate: "2022-09-24T14:00:08",
        isConfirmed: true
      },
      {
        commentId: 165,
        postId: 21,
        userId: 5,
        comment: "Gaming has the power to inspire us and ignite our creativity.",
        creationDate: "2022-03-28T09:02:26",
        isConfirmed: true
      },
      {
        commentId: 166,
        postId: 37,
        userId: 6,
        comment: "This blog post reminds me of the incredible technological advancements in the gaming industry.",
        creationDate: "2022-07-02T19:59:55",
        isConfirmed: false
      },
      {
        commentId: 167,
        postId: 7,
        userId: 12,
        comment: "I am grateful for the memories and experiences I have had playing games with friends and family.",
        creationDate: "2021-06-15T02:53:45",
        isConfirmed: true
      },
      {
        commentId: 168,
        postId: 46,
        userId: 3,
        comment: "Gaming has a way of providing a sense of achievement and accomplishment.",
        creationDate: "2021-04-14T14:53:58",
        isConfirmed: true
      },
      {
        commentId: 169,
        postId: 21,
        userId: 3,
        comment: "This blog post highlights the way gaming can be a source of relaxation and stress relief.",
        creationDate: "2020-09-24T17:58:46",
        isConfirmed: true
      },
      {
        commentId: 170,
        postId: 37,
        userId: 20,
        comment: "I am constantly amazed by the breathtaking visuals and immersive sound design in modern games.",
        creationDate: "2021-04-28T01:07:07",
        isConfirmed: true
      },
      {
        commentId: 171,
        postId: 45,
        userId: 8,
        comment: "Gaming has the ability to tell powerful stories and evoke strong emotions.",
        creationDate: "2022-03-02T19:40:26",
        isConfirmed: true
      },
      {
        commentId: 172,
        postId: 20,
        userId: 7,
        comment: "This blog post reminds me of the importance of balance and moderation in gaming.",
        creationDate: "2022-06-24T05:46:44",
        isConfirmed: true
      },
      {
        commentId: 173,
        postId: 30,
        userId: 7,
        comment: "I am grateful for the diverse range of gaming genres and experiences available to us.",
        creationDate: "2022-09-05T13:51:27",
        isConfirmed: false
      },
      {
        commentId: 174,
        postId: 21,
        userId: 9,
        comment: "Gaming has a way of bringing out our competitive spirit and driving us to improve.",
        creationDate: "2021-10-20T02:31:35",
        isConfirmed: true
      },
      {
        commentId: 175,
        postId: 7,
        userId: 16,
        comment: "This blog post perfectly captures the sense of community and camaraderie that gaming fosters.",
        creationDate: "2021-02-22T19:39:31",
        isConfirmed: false
      },
      {
        commentId: 176,
        postId: 9,
        userId: 17,
        comment: "I appreciate how gaming can be a platform for self-discovery and personal growth.",
        creationDate: "2021-01-26T21:20:17",
        isConfirmed: true
      },
      {
        commentId: 177,
        postId: 19,
        userId: 15,
        comment: "Gaming has the power to introduce us to new cultures and perspectives.",
        creationDate: "2023-01-21T14:42:30",
        isConfirmed: false
      },
      {
        commentId: 178,
        postId: 53,
        userId: 4,
        comment: "This blog post highlights the positive impact of gaming on problem-solving skills and critical thinking.",
        creationDate: "2022-12-19T09:08:36",
        isConfirmed: true
      },
      {
        commentId: 179,
        postId: 8,
        userId: 7,
        comment: "I am constantly in awe of the talented voice actors, musicians, and artists who contribute to the gaming industry.",
        creationDate: "2021-03-11T21:32:40",
        isConfirmed: true
      },
      {
        commentId: 180,
        postId: 20,
        userId: 5,
        comment: "Gaming has the ability to transport us to different dimensions and let us explore fantastical worlds.",
        creationDate: "2020-12-28T08:08:28",
        isConfirmed: true
      },
      {
        commentId: 181,
        postId: 30,
        userId: 8,
        comment: "This blog post reminds me of the friendships I have formed through online gaming communities.",
        creationDate: "2021-01-17T23:14:04",
        isConfirmed: false
      },
      {
        commentId: 182,
        postId: 8,
        userId: 9,
        comment: "I am grateful for the educational aspects of gaming, such as history or science-based games.",
        creationDate: "2022-08-23T17:06:06",
        isConfirmed: true
      },
      {
        commentId: 183,
        postId: 7,
        userId: 1,
        comment: "Gaming has a way of fostering creativity and allowing us to unleash our imagination.",
        creationDate: "2023-04-17T12:36:51",
        isConfirmed: false
      },
      {
        commentId: 184,
        postId: 45,
        userId: 2,
        comment: "This blog post perfectly captures the sense of accomplishment that comes from completing challenging gaming quests.",
        creationDate: "2021-07-10T12:43:46",
        isConfirmed: true
      },
      {
        commentId: 185,
        postId: 9,
        userId: 16,
        comment: "I appreciate how gaming can be a platform for inclusivity and representation.",
        creationDate: "2021-01-09T16:14:34",
        isConfirmed: true
      },
      {
        commentId: 186,
        postId: 29,
        userId: 9,
        comment: "Gaming has the power to inspire us to pursue careers in game development or related fields",
        creationDate: "2021-04-28T08:32:27",
        isConfirmed: true
      },
      {
        commentId: 187,
        postId: 19,
        userId: 11,
        comment: "This blog post highlights the way gaming can provide a sense of belonging and acceptance.",
        creationDate: "2022-06-25T20:20:06",
        isConfirmed: true
      },
      {
        commentId: 188,
        postId: 21,
        userId: 3,
        comment: "I am constantly amazed by the vibrant and passionate gaming community.",
        creationDate: "2021-10-28T21:00:55",
        isConfirmed: false
      },
      {
        commentId: 189,
        postId: 30,
        userId: 14,
        comment: "Gaming has a way of providing us with unforgettable moments and memories.",
        creationDate: "2022-08-05T16:26:28",
        isConfirmed: true
      },
      {
        commentId: 190,
        postId: 8,
        userId: 5,
        comment: "This blog post reminds me of the power of nostalgia and how gaming can take us back to cherished memories.",
        creationDate: "2020-11-19T07:53:52",
        isConfirmed: true
      },
      {
        commentId: 191,
        postId: 7,
        userId: 19,
        comment: "I am grateful for the way gaming encourages teamwork and cooperation through multiplayer experiences.",
        creationDate: "2021-06-17T23:00:02",
        isConfirmed: true
      },
      {
        commentId: 192,
        postId: 29,
        userId: 12,
        comment: "Gaming has the ability to challenge societal norms and tell thought-provoking stories.",
        creationDate: "2021-09-15T05:21:43",
        isConfirmed: true
      },
      {
        commentId: 193,
        postId: 20,
        userId: 12,
        comment: "This blog post perfectly captures the thrill of discovery and exploration in open-world games.",
        creationDate: "2022-12-21T00:35:17",
        isConfirmed: true
      },
      {
        commentId: 194,
        postId: 9,
        userId: 10,
        comment: "I appreciate how gaming can be a platform for personal expression and creativity.",
        creationDate: "2023-01-26T16:08:32",
        isConfirmed: true
      },
      {
        commentId: 195,
        postId: 19,
        userId: 19,
        comment: "Gaming has the power to provide a sense of achievement and progression.",
        creationDate: "2023-04-21T12:54:44",
        isConfirmed: false
      },
      {
        commentId: 196,
        postId: 8,
        userId: 7,
        comment: "This blog post highlights the positive impact of gaming on hand-eye coordination and problem-solving abilities.",
        creationDate: "2021-03-02T07:59:51",
        isConfirmed: true
      },
      {
        commentId: 197,
        postId: 54,
        userId: 17,
        comment: "I am constantly in awe of the intricate game design and attention to detail in modern games.",
        creationDate: "2022-04-09T09:22:14",
        isConfirmed: true
      },
      {
        commentId: 198,
        postId: 20,
        userId: 16,
        comment: "Gaming has a way of fostering friendships and connections that transcend geographical boundaries.",
        creationDate: "2021-04-16T12:09:52",
        isConfirmed: true
      },
      {
        commentId: 199,
        postId: 8,
        userId: 19,
        comment: "This blog post reminds me of the joy and excitement that gaming brings into our lives.",
        creationDate: "2022-11-21T20:24:28",
        isConfirmed: true
      },
      {
        commentId: 200,
        postId: 21,
        userId: 1,
        comment: "I am grateful for the moments of pure joy and exhilaration that gaming has given me.",
        creationDate: "2022-11-06T23:42:31",
        isConfirmed: true
      },
      {
        commentId: 201,
        postId: 8,
        userId: 8,
        comment: "Gaming has the ability to ignite our imagination and spark our curiosity.",
        creationDate: "2023-03-27T15:37:52",
        isConfirmed: true
      },
      {
        commentId: 202,
        postId: 45,
        userId: 20,
        comment: "This blog post perfectly captures the sense of adventure and exploration in gaming.",
        creationDate: "2020-10-14T07:33:22",
        isConfirmed: true
      },
      {
        commentId: 203,
        postId: 20,
        userId: 16,
        comment: "I appreciate how gaming can be a form of relaxation and a way to unwind after a long day.",
        creationDate: "2022-01-20T11:48:57",
        isConfirmed: true
      },
      {
        commentId: 204,
        postId: 20,
        userId: 7,
        comment: "Gaming has the power to transport us to different time periods and historical events.",
        creationDate: "2021-07-21T18:00:30",
        isConfirmed: true
      },
      {
        commentId: 205,
        postId: 20,
        userId: 7,
        comment: "This blog post highlights the way gaming can be a platform for social interaction and communication.",
        creationDate: "2022-12-03T12:40:28",
        isConfirmed: true
      },
      {
        commentId: 206,
        postId: 46,
        userId: 15,
        comment: "I am constantly amazed by the incredible soundtracks and audio design in games.",
        creationDate: "2022-06-25T04:35:56",
        isConfirmed: true
      },
      {
        commentId: 207,
        postId: 37,
        userId: 10,
        comment: "Gaming has a way of teaching us valuable skills such as problem-solving and strategic thinking.",
        creationDate: "2023-05-04T18:58:36",
        isConfirmed: true
      },
      {
        commentId: 208,
        postId: 53,
        userId: 3,
        comment: "This blog post reminds me of the positive impact gaming can have on mental well-being and cognitive abilities.",
        creationDate: "2023-02-06T07:24:55",
        isConfirmed: false
      },
      {
        commentId: 209,
        postId: 30,
        userId: 20,
        comment: "I am grateful for the friendships I have formed through online gaming communities.",
        creationDate: "2021-10-08T05:34:20",
        isConfirmed: true
      },
      {
        commentId: 210,
        postId: 53,
        userId: 11,
        comment: "Gaming has the ability to inspire us to think creatively and outside the box.",
        creationDate: "2021-01-27T23:42:24",
        isConfirmed: true
      },
      {
        commentId: 211,
        postId: 8,
        userId: 8,
        comment: "This blog post perfectly captures the sense of adventure and excitement that gaming provides.",
        creationDate: "2023-02-16T02:12:53",
        isConfirmed: false
      },
      {
        commentId: 212,
        postId: 7,
        userId: 10,
        comment: "I appreciate how gaming can be a form of self-care and a way to destress.",
        creationDate: "2022-05-15T05:14:33",
        isConfirmed: true
      },
      {
        commentId: 213,
        postId: 48,
        userId: 19,
        comment: "This blog post provides valuable insights into managing personal finances effectively.",
        creationDate: "2022-11-26T12:03:09",
        isConfirmed: true
      },
      {
        commentId: 214,
        postId: 47,
        userId: 3,
        comment: "I appreciate the practical tips and strategies shared in this post for achieving financial stability.",
        creationDate: "2022-12-08T10:42:20",
        isConfirmed: false
      },
      {
        commentId: 215,
        postId: 48,
        userId: 20,
        comment: "Finance is such an important aspect of our lives, and this blog post sheds light on its significance.",
        creationDate: "2022-07-03T14:28:51",
        isConfirmed: false
      },
      {
        commentId: 216,
        postId: 48,
        userId: 6,
        comment: "I am grateful for the informative content on financial planning and budgeting in this blog post.",
        creationDate: "2020-11-26T11:36:30",
        isConfirmed: true
      },
      {
        commentId: 217,
        postId: 40,
        userId: 5,
        comment: "This post highlights the importance of investing wisely and making informed financial decisions.",
        creationDate: "2023-03-20T23:24:42",
        isConfirmed: true
      },
      {
        commentId: 218,
        postId: 32,
        userId: 18,
        comment: "I couldnt agree more with the points made in this blog post about the benefits of long-term financial planning.",
        creationDate: "2023-06-01T00:54:48",
        isConfirmed: true
      },
      {
        commentId: 219,
        postId: 12,
        userId: 17,
        comment: "The advice and guidance provided in this post are highly valuable for anyone looking to improve their financial situation.",
        creationDate: "2021-12-31T08:15:37",
        isConfirmed: false
      },
      {
        commentId: 220,
        postId: 23,
        userId: 1,
        comment: "I appreciate the emphasis on financial literacy and the resources shared in this blog post.",
        creationDate: "2022-03-31T11:18:42",
        isConfirmed: true
      },
      {
        commentId: 221,
        postId: 10,
        userId: 15,
        comment: "This blog post offers practical steps to achieve financial independence and security.",
        creationDate: "2021-04-01T23:16:24",
        isConfirmed: true
      },
      {
        commentId: 222,
        postId: 12,
        userId: 9,
        comment: "I am constantly amazed by the impact that proper financial management can have on our lives.",
        creationDate: "2023-03-28T17:36:10",
        isConfirmed: true
      },
      {
        commentId: 223,
        postId: 22,
        userId: 15,
        comment: "The insights shared in this post have motivated me to take control of my finances and work towards my financial goals.",
        creationDate: "2021-06-08T10:03:10",
        isConfirmed: true
      },
      {
        commentId: 224,
        postId: 48,
        userId: 12,
        comment: "I am grateful for the explanations and examples provided in this blog post, which make complex financial concepts easier to understand.",
        creationDate: "2021-03-15T17:53:20",
        isConfirmed: true
      },
      {
        commentId: 225,
        postId: 39,
        userId: 18,
        comment: "This post highlights the importance of building an emergency fund and being prepared for unexpected expenses.",
        creationDate: "2023-02-09T20:36:14",
        isConfirmed: true
      },
      {
        commentId: 226,
        postId: 10,
        userId: 5,
        comment: "I appreciate the focus on the long-term benefits of saving and investing in this blog post.",
        creationDate: "2022-04-21T11:19:07",
        isConfirmed: true
      },
      {
        commentId: 227,
        postId: 24,
        userId: 6,
        comment: "This blog post serves as a reminder to make informed decisions about money and avoid unnecessary debt.",
        creationDate: "2021-09-22T21:32:44",
        isConfirmed: false
      },
      {
        commentId: 228,
        postId: 47,
        userId: 6,
        comment: "I am grateful for the tips on how to save money and cut expenses shared in this post.",
        creationDate: "2023-01-26T14:54:39",
        isConfirmed: false
      },
      {
        commentId: 229,
        postId: 23,
        userId: 7,
        comment: "The insights into retirement planning and the importance of starting early are invaluable in this blog post.",
        creationDate: "2020-09-09T19:11:59",
        isConfirmed: false
      },
      {
        commentId: 230,
        postId: 11,
        userId: 13,
        comment: "This post emphasizes the value of financial goal-setting and the satisfaction of achieving them.",
        creationDate: "2023-05-02T04:49:20",
        isConfirmed: true
      },
      {
        commentId: 231,
        postId: 10,
        userId: 8,
        comment: "I appreciate the encouragement to seek professional financial advice and the resources provided in this blog post.",
        creationDate: "2021-07-25T01:18:43",
        isConfirmed: false
      },
      {
        commentId: 232,
        postId: 11,
        userId: 16,
        comment: "This blog post highlights the importance of educating ourselves about financial matters and taking control of our financial future.",
        creationDate: "2022-02-10T02:38:53",
        isConfirmed: false
      },
      {
        commentId: 233,
        postId: 56,
        userId: 10,
        comment: "I am grateful for the guidance on how to develop a solid financial strategy outlined in this post.",
        creationDate: "2022-04-29T03:21:07",
        isConfirmed: false
      },
      {
        commentId: 234,
        postId: 32,
        userId: 12,
        comment: "The insights shared in this blog post have inspired me to be more proactive in managing my investments.",
        creationDate: "2021-03-24T17:58:52",
        isConfirmed: true
      },
      {
        commentId: 235,
        postId: 55,
        userId: 13,
        comment: "I appreciate the reminders to review and adjust my financial plan regularly in this post.",
        creationDate: "2022-04-20T05:38:12",
        isConfirmed: true
      },
      {
        commentId: 236,
        postId: 23,
        userId: 9,
        comment: "This post serves as a reminder to prioritize saving for retirement and making the most of retirement accounts.",
        creationDate: "2023-03-17T07:12:35",
        isConfirmed: false
      },
      {
        commentId: 237,
        postId: 48,
        userId: 18,
        comment: "I am constantly amazed by the power of compound interest and the benefits of starting to invest early, as explained in this blog post.",
        creationDate: "2022-08-17T03:07:50",
        isConfirmed: false
      },
      {
        commentId: 238,
        postId: 56,
        userId: 16,
        comment: "The insights into different investment options and their potential returns are highly valuable in this post.",
        creationDate: "2022-07-28T12:18:18",
        isConfirmed: true
      },
      {
        commentId: 239,
        postId: 39,
        userId: 2,
        comment: "I appreciate the tips on how to develop good financial habits and avoid common money pitfalls shared in this blog post.",
        creationDate: "2023-02-07T18:34:37",
        isConfirmed: false
      },
      {
        commentId: 240,
        postId: 22,
        userId: 14,
        comment: "This blog post highlights the importance of diversifying investments and minimizing risks.",
        creationDate: "2022-05-04T19:26:10",
        isConfirmed: true
      },
      {
        commentId: 241,
        postId: 23,
        userId: 16,
        comment: "I am grateful for the reminders to track expenses and create a budget to better manage my finances, as mentioned in this post.",
        creationDate: "2021-03-16T13:42:14",
        isConfirmed: true
      },
      {
        commentId: 242,
        postId: 48,
        userId: 9,
        comment: "This post serves as a reminder to prioritize saving for major life goals, such as buying a house or starting a family.",
        creationDate: "2020-10-19T11:21:49",
        isConfirmed: false
      },
      {
        commentId: 243,
        postId: 23,
        userId: 6,
        comment: "I appreciate the advice on how to handle debt and develop a plan to become debt-free shared in this blog post.",
        creationDate: "2023-01-01T04:24:55",
        isConfirmed: false
      },
      {
        commentId: 244,
        postId: 55,
        userId: 13,
        comment: "This blog post provides a clear roadmap for achieving financial freedom and enjoying a stress-free financial life.",
        creationDate: "2020-08-17T15:19:42",
        isConfirmed: true
      },
      {
        commentId: 245,
        postId: 10,
        userId: 20,
        comment: "I am constantly amazed by the positive impact that good financial habits can have on our overall well-being.",
        creationDate: "2020-12-20T19:53:12",
        isConfirmed: true
      },
      {
        commentId: 246,
        postId: 48,
        userId: 10,
        comment: "The insights into effective tax planning and strategies mentioned in this post are highly informative.",
        creationDate: "2022-01-17T17:43:53",
        isConfirmed: true
      },
      {
        commentId: 247,
        postId: 39,
        userId: 7,
        comment: "I appreciate the reminders to stay disciplined and stick to my financial plan, even in challenging times, as discussed in this blog post.",
        creationDate: "2022-03-16T21:45:32",
        isConfirmed: true
      },
      {
        commentId: 248,
        postId: 10,
        userId: 9,
        comment: "This post highlights the importance of setting realistic financial goals and breaking them down into actionable steps.",
        creationDate: "2021-07-19T11:49:08",
        isConfirmed: true
      },
      {
        commentId: 249,
        postId: 56,
        userId: 17,
        comment: "I am grateful for the practical tips on how to save money on everyday expenses shared in this blog post.",
        creationDate: "2022-04-29T20:54:30",
        isConfirmed: false
      },
      {
        commentId: 250,
        postId: 39,
        userId: 1,
        comment: "The insights into the psychology of money and the importance of mindset in achieving financial success are eye-opening in this post.",
        creationDate: "2020-07-08T00:40:26",
        isConfirmed: true
      },
      {
        commentId: 251,
        postId: 55,
        userId: 2,
        comment: "I appreciate the encouragement to develop multiple streams of income and explore different avenues for financial growth mentioned in this blog post.",
        creationDate: "2021-01-30T20:40:53",
        isConfirmed: true
      },
      {
        commentId: 252,
        postId: 55,
        userId: 4,
        comment: "This blog post serves as a reminder to prioritize investing in ourselves and our skills for long-term financial success.",
        creationDate: "2023-05-28T04:26:27",
        isConfirmed: false
      }
    ]
   }

   getAllComments(): Comment[] {
    return this.comments;
  }

  getCommentById(commentId: number): Comment | undefined {
    return this.comments.find(comment => comment.postId === commentId);
  }

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }

 

  deleteComment(commentId: number): void {
    const index = this.comments.findIndex(comment => comment.commentId === commentId);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }
  getCommentsByUserId(userId: number){
    return this.comments.filter(c => c.userId === userId);
  }
}
