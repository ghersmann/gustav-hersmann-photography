import { defineStore } from 'pinia'

export const useImageStore = defineStore('images', {
  state: () => ({
    imageBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
    galleries: [
      {
        id: 'gallery1',
        title: 'My Life is Less Exciting than Yours',
        render: true,
        images: [
          '2015-farg-film-1662--raw-1.jpg',
          '2015-farg-film-1662--raw.jpg',
          '2015-farg-film-1806--raw.jpg',
          '2015-farg-film-1810--raw.jpg',
          '2015-farg-film-1814--raw.jpg',
          '2015-farg-film-1829--raw.jpg',
          '2015-farg-film-1835--raw-1.jpg',
          '2015-farg-film-1835--raw.jpg',
          '2015-farg-film-1916--raw.jpg',
          '2015-farg-film-1928--raw.jpg',
          '2015-farg-film-rvp-1603--raw.jpg',
          '2015-svartvit-film-2108--raw.jpg',
          '2015-svartvit-film-2144--raw.jpg',
          '2017-farg-film-1086-kodak-portra-800-raw.jpg',
          '2017-farg-film-1181-cinestill-800t-raw.jpg',
          '2017-farg-film-1251-cinestill-50-raw.jpg',
          '2017-farg-film-1313-revelog-600nm-raw.jpg',
          '2017-svartvit-film-0942--raw.jpg',
          '2017-svartvit-film-1017-rollei-rpx100-raw.jpg',
          '2017-svartvit-film-1025-rollei-rpx100-raw.jpg',
          '2017-svartvit-film-1560-rollei-rpx100-raw.jpg'
        ]
      },
      {
        id: 'gallery2',
        title: 'Stone Cold Land',
        render: false,
        images: [
          '2012-svartvit-film-3475-ilford-delta-100-raw.jpg',
          '2012-svartvit-film-3483-ilford-delta-100-raw.jpg',
          '2012-svartvit-film-3501-ilford-delta-100-raw.jpg',
          '2012-svartvit-film-3514-ilford-delta-100-raw.jpg',
          '2012-svartvit-film-3516-ilford-delta-100-raw.jpg',
          '2013-farg-film-3055--raw.jpg',
          '2013-farg-film-3088--raw.jpg',
          '2013-farg-film-3100--raw.jpg',
          '2013-farg-film-3129--raw.jpg',
          '2013-farg-film-3134--raw.jpg',
          '2013-farg-film-3140--raw.jpg',
          '2013-farg-film-3159--raw.jpg',
          '2013-farg-film-3160--raw.jpg',
          '2013-farg-film-3181--raw.jpg',
          '2013-farg-film-3305--raw.jpg',
          '2013-farg-film-3347--raw.jpg'
        ]
      },
      {
        id: 'gallery3',
        title: 'Grease',
        render: false,
        images: [
          '2014-farg-film-2277--raw.jpg',
          '2014-farg-film-2278--raw.jpg',
          '2014-farg-film-2284--raw.jpg',
          '2014-farg-film-2300--raw.jpg',
          '2014-farg-film-2340--raw.jpg',
          '2014-farg-film-2401--raw.jpg',
          '2014-farg-film-2408--raw.jpg',
          '2014-farg-film-2581--raw.jpg',
          '2014-farg-film-2600--raw.jpg',
          '2014-svartvit-film-2214--raw.jpg',
          '2014-svartvit-film-2221--raw.jpg',
          '2014-svartvit-film-2243--raw.jpg'
        ]
      }
    ]
  })
})
