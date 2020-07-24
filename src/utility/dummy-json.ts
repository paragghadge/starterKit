export const dummyOrders = [
  {
    customerName: 'Mahesh Lawate',
    customerImage: '../../../../assets/img/avatar-2.png',
    address: 'Guru Ganesh, Dange chowk, Pune',
    no: 132,
    completed: true,
    status: 'Delivered',
    paymentStatus: 'Paid',
    items: [
      {
        itemName: 'Chicken soup',
        qty: 2,
        rate: '100'
      },
      {
        itemName: 'Paneer tikka',
        qty: 1,
        rate: '250'
      },
      {
        itemName: 'Roti',
        qty: 5,
        rate: '25'
      },
      {
        itemName: 'Gulab jamun',
        qty: 3,
        rate: '20'
      },
      {
        itemName: 'Paneer tikka',
        qty: 1,
        rate: '250'
      },
      {
        itemName: 'Roti',
        qty: 5,
        rate: '25'
      },
      {
        itemName: 'Gulab jamun',
        qty: 3,
        rate: '20'
      },
    ],
    orderDate: '20 June, 2020',
    orderTime: '1:00 PM',
    orderAmount: '535'
  },
  {
    customerName: 'Sanket Sonawane',
    customerImage: '../../../../assets/img/avatar-1.png',
    address: 'Aura ville, Bavdhan, Pune',
    no: 133,
    completed: false,
    status: 'Preparing',
    paymentStatus: 'Paid',
    items: [
      {
        itemName: 'Panner chilli',
        qty: 2,
        rate: '170'
      },
      {
        itemName: 'Paneer malai',
        qty: 1,
        rate: '280'
      },
      {
        itemName: 'Roti',
        qty: 4,
        rate: '25'
      },
      {
        itemName: 'Ice cream',
        qty: 2,
        rate: '30'
      },
    ],
    orderDate: '21 June, 2020',
    orderTime: '4:00 PM',
    orderAmount: '780'
  },
  {
    customerName: 'Ajinkya Thakare',
    customerImage: '../../../../assets/img/avatar-3.png',
    address: 'Krutika, dahanukar colony, Kothrud, Pune',
    no: 131,
    completed: true,
    status: 'Rejected',
    paymentStatus: 'Paid',
    items: [
      {
        itemName: 'Chickenn roll',
        qty: 1,
        rate: '150'
      },
      {
        itemName: 'Malai kofata',
        qty: 1,
        rate: '200'
      },
      {
        itemName: 'Chapati',
        qty: 6,
        rate: '15'
      }
    ],
    orderDate: '21 June, 2020',
    orderTime: '11:00 AM',
    orderAmount: '410'
  }
]

export const dummyMenu = [{
  name: 'Chinese',
  subMenuType: [
    {
      name: 'Starters',
      items: [
        {
          code: 100,
          name: 'Manchurian',
          price: 100,
          available: true,
          category: 'Veg'
        },
        {
          code: 101,
          name: 'Panner Tikka',
          price: 250,
          available: false,
          category: 'Veg'
        }, {
          code: 102,
          name: 'Chicken Lollipop',
          price: 120,
          available: true,
          category: 'Non-Veg'
        },
      ]
    },
    {
      name: 'Main Course',
      items: [
        {
          name: 'Vegab Palak Panner',
          price: 300,
          available: true,
          category: 'Veg'
        },
        {
          name: 'Naan',
          price: 40,
          available: true,
          category: 'Veg'
        },
      ]
    },
  ],
}]
