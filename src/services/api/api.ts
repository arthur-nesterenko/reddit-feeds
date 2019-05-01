class Api {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'https://www.reddit.com/';
  }

  private getUrlWithParams = (url: string, params: { [key: string]: any }): URL => {
    const urlWithParams = new URL(this.baseUrl.concat(url));

    Object.keys(params)
      .filter(key => Boolean(params[key]))
      .forEach(key => urlWithParams.searchParams.append(key, params[key]));

    return urlWithParams;
  };

  public fetchFeeds = async <T>(path: string, params: object = {}): Promise<T> => {
    try {
      const url = this.getUrlWithParams(path, params);
      return await fetch(url.toString()).then(raw => raw.json());
    } catch (e) {
      throw e;
    }
  };
}

export default new Api();
