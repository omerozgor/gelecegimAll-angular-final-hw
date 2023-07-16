import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {
    // users için mock data oluşturuldu
    this.users = [
      {
        userId: 1,
        username: "cyoodall0",
        email: "gkira0@yale.edu",
        creationDate: "2012-04-27T06:13:42",
        isActive: true
      },
      {
        userId: 2,
        username: "osybbe1",
        email: "efreiburger1@altervista.org",
        creationDate: "2012-05-02T12:43:15",
        isActive: false
      },
      {
        userId: 3,
        username: "chaskett2",
        email: "mbarriball2@instagram.com",
        creationDate: "2011-03-20T21:55:40",
        isActive: true
      },
      {
        userId: 4,
        username: "treeves3",
        email: "dscottrell3@livejournal.com",
        creationDate: "2012-04-18T16:52:43",
        isActive: true
      },
      {
        userId: 5,
        username: "ugouch4",
        email: "rspinas4@com.com",
        creationDate: "2009-08-15T13:52:21",
        isActive: false
      },
      {
        userId: 6,
        username: "khof5",
        email: "ndyball5@usa.gov",
        creationDate: "2010-12-04T23:53:27",
        isActive: true
      },
      {
        userId: 7,
        username: "lhaslock6",
        email: "fbaudry6@ning.com",
        creationDate: "2012-06-03T16:56:56",
        isActive: true
      },
      {
        userId: 8,
        username: "lbalducci7",
        email: "apostgate7@stumbleupon.com",
        creationDate: "2011-03-25T02:16:20",
        isActive: true
      },
      {
        userId: 9,
        username: "scamilletti8",
        email: "cbatson8@bbb.org",
        creationDate: "2012-06-16T16:43:47",
        isActive: true
      },
      {
        userId: 10,
        username: "dtilliard9",
        email: "smarin9@rakuten.co.jp",
        creationDate: "2011-04-23T10:23:15",
        isActive: true
      },
      {
        userId: 11,
        username: "kbrocktona",
        email: "acusteda@forbes.com",
        creationDate: "2012-01-31T03:22:53",
        isActive: false
      },
      {
        userId: 12,
        username: "ocustanceb",
        email: "rmaccurleyb@nsw.gov.au",
        creationDate: "2011-08-24T02:04:41",
        isActive: true
      },
      {
        userId: 13,
        username: "rlavenc",
        email: "balgeoc@a8.net",
        creationDate: "2009-08-01T23:44:44",
        isActive: true
      },
      {
        userId: 14,
        username: "dlamzedd",
        email: "bwitherupd@ox.ac.uk",
        creationDate: "2011-02-13T09:57:17",
        isActive: true
      },
      {
        userId: 15,
        username: "mmarusyake",
        email: "dlarensone@usda.gov",
        creationDate: "2012-03-27T03:27:03",
        isActive: true
      },
      {
        userId: 16,
        username: "dhorwellf",
        email: "ewoolcocksf@cargocollective.com",
        creationDate: "2009-08-01T16:48:57",
        isActive: true
      },
      {
        userId: 17,
        username: "icouthg",
        email: "nkolyaging@unesco.org",
        creationDate: "2010-06-07T03:34:37",
        isActive: false
      },
      {
        userId: 18,
        username: "igroomeh",
        email: "tbargeryh@uiuc.edu",
        creationDate: "2010-12-03T20:28:28",
        isActive: true
      },
      {
        userId: 19,
        username: "gwilfingi",
        email: "rpetkensi@reverbnation.com",
        creationDate: "2011-04-16T07:17:46",
        isActive: true
      },
      {
        userId: 20,
        username: "sgleavesj",
        email: "craccioj@ted.com",
        creationDate: "2011-03-20T09:58:32",
        isActive: true
      }
    ];
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(userId: number): User | undefined {
    return this.users.find(user => user.userId === userId);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  
  deleteUser(userId: number): void {
    const index = this.users.findIndex(user => user.userId === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
