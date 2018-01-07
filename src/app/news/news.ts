export class News {
  constructor(public newsId: number,
              public nmUrl: string,
              public url: string,
              public nwDate: string,
              public ID: string) {
  }
}

export class FormattedNews {
  constructor(public id: string,
              public url: string,
              public news: News[]) {
  }
}
