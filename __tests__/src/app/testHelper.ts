export function mockFetch(data: any) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    }),
  );
}

export function mockGeolocation(lat: number, lng: number) {
  // @ts-ignore
  navigator.geolocation = {
    getCurrentPosition: jest.fn().mockImplementation((success) =>
      Promise.resolve(
        success({
          coords: {
            latitude: lat,
            longitude: lng
          }
        })
      )
    )
  };
}

export const BUSINESS_JSON = `{   "businesses":[     {       "id":"BEFeJowe6vY9QbSkBELA2g",       "alias":"shish-saint-paul",       "name":"Shish",       "image_url":"https://s3-media1.fl.yelpcdn.com/bphoto/-F__WSsazXgqZh1k4Kniyw/o.jpg",       "is_closed":false,       "url":"https://www.yelp.com/biz/shish-saint-paul?adjust_creative=yF2-Q3U4jf_z_TeRPxQ5HQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=yF2-Q3U4jf_z_TeRPxQ5HQ",       "review_count":481,       "categories":[         {           "alias":"mideastern",           "title":"Middle Eastern"         },         {           "alias":"breakfast_brunch",           "title":"Breakfast & Brunch"         },         {           "alias":"mediterranean",           "title":"Mediterranean"         }       ],       "rating":3.9,       "coordinates":{         "latitude":44.939773,         "longitude":-93.170654       },       "transactions":[         "delivery",         "pickup"       ],       "price":"$$",       "location":{         "address1":"1668 Grand Ave",         "address2":"",         "address3":"",         "city":"Saint Paul",         "zip_code":"55105",         "country":"US",         "state":"MN",         "display_address":[           "1668 Grand Ave",           "Saint Paul, MN 55105"         ]       },       "phone":"+16516902212",       "display_phone":"(651) 690-2212",       "distance":233.36162687978666     },     {       "id":"pYbcYH0cnyhEmtkTCOn80A",       "alias":"st-paul-meat-shop-saint-paul",       "name":"St Paul Meat Shop",       "image_url":"https://s3-media3.fl.yelpcdn.com/bphoto/Q8Bh73a16HafFKHrUgR9NA/o.jpg",       "is_closed":false,       "url":"https://www.yelp.com/biz/st-paul-meat-shop-saint-paul?adjust_creative=yF2-Q3U4jf_z_TeRPxQ5HQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=yF2-Q3U4jf_z_TeRPxQ5HQ",       "review_count":43,       "categories":[         {           "alias":"meats",           "title":"Meat Shops"         }       ],       "rating":4.5,       "coordinates":{         "latitude":44.939773,         "longitude":-93.170928       },       "transactions":[         "delivery",         "pickup"       ],       "price":"$$",       "location":{         "address1":"1674 Grand Ave",         "address2":null,         "address3":"",         "city":"Saint Paul",         "zip_code":"55105",         "country":"US",         "state":"MN",         "display_address":[           "1674 Grand Ave",           "Saint Paul, MN 55105"         ]       },       "phone":"+16516982536",       "display_phone":"(651) 698-2536",       "distance":246.5749337476635     },     {       "id":"EjMjgTfBYY_pkY5kZDi1Tw",       "alias":"zait-and-zaatar-mediterranean-dhaba-saint-paul",       "name":"Zait & Za'atar: Mediterranean Dhaba",       "image_url":"https://s3-media2.fl.yelpcdn.com/bphoto/N-be2XgYOtH3WutO0fPxmg/o.jpg",       "is_closed":false,       "url":"https://www.yelp.com/biz/zait-and-zaatar-mediterranean-dhaba-saint-paul?adjust_creative=yF2-Q3U4jf_z_TeRPxQ5HQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=yF2-Q3U4jf_z_TeRPxQ5HQ",       "review_count":195,       "categories":[         {           "alias":"mideastern",           "title":"Middle Eastern"         },         {           "alias":"pakistani",           "title":"Pakistani"         },         {           "alias":"indpak",           "title":"Indian"         }       ],       "rating":4.3,       "coordinates":{         "latitude":44.946302,         "longitude":-93.168903       },       "transactions":[         "delivery",         "pickup"       ],       "price":"$",       "location":{         "address1":"1626 Selby Ave",         "address2":null,         "address3":"",         "city":"Saint Paul",         "zip_code":"55104",         "country":"US",         "state":"MN",         "display_address":[           "1626 Selby Ave",           "Saint Paul, MN 55104"         ]       },       "phone":"+16514937438",       "display_phone":"(651) 493-7438",       "distance":918.659141914853     }   ] }`;

