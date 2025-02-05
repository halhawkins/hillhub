export const fetchAndParseRSS = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      const items = xmlDoc.getElementsByTagName('item');
      const newsItems = Array.from(items).map((item) => {
        const title = item.getElementsByTagName('title')[0].textContent;
        const link = item.getElementsByTagName('link')[0].textContent;
        const description = item.getElementsByTagName('description')[0].textContent;
        const thumbnail=  item.querySelector("media\\:thumbnail, thumbnail")?.getAttribute("url") || "No image";
        // const thumbnail=  item.querySelector("enclosure")?.getAttribute("url") || "No image";
        const category = item.querySelector("category")?.textContent || "No category";
        return { title, link, description, thumbnail };
      });
      console.log(newsItems);
      return newsItems;
    } catch (error) {
      console.error('Error fetching and parsing RSS feed:', error);
    }
  }
