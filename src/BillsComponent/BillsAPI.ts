export interface LatestAction {
    actionDate: string;
    text: string;
}

export interface Bill {
    congress: number;
    latestAction: LatestAction;
    number: string;
    originChamber: string;
    originChamberCode: string;
    title: string;
    type: string;
    updateDate: string;
    updateDateIncludingText: string;
    url: string;
}
export interface Sponsor {
  bioguideId: string;
  district: number;
  firstName: string;
  fullName: string;
  isByRequest: string;
  lastName: string;
  middleName?: string;
  party: string;
  state: string;
  url: string;
}

export interface LatestAction {
  actionDate: string;
  actionTime: string;
  text: string;
}

export interface BillResource {
  count: number;
  url: string;
}

export interface BillResponse {
  actions: BillResource;
  congress: number;
  introducedDate: string;
  latestAction: LatestAction;
  number: string;
  originChamber: string;
  originChamberCode: string;
  sponsors: Sponsor[];
  textVersions: BillResource;
  title: string;
  titles: BillResource;
  type: string;
  updateDate: string;
  updateDateIncludingText: string;
}

export const fetchBillsAPI = async (page?:number) => {
    const url = 'https://api.congress.gov/v3/bill'; // Replace with your desired congress number
    const apikey = '9oN5HgGBmfVedseejA7WLG8WGoWKWPOS7qgP6YkO';
    const apiUrl = `${url}?api_key=${apikey}&limit=20&offset=${page ? page*20 : 0}&format=json`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      return data.bills as Bill[];
    } catch (error) {
      console.error('Error fetching and latest bills.', error);
    }
  }

  export const fetchBillDetailsAPI = async (url: string) => {
    const apikey = '9oN5HgGBmfVedseejA7WLG8WGoWKWPOS7qgP6YkO';
    try {
      const response = await fetch(url+`&api_key=${apikey}`);
      const data = await response.json();
      console.log("bill details",data);
      return data;
    } catch (error) {
      console.error('Error fetching and parsing bill details.', error);
    }
  }
