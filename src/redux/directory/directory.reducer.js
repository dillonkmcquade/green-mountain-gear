const INITIAL_STATE = {
  sections: [
    {
      title: "ACCESSORIES",
      imageUrl:
        "https://media.mnn.com/assets/images/2016/10/camping-lead.jpg.653x0_q80_crop-smart.jpg",
      size: "small",
      id: 1,
      linkUrl: "shop/accessories"
    },
    {
      title: "CLOTHING",
      imageUrl:
        "https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/17/40/295552_12775_L2.jpg",
      size: "small",
      id: 2,
      linkUrl: "shop/clothing"
    },
    {
      title: "FOOTWEAR",
      imageUrl:
        "https://www.switchbacktravel.com/sites/default/files/articles%20/Hiking%20Boots%20Round-up%20%28m%29.jpg",
      size: "small",
      id: 3,
      linkUrl: "shop/footwear"
    },
    {
      title: "SHELTERS",
      imageUrl:
        "https://www.reserveamerica.com/webphotos/racms/articles/images/bca19684-d902-422d-8de2-f083e77b50ff_image2_GettyImages-677064730.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/shelters"
    },
    {
      title: "BACKPACKS",
      imageUrl:
        "https://www.rei.com/adventures/assets/adventures/images/trip/core/northamerica/gsb_hero",
      size: "large",
      id: 5,
      linkUrl: "shop/backpacks"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
