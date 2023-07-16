import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [];

  constructor() {
    // posts için mock data oluşturuldu
    this.posts = [
      {
        postId: 1,
        userId: 1,
        categoryId: 1,
        title: "Favorite Music Album",
        content: "I recently discovered an amazing music album that I can't stop listening to. It's a must-hear for all music enthusiasts!",
        viewCount: 25000,
        creationDate: "2016-05-10T14:30:00",
        isPublished: true
      },
      {
        postId: 2,
        userId: 2,
        categoryId: 1,
        title: "Concert Experience",
        content: "Last night, I attended a mesmerizing concert. The artist performed their best hits and the atmosphere was electric!",
        viewCount: 125000,
        creationDate: "2015-09-20T19:45:00",
        isPublished: false
      },
      {
        postId: 3,
        userId: 3,
        categoryId: 1,
        title: "New Song Release",
        content: "Check out this latest song release by a talented artist. The lyrics and melody are so captivating.",
        viewCount: 50000,
        creationDate: "2017-03-02T10:15:00",
        isPublished: true
      },
      {
        postId: 4,
        userId: 4,
        categoryId: 2,
        title: "Game Highlights",
        content: "Yesterday's game was filled with incredible moments. Here are the top highlights that left fans in awe!",
        viewCount: 75000,
        creationDate: "2016-08-15T21:10:00",
        isPublished: true
      },
      {
        postId: 5,
        userId: 5,
        categoryId: 2,
        title: "Upcoming Tournament",
        content: "Attention all sports fans! Get ready for an exciting tournament featuring the best athletes from around the world.",
        viewCount: 100000,
        creationDate: "2015-11-05T13:20:00",
        isPublished: true
      },
      {
        postId: 6,
        userId: 6,
        categoryId: 2,
        title: "Player Spotlight",
        content: "In this article, we shine a spotlight on an exceptional athlete who has been dominating their sport.",
        viewCount: 30000,
        creationDate: "2018-01-18T08:40:00",
        isPublished: true
      },
      {
        postId: 7,
        userId: 7,
        categoryId: 3,
        title: "Game Review",
        content: "I recently played an immersive video game that kept me hooked for hours. Here's my in-depth review and rating.",
        viewCount: 150000,
        creationDate: "2013-02-28T16:55:00",
        isPublished: true
      },
      {
        postId: 8,
        userId: 8,
        categoryId: 3,
        title: "Easter Eggs",
        content: "Discover hidden easter eggs in this popular video game. These secrets will blow your mind!",
        viewCount: 40000,
        creationDate: "2018-10-12T11:25:00",
        isPublished: true
      },
      {
        postId: 9,
        userId: 9,
        categoryId: 3,
        title: "Multiplayer Madness",
        content: "Grab your friends and prepare for an epic gaming session. This multiplayer game is an absolute blast!",
        viewCount: 80000,
        creationDate: "2019-05-05T17:30:00",
        isPublished: false
      },
      {
        postId: 10,
        userId: 10,
        categoryId: 4,
        title: "Investment Tips",
        content: "Are you looking to invest your money wisely? Here are some valuable tips for making sound financial investments.",
        viewCount: 500000,
        creationDate: "2015-06-25T09:15:00",
        isPublished: true
      },
      {
        postId: 11,
        userId: 11,
        categoryId: 4,
        title: "Budgeting 101",
        content: "Learn the basics of budgeting and how it can help you achieve your financial goals and live a stress-free life.",
        viewCount: 1000000,
        creationDate: "2014-12-09T12:45:00",
        isPublished: false
      },
      {
        postId: 12,
        userId: 12,
        categoryId: 4,
        title: "Retirement Planning",
        content: "It's never too early to start planning for retirement. Discover essential strategies to secure your financial future.",
        viewCount: 200000,
        creationDate: "2014-04-14T15:50:00",
        isPublished: true
      },
      {
        postId: 13,
        userId: 13,
        categoryId: 1,
        title: "Best Music Collaborations",
        content: "We've compiled a list of the most iconic music collaborations that have taken the industry by storm.",
        viewCount: 60000,
        creationDate: "2019-07-19T18:05:00",
        isPublished: true
      },
      {
        postId: 14,
        userId: 14,
        categoryId: 1,
        title: "Song Recommendation",
        content: "Looking for new music? Check out this incredible song that has been making waves in the music scene.",
        viewCount: 90000,
        creationDate: "2019-10-30T10:35:00",
        isPublished: true
      },
      {
        postId: 15,
        userId: 15,
        categoryId: 1,
        title: "Music Festival Announcement",
        content: "Mark your calendars for the upcoming music festival, featuring a star-studded lineup of artists!",
        viewCount: 35000,
        creationDate: "2016-02-12T14:00:00",
        isPublished: true
      },
      {
        postId: 16,
        userId: 16,
        categoryId: 2,
        title: "Athlete Interview",
        content: "We sat down with a renowned athlete to discuss their journey, challenges, and secrets to success.",
        viewCount: 20000,
        creationDate: "2016-03-17T16:20:00",
        isPublished: true
      },
      {
        postId: 17,
        userId: 17,
        categoryId: 2,
        title: "Team Rivalry",
        content: "The rivalry between these two teams is heating up. Stay updated with the latest news and match results.",
        viewCount: 70000,
        creationDate: "2015-11-25T20:55:00",
        isPublished: true
      },
      {
        postId: 18,
        userId: 18,
        categoryId: 2,
        title: "Sportsmanship and Fair Play",
        content: "In this article, we reflect on the importance of sportsmanship and fair play in competitive sports.",
        viewCount: 40000,
        creationDate: "2015-05-01T12:00:00",
        isPublished: true
      },
      {
        postId: 19,
        userId: 19,
        categoryId: 3,
        title: "Game Development Insights",
        content: "Get an exclusive behind-the-scenes look at the game development process of an upcoming blockbuster title.",
        viewCount: 120000,
        creationDate: "2014-04-08T14:50:00",
        isPublished: false
      },
      {
        postId: 20,
        userId: 20,
        categoryId: 3,
        title: "Gaming Tips and Tricks",
        content: "Unlock secret achievements and level up your gaming skills with these valuable tips and tricks.",
        viewCount: 45000,
        creationDate: "2017-09-15T09:10:00",
        isPublished: true
      },
      {
        postId: 21,
        userId: 1,
        categoryId: 3,
        title: "Game Release Announcement",
        content: "We're thrilled to announce the release of an exciting new game that will revolutionize the gaming industry.",
        viewCount: 60000,
        creationDate: "2017-03-28T11:30:00",
        isPublished: true
      },
      {
        postId: 22,
        userId: 2,
        categoryId: 4,
        title: "Cryptocurrency Guide",
        content: "Discover the world of cryptocurrencies and learn how to navigate this rapidly evolving digital landscape.",
        viewCount: 300000,
        creationDate: "2019-01-05T08:20:00",
        isPublished: true
      },
      {
        postId: 23,
        userId: 3,
        categoryId: 4,
        title: "Debt Management Strategies",
        content: "Struggling with debt? Explore effective strategies to manage your debts and regain financial freedom.",
        viewCount: 800000,
        creationDate: "2017-10-19T13:40:00",
        isPublished: true
      },
      {
        postId: 24,
        userId: 4,
        categoryId: 4,
        title: "Savings Techniques",
        content: "Learn practical ways to save money and build a strong financial foundation for a secure future.",
        viewCount: 150000,
        creationDate: "2018-05-20T16:15:00",
        isPublished: true
      },
      {
        postId: 25,
        userId: 12,
        categoryId: 1,
        title: "Song of the Week",
        content: "Discover the trending song of the week that has been dominating music charts worldwide.",
        viewCount: 80000,
        creationDate: "2013-09-05T09:30:00",
        isPublished: true
      },
      {
        postId: 26,
        userId: 13,
        categoryId: 1,
        title: "Concert Announcement",
        content: "Exciting news! A renowned artist will be performing live in your city soon. Get your tickets now!",
        viewCount: 40000,
        creationDate: "2016-10-18T17:15:00",
        isPublished: true
      },
      {
        postId: 27,
        userId: 15,
        categoryId: 2,
        title: "Player Transfer Rumors",
        content: "Rumors are swirling about potential player transfers in the upcoming season. Stay updated with the latest speculation.",
        viewCount: 60000,
        creationDate: "2016-11-29T11:40:00",
        isPublished: false
      },
      {
        postId: 28,
        userId: 16,
        categoryId: 2,
        title: "Athlete Profile: Rising Star",
        content: "We profile a young and talented athlete who is making waves in their sport. Learn about their journey to success.",
        viewCount: 35000,
        creationDate: "2015-01-12T14:55:00",
        isPublished: true
      },
      {
        postId: 29,
        userId: 8,
        categoryId: 3,
        title: "Game of the Year",
        content: "Discover the highly anticipated game that has been crowned \"Game of the Year\" by critics and players alike.",
        viewCount: 90000,
        creationDate: "2019-02-25T10:20:00",
        isPublished: true
      },
      {
        postId: 30,
        userId: 9,
        categoryId: 3,
        title: "Exclusive Gameplay Footage",
        content: "Get a sneak peek at the exclusive gameplay footage of an upcoming game that will blow your mind.",
        viewCount: 50000,
        creationDate: "2017-04-08T19:30:00",
        isPublished: false
      },
      {
        postId: 31,
        userId: 11,
        categoryId: 4,
        title: "Real Estate Investment Guide",
        content: "Thinking about investing in real estate? This comprehensive guide covers everything you need to know.",
        viewCount: 700000,
        creationDate: "2014-05-21T16:40:00",
        isPublished: true
      },
      {
        postId: 32,
        userId: 12,
        categoryId: 4,
        title: "Tax Saving Tips",
        content: "Maximize your tax savings with these expert tips and strategies for individuals and small businesses.",
        viewCount: 250000,
        creationDate: "2016-06-10T12:55:00",
        isPublished: true
      },
      {
        postId: 33,
        userId: 13,
        categoryId: 1,
        title: "Behind the Scenes: Music Video",
        content: "Go behind the scenes of the latest music video release and discover the creative process involved.",
        viewCount: 40000,
        creationDate: "2019-08-15T10:25:00",
        isPublished: false
      },
      {
        postId: 34,
        userId: 14,
        categoryId: 1,
        title: "Song Lyrics Analysis",
        content: "Delve into the lyrics of a popular song and uncover its hidden meanings and powerful messages.",
        viewCount: 75000,
        creationDate: "2019-01-02T13:40:00",
        isPublished: true
      },
      {
        postId: 35,
        userId: 5,
        categoryId: 2,
        title: "Greatest Sporting Moments",
        content: "Relive the greatest sporting moments that have left a lasting impact on fans and athletes alike.",
        viewCount: 55000,
        creationDate: "2019-10-30T16:55:00",
        isPublished: false
      },
      {
        postId: 36,
        userId: 16,
        categoryId: 2,
        title: "Fitness Tips for Beginners",
        content: "Embarking on a fitness journey? Learn valuable tips for beginners to kickstart a healthy lifestyle.",
        viewCount: 30000,
        creationDate: "2015-02-12T19:10:00",
        isPublished: true
      },
      {
        postId: 37,
        userId: 17,
        categoryId: 3,
        title: "Game Soundtrack Release",
        content: "The captivating soundtrack of a popular game is now available. Immerse yourself in its stunning music.",
        viewCount: 65000,
        creationDate: "2017-11-05T14:25:00",
        isPublished: true
      },
      {
        postId: 38,
        userId: 18,
        categoryId: 3,
        title: "Game Streaming Marathon",
        content: "Join us for an exciting game streaming marathon, featuring some of the most popular streamers.",
        viewCount: 90000,
        creationDate: "2018-03-19T17:40:00",
        isPublished: true
      },
      {
        postId: 39,
        userId: 19,
        categoryId: 4,
        title: "Investment Opportunities",
        content: "Explore promising investment opportunities in emerging markets that have the potential for high returns.",
        viewCount: 450000,
        creationDate: "2019-09-15T20:55:00",
        isPublished: true
      },
      {
        postId: 40,
        userId: 20,
        categoryId: 4,
        title: "Financial Planning for Families",
        content: "Learn effective financial planning strategies for families to achieve long-term financial security.",
        viewCount: 150000,
        creationDate: "2013-04-28T11:10:00",
        isPublished: true
      },
      {
        postId: 41,
        userId: 17,
        categoryId: 1,
        title: "Upcoming Music Collaboration",
        content: "Exciting news! Two renowned artists are teaming up for a highly anticipated music collaboration.",
        viewCount: 85000,
        creationDate: "2016-07-05T12:30:00",
        isPublished: true
      },
      {
        postId: 42,
        userId: 20,
        categoryId: 1,
        title: "Music Festival Recap",
        content: "Relive the incredible moments from the recent music festival, including performances and special guest appearances.",
        viewCount: 55000,
        creationDate: "2016-08-18T18:15:00",
        isPublished: false
      },
      {
        postId: 43,
        userId: 3,
        categoryId: 2,
        title: "Athlete Spotlight",
        content: "We shine a spotlight on an exceptional athlete, highlighting their achievements, dedication, and impact on their sport.",
        viewCount: 40000,
        creationDate: "2018-09-30T11:40:00",
        isPublished: true
      },
      {
        postId: 44,
        userId: 4,
        categoryId: 2,
        title: "Sports Trivia Challenge",
        content: "Test your sports knowledge with our ultimate trivia challenge. Are you ready to prove your expertise?",
        viewCount: 65000,
        creationDate: "2015-01-13T14:55:00",
        isPublished: true
      },
      {
        postId: 45,
        userId: 9,
        categoryId: 3,
        title: "Game Developer Interview",
        content: "We sit down with a game developer to discuss the creative process, challenges, and insights into their latest game.",
        viewCount: 75000,
        creationDate: "2014-02-26T10:20:00",
        isPublished: false
      },
      {
        postId: 46,
        userId: 6,
        categoryId: 3,
        title: "Game Rumors and Speculations",
        content: "Get the latest scoop on upcoming games with our roundup of rumors and speculations from the gaming industry.",
        viewCount: 48000,
        creationDate: "2018-04-10T19:30:00",
        isPublished: true
      },
      {
        postId: 47,
        userId: 7,
        categoryId: 4,
        title: "Investment Portfolio Diversification",
        content: "Learn the importance of diversifying your investment portfolio and strategies to achieve a balanced approach.",
        viewCount: 560000,
        creationDate: "2013-05-23T16:40:00",
        isPublished: true
      },
      {
        postId: 48,
        userId: 18,
        categoryId: 4,
        title: "Personal Finance Tips for Young Professionals",
        content: "Essential personal finance tips to help young professionals establish a strong financial foundation.",
        viewCount: 280000,
        creationDate: "2018-06-12T12:55:00",
        isPublished: true
      },
      {
        postId: 49,
        userId: 9,
        categoryId: 1,
        title: "Music Playlist for Relaxation",
        content: "Discover a carefully curated music playlist that will help you unwind and relax after a long day.",
        viewCount: 42000,
        creationDate: "2018-08-25T10:25:00",
        isPublished: true
      },
      {
        postId: 50,
        userId: 10,
        categoryId: 1,
        title: "Music Genre Exploration",
        content: "Explore a lesser-known music genre that deserves recognition for its unique sound and cultural significance.",
        viewCount: 78000,
        creationDate: "2017-01-12T13:40:00",
        isPublished: true
      },
      {
        postId: 51,
        userId: 11,
        categoryId: 2,
        title: "Sports Documentary Recommendation",
        content: "Immerse yourself in the world of sports with this compelling and thought-provoking documentary recommendation.",
        viewCount: 52000,
        creationDate: "2017-11-03T16:55:00",
        isPublished: true
      },
      {
        postId: 52,
        userId: 12,
        categoryId: 2,
        title: "Sports Training Tips",
        content: "Gain valuable insights into effective sports training techniques to enhance performance and prevent injuries.",
        viewCount: 38000,
        creationDate: "2015-02-15T19:10:00",
        isPublished: false
      },
      {
        postId: 53,
        userId: 13,
        categoryId: 3,
        title: "Game Cosplay Showcase",
        content: "Witness the extraordinary craftsmanship of talented cosplayers as they bring game characters to life.",
        viewCount: 62000,
        creationDate: "2018-11-15T14:25:00",
        isPublished: false
      },
      {
        postId: 54,
        userId: 4,
        categoryId: 3,
        title: "Game Speedrun World Record",
        content: "A speedrunner has set a new world record in a popular game. Explore their incredible speedrunning techniques.",
        viewCount: 94000,
        creationDate: "2019-03-23T17:40:00",
        isPublished: true
      },
      {
        postId: 55,
        userId: 5,
        categoryId: 4,
        title: "Retirement Planning Guide",
        content: "Plan for a comfortable and secure retirement with our comprehensive guide covering savings, investments, and more.",
        viewCount: 510000,
        creationDate: "2015-09-23T20:55:00",
        isPublished: true
      },
      {
        postId: 56,
        userId: 19,
        categoryId: 4,
        title: "Financial Wellness for Small Business Owners",
        content: "Discover practical strategies to achieve financial wellness and success as a small business owner.",
        viewCount: 190000,
        creationDate: "2016-05-02T11:10:00",
        isPublished: true
      },
      {
        postId: 57,
        userId: 8,
        categoryId: 3,
        title: "Gaming Equipments",
        content: "In the world of gaming, having the right equipment can significantly enhance your gaming experience.",
        viewCount: 73000,
        creationDate: "2017-11-15T14:26:00",
        isPublished: true
      }
    ];
  }
  getAllPosts(): Post[] {
    return this.posts;
  }

  getAllPostsObs(): Observable<Post[]> {
    return of(this.posts);
  }

  getPostById(postId: number): Post | undefined {
    return this.posts.find(post => post.postId === postId);
  }

  addPost(post: Post): void {
    this.posts.push(post);
  }

  

  deletePost(postId: number): void {
    const index = this.posts.findIndex(post => post.postId === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }

  getPostsByCategoryId(posts: Post[],categoryId: number): Post[] | undefined {
    // Kategoriye göre filtreleme yapmak için
    return posts.filter(p => p.categoryId === categoryId);
  }

  getPostsByUserId(posts: Post[],userId: number){
    // Kullanıcıya göre filtreleme yapmak için
    return posts.filter(p => p.userId === userId);
  }
}
