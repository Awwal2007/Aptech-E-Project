const carsData = {
  "cars": [
    {
      "id": "bmw-x1",
      "brand": "BMW",
      "model": "X1",
      "price": 43200,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/jSz0cK0h/BMW-X1.jpg",
        " https://i.postimg.cc/9f760h11/BMW-X1-side-view.png ",
        " https://i.postimg.cc/GpFX6hqT/BMW-X1-BACK-VIEW.png"
      ],
      "description": "The BMW X1 is a compact luxury SUV with sporty handling and ample cargo space. It features BMW's TwinPower Turbo 2.0-liter engine and modern connectivity, making it great for both city driving and weekend adventures.",
      "features": [
        { "title": "Engine", "value": "2.0L Turbocharged Inline-4" },
        { "title": "Range", "value": "450 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "AWD" },
        { "title": "Acceleration", "value": "0-100km/h in 6.5s[3]" },
        { "title": "Top Speed", "value": "210 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/bmw-x1" }
    },
    {
      "id": "bmw-3-series",
      "brand": "BMW",
      "model": "3 Series",
      "price": 48000,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/SK1rzTNR/BMW-3SERIES.jpg ",
        " https://i.postimg.cc/FFMTZBbk/BMW-3-SERIES-SIDE-VIEW.jpg ",
        " https://i.postimg.cc/MGgBShpJ/BMW-3-SERIES-BACK-VIEW.jpg"
      ],
      "description": "The BMW 3 Series is an iconic sports sedan known for its precise handling and balanced ride. Equipped with a turbocharged 2.0L engine, it delivers spirited performance and luxury tech in a compact package.",
      "features": [
        { "title": "Engine", "value": "2.0L Turbocharged Inline-4" },
        { "title": "Range", "value": "400 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "RWD" },
        { "title": "Acceleration", "value": "0-100km/h in 5.8s[1]" },
        { "title": "Top Speed", "value": "250 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/bmw-3-series" }
    },
    {
      "id": "bmw-x3",
      "brand": "BMW",
      "model": "X3",
      "price": 51300,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/52YNVjYr/BMW-X3.jpg ",
        " https://i.postimg.cc/C5gmFZxH/BMW-X3-SIDE-VIEW.jpg ",
        " https://i.postimg.cc/yx8nJMcv/BMW-X3-BV.jpg "
      ],
      "description": "The BMW X3 blends performance and practicality in a midsize luxury SUV. It offers a sporty 2.0L turbo engine and agile handling, making it comfortable for daily driving and dynamic on winding roads.",
      "features": [
        { "title": "Engine", "value": "2.0L Turbocharged Inline-4" },
        { "title": "Range", "value": "450 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "AWD" },
        { "title": "Acceleration", "value": "0-100km/h in 5.8s[12]" },
        { "title": "Top Speed", "value": "230 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/bmw-x3" }
    },
    {
      "id": "bmw-i4",
      "brand": "BMW",
      "model": "i4",
      "price": 57900,
      "currency": "USD",
      "category": "Electric",
      "type": "Electric",
      "images": [
        " https://i.postimg.cc/KzdCtvvh/BMW-I4.jpg ",
        " https://i.postimg.cc/MH5bqd4S/BMW-14-INSIDE-VIEW.png ",
        " https://i.postimg.cc/DwNV7gkV/BMW-14-SV.jpg "
      ],
      "description": "The BMW i4 is an all-electric Gran Coupe combining sports sedan performance with zero-emissions driving. It features a dual-motor setup (up to 523 hp) and a 300+ mile range, along with BMW’s luxury interior and tech.",
      "features": [
        { "title": "Engine", "value": "Dual Electric Motor (523 hp)" },
        { "title": "Range", "value": "300 miles (EPA)[5]" },
        { "title": "Transmission", "value": "Single-Speed Automatic" },
        { "title": "Drive", "value": "RWD (eDrive40) / AWD (xDrive40)" },
        { "title": "Acceleration", "value": "0-100km/h in 5.5s (RWD) / 4.9s (AWD)[6]" },
        { "title": "Top Speed", "value": "225 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/bmw-i4" }
    },
    {
      "id": "bmw-x5",
      "brand": "BMW",
      "model": "X5",
      "price": 68300,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/rsw-RCch1/BMW-X5.jpg ",
        " https://i.postimg.cc/SR9RGs66/BMW-X5-BACK-VIEW.png ",
        " https://i.postimg.cc/13h6bx4h/BMW-X5-IV.png "
      ],
      "description": "The BMW X5 is a midsize luxury SUV with strong performance and comfort. Its turbocharged inline-six engine provides brisk acceleration, and the spacious cabin has premium features for both driver and passengers.",
      "features": [
        { "title": "Engine", "value": "3.0L Turbocharged Inline-6" },
        { "title": "Range", "value": "500 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "RWD (sDrive40i) / AWD (xDrive40i)" },
        { "title": "Acceleration", "value": "0-100km/h in 5.3s[7]" },
        { "title": "Top Speed", "value": "209 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/bmw-x5" }
    },
    {
      "id": "audi-a3",
      "brand": "Audi",
      "model": "A3",
      "price": 34695,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/kGtr6RQ9/AUDI-A3.jpg ",
        " https://i.postimg.cc/c1848v4x/AUDI-A3-BV.jpg ",
        " https://i.postimg.cc/Xq28bsG7/AUDI-A3-IV.jpg "
      ],
      "description": "The Audi A3 is a compact luxury sedan with sharp handling and a premium interior. Equipped with a 2.0L turbo engine, it delivers spirited performance in a sporty package[8].",
      "features": [
        { "title": "Engine", "value": "2.0L Turbocharged Inline-4" },
        { "title": "Range", "value": "400 miles (est.)" },
        { "title": "Transmission", "value": "7-speed Dual-Clutch Automatic" },
        { "title": "Drive", "value": "AWD (Quattro)" },
        { "title": "Acceleration", "value": "0-100km/h in 6.0s" },
        { "title": "Top Speed", "value": "235 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/audi-a3" }
    },
    {
      "id": "audi-a4",
      "brand": "Audi",
      "model": "A4",
      "price": 43295,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/DwxChyGJ/AUDI-A4.jpg ",
        " https://i.postimg.cc/ncBbn7VD/Gemini-Generated-Image-q5ifkjq5ifkjq5if.png ",
        " https://i.postimg.cc/GpQbdDQF/Gemini-Generated-Image-r0dwi0r0dwi0r0dw.png "
      ],
      "description": "The Audi A4 is a sleek luxury sedan known for its refinement and tech. Its 2.0L turbocharged engine provides smooth acceleration and the Quattro AWD system ensures confident handling[9][10].",
      "features": [
        { "title": "Engine", "value": "2.0L Turbocharged Inline-4" },
        { "title": "Range", "value": "420 miles (est.)" },
        { "title": "Transmission", "value": "7-speed Dual-Clutch Automatic" },
        { "title": "Drive", "value": "AWD (Quattro)" },
        { "title": "Acceleration", "value": "0-100km/h in 5.2s[28]" },
        { "title": "Top Speed", "value": "250 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/audi-a4" }
    },
    {
      "id": "audi-q5",
      "brand": "Audi",
      "model": "Q5",
      "price": 55100,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/hGPVSLnJ/AUDI-Q5-NEW-FV.jpg ",
        " https://i.postimg.cc/jSR7XHLp/AUDI-Q5-IV.jpg ",
        " https://i.postimg.cc/fTf3JVB5/AUDI-Q5-BV.jpg "
      ],
      "description": "The Audi Q5 is a luxury compact SUV balancing performance and comfort. Its 2.0L turbo engine and Quattro AWD deliver strong acceleration (0–60 in 5.8s[12]) and composed handling, along with a refined cabin.",
      "features": [
        { "title": "Engine", "value": "2.0L Turbocharged Inline-4" },
        { "title": "Range", "value": "410 miles (est.)" },
        { "title": "Transmission", "value": "7-speed Automatic" },
        { "title": "Drive", "value": "AWD (Quattro)" },
        { "title": "Acceleration", "value": "0-100km/h in 5.8s[12]" },
        { "title": "Top Speed", "value": "210 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/audi-q5" }
    },
    {
      "id": "audi-q7",
      "brand": "Audi",
      "model": "Q7",
      "price": 65150,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/1t7BxWN8/Q7-FV.jpg ",
        " https://i.postimg.cc/kMtY3mw1/AUDI-Q7-NEW-IV.jpg",
        " https://i.postimg.cc/MKSDCjnt/Q7-BV.jpg "
      ],
      "description": "The Audi Q7 is a three-row luxury SUV with a powerful V6 engine (335 hp)[13]. It offers spacious seating, advanced tech, and strong performance (0–60 in 5.5s) in a refined package.",
      "features": [
        { "title": "Engine", "value": "3.0L Turbocharged V6" },
        { "title": "Range", "value": "480 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "AWD (Quattro)" },
        { "title": "Acceleration", "value": "0-100km/h in 5.5s[13]" },
        { "title": "Top Speed", "value": "230 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/audi-q7" }
    },
    {
      "id": "audi-e-tron-gt",
      "brand": "Audi",
      "model": "e-tron GT",
      "price": 107995,
      "currency": "USD",
      "category": "Electric",
      "type": "Electric",
      "images": [
        " https://i.postimg.cc/0QvYLTN4/ETRON-FV.jpg",
        " https://i.postimg.cc/63zvFTg2/ETRON-SV.jpg ",
        " https://i.postimg.cc/CMQZDygK/AUDI-ETRON-GT-BV.jpg "
      ],
      "description": "The Audi e-tron GT is a high-performance electric grand tourer. Its dual electric motors (670 hp)[14] deliver exhilarating acceleration and a top speed of ~250 km/h, with an EPA range around 300 miles[15].",
      "features": [
        { "title": "Engine", "value": "Dual Electric Motors (670 hp)[14]" },
        { "title": "Range", "value": "300 miles (EPA)[15]" },
        { "title": "Transmission", "value": "Single-Speed Automatic" },
        { "title": "Drive", "value": "AWD" },
        { "title": "Acceleration", "value": "0-100km/h in 3.9s" },
        { "title": "Top Speed", "value": "250 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/audi-e-tron-gt" }
    },
    {
      "id": "hyundai-elantra",
      "brand": "Hyundai",
      "model": "Elantra",
      "price": 23870,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/zvgRvp34/ELANTRA-FV.jpg ",
        " https://i.postimg.cc/MG63h3GJ/ELANTAR-SV.jpg",
        " https://i.postimg.cc/Kc6qZ8YT/ELANTRA-BV.jpg "
      ],
      "description": "The Hyundai Elantra is an affordable compact sedan with modern styling and tech. It features a naturally aspirated 2.0L engine (147 hp) and offers good fuel economy for daily commuting[16].",
      "features": [
        { "title": "Engine", "value": "2.0L Inline-4 (147 hp)[16]" },
        { "title": "Range", "value": "450 miles (est.)" },
        { "title": "Transmission", "value": "CVT" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 8.5s" },
        { "title": "Top Speed", "value": "195 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "5 years or 60,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/hyundai-elantra" }
    },
    {
      "id": "hyundai-sonata",
      "brand": "Hyundai",
      "model": "Sonata",
      "price": 28695,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/DzNZGLVk/HAYUNDAI-SONATA-FV.jpg",
        " https://i.postimg.cc/NMv3Zjm5/BV-HYUNDAI.jpg ",
        " https://i.postimg.cc/zXyxS1Rm/Gemini-Generated-Image-ekpcl9ekpcl9ekpc.png "
      ],
      "description": "The Hyundai Sonata is a midsize sedan with a blend of comfort and efficiency. Its 2.5L I4 engine (191 hp) provides smooth acceleration[17], and it offers a host of safety and convenience features.",
      "features": [
        { "title": "Engine", "value": "2.5L Inline-4 (191 hp)" },
        { "title": "Range", "value": "500 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 7.5s" },
        { "title": "Top Speed", "value": "210 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "5 years or 60,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/hyundai-sonata" }
    },
    {
      "id": "hyundai-tucson",
      "brand": "Hyundai",
      "model": "Tucson",
      "price": 29500,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/T16tJtFV/Gemini-Generated-Image-28r0128r0128r012.png ",
        " https://i.postimg.cc/gJDZ14np/Gemini-Generated-Image-t0qnfst0qnfst0qn.png ",
        " https://i.postimg.cc/7LPG00Kb/Gemini-Generated-Image-arxyguarxyguarxy.png "
      ],
      "description": "The Hyundai Tucson is a compact SUV offering a comfortable ride and generous standard equipment. Its 2.5L engine (187 hp) provides adequate performance[18], and it comes with a spacious interior.",
      "features": [
        { "title": "Engine", "value": "2.5L Inline-4 (187 hp)[18]" },
        { "title": "Range", "value": "420 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "FWD (AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 8.0s" },
        { "title": "Top Speed", "value": "190 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "5 years or 60,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/hyundai-tucson" }
    },
    {
      "id": "hyundai-santa-fe",
      "brand": "Hyundai",
      "model": "Santa Fe",
      "price": 36650,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/XJF5x40Y/SANTE-FE-FV.jpg ",
	  " https://i.postimg.cc/Dw88BnqQ/SANTE-FE-SV.jpg ",
        " https://i.postimg.cc/Yq8WddTM/SANTE-FE-BV.jpg "
      ],
      "description": "The Hyundai Santa Fe is a three-row SUV with a focus on space and value. Its turbocharged 2.5L engine (277 hp) delivers solid acceleration (0–60 in ~7.2s)[19], and the interior is equipped with many family-friendly features.",
      "features": [
        { "title": "Engine", "value": "2.5L Turbocharged Inline-4 (277 hp)[19]" },
        { "title": "Range", "value": "420 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "FWD (AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 7.2s[19]" },
        { "title": "Top Speed", "value": "205 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "5 years or 60,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/hyundai-santa-fe" }
    },
    {
      "id": "hyundai-ioniq-5",
      "brand": "Hyundai",
      "model": "Ioniq 5",
      "price": 43990,
      "currency": "USD",
      "category": "Electric",
      "type": "Electric",
      "images": [
        " https://i.postimg.cc/PJDz91sx/IONIQ5-FV.jpg",
        " https://i.postimg.cc/J0RzCWSn/Gemini-Generated-Image-14h0nv14h0nv14h0.png ",
        " https://i.postimg.cc/tg768FFb/IONIQ-5-SV.jpg "
      ],
      "description": "The Hyundai Ioniq 5 is a futuristic electric crossover with rapid charging and excellent range (~303 miles EPA). Its dual-motor AWD version produces up to 320 hp and offers brisk acceleration in a minimalist cabin.",
      "features": [
        { "title": "Engine", "value": "Dual Electric Motors (320 hp)" },
        { "title": "Range", "value": "303 miles (EPA)" },
        { "title": "Transmission", "value": "Single-Speed Automatic" },
        { "title": "Drive", "value": "AWD (Dual Motor)" },
        { "title": "Acceleration", "value": "0-100km/h in 5.1s" },
        { "title": "Top Speed", "value": "185 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "5 years or 60,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/hyundai-ioniq-5" }
    },
    {
      "id": "jeep-wrangler",
      "brand": "Jeep",
      "model": "Wrangler",
      "price": 37000,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/6Q70nkj4/JEEP-W-FV.jpg ",
        " https://i.postimg.cc/L85BMdpd/JEEP-W-BV.jpg ",
        " https://i.postimg.cc/dQ98kQQc/JEEPP-W-IV.jpg "
      ],
      "description": "The Jeep Wrangler is an iconic off-road 4x4 with removable doors and top. Its 2.0L turbocharged engine (270 hp) delivers strong low-end torque for trail driving, while the rugged design emphasizes capability and fun.",
      "features": [
        { "title": "Engine", "value": "2.0L Turbocharged Inline-4 (270 hp)" },
        { "title": "Range", "value": "350 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "4x4" },
        { "title": "Acceleration", "value": "0-100km/h in 6.7s" },
        { "title": "Top Speed", "value": "177 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 1 year"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/jeep-wrangler" }
    },
    {
      "id": "jeep-grand-cherokee",
      "brand": "Jeep",
      "model": "Grand Cherokee",
      "price": 40000,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/P5kGJMSN/JEEP-GRAND-CHAROKE.jpg ",
        " https://i.postimg.cc/fWtT0Bfr/JEEP-GRAND-CHAROKE-BV.jpg ",
        " https://i.postimg.cc/vmZG8zmW/JEEP-GRAND-CHAROKE-SV.jpg "
      ],
      "description": "The Jeep Grand Cherokee is a midsize SUV offering luxury and performance. Its 3.6L V6 engine (293 hp) provides smooth power, and features like Quadra-Trac 4x4 make it equally capable on-road and off.",
      "features": [
        { "title": "Engine", "value": "3.6L V6 (293 hp)" },
        { "title": "Range", "value": "450 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "AWD (Quadra-Trac)" },
        { "title": "Acceleration", "value": "0-100km/h in 7.0s" },
        { "title": "Top Speed", "value": "210 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 1 year"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/jeep-grand-cherokee" }
    },
    {
      "id": "jeep-compass",
      "brand": "Jeep",
      "model": "Compass",
      "price": 31000,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/43mjFFdM/JEEP-COMPASS-FV.jpg ",
        " https://i.postimg.cc/pLdSp1DL/JEEP-COMPASS.jpg",
        " https://i.postimg.cc/NfxhyHSC/JEEP-COMPASS-NFV.jpg "
      ],
      "description": "The Jeep Compass is a compact SUV with Jeep’s signature off-road capability. Its 2.0L Turbo engine (200 hp) offers peppy performance for city driving, while available 4x4 systems provide versatility.",
      "features": [
        { "title": "Engine", "value": "2.0L Turbocharged Inline-4 (200 hp)" },
        { "title": "Range", "value": "400 miles (est.)" },
        { "title": "Transmission", "value": "9-speed Automatic" },
        { "title": "Drive", "value": "FWD / AWD" },
        { "title": "Acceleration", "value": "0-100km/h in 8.5s" },
        { "title": "Top Speed", "value": "190 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 1 year"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/jeep-compass" }
    },
    {
      "id": "jeep-cherokee",
      "brand": "Jeep",
      "model": "Cherokee",
      "price": 34000,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/zvcgpBPh/Gemini-Generated-Image-1kq16z1kq16z1kq1.png ",
        " https://i.postimg.cc/k4MRm801/Gemini-Generated-Image-uhqdwmuhqdwmuhqd.png ",
        " https://i.postimg.cc/WzF3N7XQ/Gemini-Generated-Image-d3tmqvd3tmqvd3tm.png "
      ],
      "description": "The Jeep Cherokee is a versatile SUV available with multiple engines. The base 2.4L I4 (271 hp) provides brisk acceleration, and the compact design and 4x4 availability make it a practical choice for families.",
      "features": [
        { "title": "Engine", "value": "2.4L Inline-4 (271 hp)" },
        { "title": "Range", "value": "420 miles (est.)" },
        { "title": "Transmission", "value": "9-speed Automatic" },
        { "title": "Drive", "value": "AWD (with Trailhawk off-road kit)" },
        { "title": "Acceleration", "value": "0-100km/h in 7.5s" },
        { "title": "Top Speed", "value": "195 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 1 year"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/jeep-cherokee" }
    },
    {
      "id": "jeep-gladiator",
      "brand": "Jeep",
      "model": "Gladiator",
      "price": 40000,
      "currency": "USD",
      "category": "Truck",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/MTcMHxGv/GLADIATOR-FV.jpg ",
        " https://i.postimg.cc/J4CDrfCh/GLADIATOR-JEEP-BV.jpg ",
        " https://i.postimg.cc/FRJzmZPb/GLADIATOR-JEEP-SV.jpg "
      ],
      "description": "The Jeep Gladiator is a rugged pickup built on the Wrangler platform. Its 3.6L V6 engine (285 hp) provides strong towing capability (up to 4,000 lbs) and off-road performance, blending utility with Jeep’s signature open-air design.",
      "features": [
        { "title": "Engine", "value": "3.6L V6 (285 hp)" },
        { "title": "Range", "value": "450 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "4x4" },
        { "title": "Acceleration", "value": "0-100km/h in 6.8s" },
        { "title": "Top Speed", "value": "182 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 1 year"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/jeep-gladiator" }
    },
    {
      "id": "suzuki-swift",
      "brand": "Suzuki",
      "model": "Swift",
      "price": 20000,
      "currency": "USD",
      "category": "Hatchback",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/jSGBm4JM/SUZUKI-S-FV.jpg ",
        " https://i.postimg.cc/Gt75QFRL/SUZUKI-S-SV.jpg ",
        " https://i.postimg.cc/g26TVLB1/SUZUKI.jpg "
      ],
      "description": "The Suzuki Swift is a small sporty hatchback known for its nimble handling and efficiency. Its 1.2L engine (82 hp) and lightweight chassis make it easy to park in cities, while its stylish design stands out.",
      "features": [
        { "title": "Engine", "value": "1.2L Inline-4 (82 hp)" },
        { "title": "Range", "value": "350 miles (est.)" },
        { "title": "Transmission", "value": "5-speed Manual / 6-speed Automatic" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 12.0s" },
        { "title": "Top Speed", "value": "160 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 1 year"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/suzuki-swift" }
    },
    {
      "id": "suzuki-vitara",
      "brand": "Suzuki",
      "model": "Vitara",
      "price": 23000,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        " https://i.postimg.cc/JzbQ7NFz/Whats-App-Image-2026-04-08-at-01-20-08.jpg ",
        " https://i.postimg.cc/x1yKV0Xh/image.png ",
        " https://i.postimg.cc/SN95BtW4/image.png "
      ],
      "description": "The Suzuki Vitara is a compact SUV with versatile performance. Its 1.4L turbocharged engine (138 hp) provides lively acceleration, and it offers features like all-wheel drive for increased traction in varied conditions.",
      "features": [
        { "title": "Engine", "value": "1.4L Turbocharged Inline-4 (138 hp)" },
        { "title": "Range", "value": "420 miles (est.)" },
        { "title": "Transmission", "value": "6-speed Automatic" },
        { "title": "Drive", "value": "FWD (AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 8.9s" },
        { "title": "Top Speed", "value": "185 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 1 year"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/suzuki-vitara" }
    },
    {
      "id": "suzuki-jimny",
      "brand": "Suzuki",
      "model": "Jimny",
      "price": 22000,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/63GL8F67/Whats-App-Image-2026-04-08-at-01-23-12.jpg",
        "https://i.postimg.cc/Y9gYrg8h/Whats-App-Image-2026-04-08-at-01-23-56.jpg",
        "https://i.postimg.cc/3NY43qdb/Whats-App-Image-2026-04-08-at-01-24-24.jpg"
      ],
      "description": "The Suzuki Jimny is a rugged mini 4x4 known for its off-road prowess. Its 1.5L engine (101 hp) is paired with a selectable 4WD system, making it capable on trails, while its compact size is practical in urban settings.",
      "features": [
        { "title": "Engine", "value": "1.5L Inline-4 (101 hp)" },
        { "title": "Range", "value": "400 miles (est.)" },
        { "title": "Transmission", "value": "5-speed Manual / 4-speed Automatic" },
        { "title": "Drive", "value": "4WD (Part-Time)" },
        { "title": "Acceleration", "value": "0-100km/h in 10.5s" },
        { "title": "Top Speed", "value": "150 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 1 year"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/suzuki-jimny" }
    },
    {
      "id": "suzuki-baleno",
      "brand": "Suzuki",
      "model": "Baleno",
      "price": 18000,
      "currency": "USD",
      "category": "Hatchback",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/Px4fQ5qt/Whats-App-Image-2026-04-08-at-01-25-45.jpg",
        "https://i.postimg.cc/wMMz55PR/Whats-App-Image-2026-04-08-at-01-29-06.jpg",
        "https://i.postimg.cc/268NmFCw/Whats-App-Image-2026-04-08-at-01-29-56.jpg"
      ],
      "description": "The Suzuki Baleno is a subcompact hatchback with a roomy interior for its size. Its 1.2L engine (82 hp) and efficient drivetrain make it economical to run, and its design emphasizes practicality and comfort.",
      "features": [
        { "title": "Engine", "value": "1.2L Inline-4 (82 hp)" },
        { "title": "Range", "value": "370 miles (est.)" },
        { "title": "Transmission", "value": "5-speed Manual / CVT" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 12.3s" },
        { "title": "Top Speed", "value": "155 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 1 year"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/suzuki-baleno" }
    },
    {
      "id": "suzuki-ignis",
      "brand": "Suzuki",
      "model": "Ignis",
      "price": 16000,
      "currency": "USD",
      "category": "Hatchback",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/9QnLzdPB/Gemini-Generated-Image-3beer53beer53bee.png",
        "https://i.postimg.cc/DZJk8fbQ/Whats-App-Image-2026-04-08-at-01-33-02.jpg",
        "https://i.postimg.cc/q7BpMdLz/Whats-App-Image-2026-04-08-at-01-31-30.jpg"
      ],
      "description": "The Suzuki Ignis is a tiny crossover-styled hatchback. Its 1.2L engine (83 hp) and nimble dimensions make it easy to maneuver in the city, and its higher ride height adds a bit of SUV character in a small package.",
      "features": [
        { "title": "Engine", "value": "1.2L Inline-4 (83 hp)" },
        { "title": "Range", "value": "340 miles (est.)" },
        { "title": "Transmission", "value": "5-speed Manual / CVT" },
        { "title": "Drive", "value": "FWD (AWD in Japan)" },
        { "title": "Acceleration", "value": "0-100km/h in 13.5s" },
        { "title": "Top Speed", "value": "160 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 1 year"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/suzuki-ignis" }
    },
    {
      "id": "mg-mg3",
      "brand": "Morris Garage (MG)",
      "model": "MG3",
      "price": 17000,
      "currency": "USD",
      "category": "Hatchback",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/CKbbYkcn/Whats-App-Image-2026-04-08-at-01-36-38.jpg",
        "https://i.postimg.cc/xj6M003w/Whats-App-Image-2026-04-08-at-01-37-02.jpg",
        "https://i.postimg.cc/dQNkb5qJ/Whats-App-Image-2026-04-08-at-01-37-27.jpg"
      ],
      "description": "The MG3 is a small hatchback offering sharp styling at an affordable price. Its 1.5L engine (111 hp) provides adequate city driving performance, and the cabin has modern features for the segment.",
      "features": [
        { "title": "Engine", "value": "1.5L Inline-4 (111 hp)" },
        { "title": "Range", "value": "400 miles (est.)" },
        { "title": "Transmission", "value": "5-speed Manual / 7-speed DCT" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 11.0s" },
        { "title": "Top Speed", "value": "175 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "5 years or 60,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/mg-mg3" }
    },
    {
      "id": "mg-mg4-ev",
      "brand": "Morris Garage (MG)",
      "model": "MG4 EV",
      "price": 36000,
      "currency": "USD",
      "category": "Electric",
      "type": "Electric",
      "images": [
        "https://i.postimg.cc/jj8nRcz2/Whats-App-Image-2026-04-08-at-01-39-55.jpg",
        "https://i.postimg.cc/zDhvQ8PB/Whats-App-Image-2026-04-08-at-01-40-37.jpg",
        "https://i.postimg.cc/9fzFYh7H/Whats-App-Image-2026-04-08-at-01-41-19.jpg"
      ],
      "description": "The MG4 EV is an all-electric hatchback with a modern design and practicality. It uses a ground-up EV platform, producing around 250 hp for the dual-motor version, and offers up to ~275 miles of range[20].",
      "features": [
        { "title": "Engine", "value": "Dual Electric Motors (~250 hp)" },
        { "title": "Range", "value": "275 miles (est.)[20]" },
        { "title": "Transmission", "value": "Single-Speed Automatic" },
        { "title": "Drive", "value": "RWD (base) / AWD (dual motor)" },
        { "title": "Acceleration", "value": "0-100km/h in 7.5s" },
        { "title": "Top Speed", "value": "165 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "5 years or 60,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/mg-mg4-ev" }
    },
    {
      "id": "mg-hs",
      "brand": "Morris Garage (MG)",
      "model": "HS",
      "price": 27000,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "/https://postimg.cc/mtHpTknr",
        "/https://postimg.cc/0rLZXxNx",
        "/https://postimg.cc/LgfkFYsm"
      ],
      "description": "The MG HS is a compact SUV with bold styling. It has a turbocharged 1.5L engine (181 hp) in its strongest form, providing decent acceleration. Its interior offers premium touches for the price.",
      "features": [
        { "title": "Engine", "value": "1.5L Turbocharged Inline-4 (181 hp)" },
        { "title": "Range", "value": "410 miles (est.)" },
        { "title": "Transmission", "value": "7-speed DCT" },
        { "title": "Drive", "value": "FWD (AWD available)" },
        { "title": "Acceleration", "value": "0-100km/h in 9.0s" },
        { "title": "Top Speed", "value": "205 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "5 years or 60,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/mg-hs" }
    },
    {
      "id": "mg-zs",
      "brand": "Morris Garage (MG)",
      "model": "ZS",
      "price": 22000,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/SRYMT9YW/Whats-App-Image-2026-04-08-at-01-47-26.jpg",
        "https://i.postimg.cc/jS0z1MXR/Whats-App-Image-2026-04-08-at-01-47-01.jpg",
        "https://i.postimg.cc/BnBMBWG7/Whats-App-Image-2026-04-08-at-01-48-10.jpg"
      ],
      "description": "The MG ZS is a subcompact SUV that offers affordability and practicality. Its 1.5L engine (106 hp) suits city driving, and higher trims offer additional equipment to make it a strong value proposition.",
      "features": [
        { "title": "Engine", "value": "1.5L Inline-4 (106 hp)" },
        { "title": "Range", "value": "390 miles (est.)" },
        { "title": "Transmission", "value": "5-speed Manual / CVT" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 12.0s" },
        { "title": "Top Speed", "value": "165 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "5 years or 60,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/mg-zs" }
    },
    {
      "id": "mg-hector",
      "brand": "Morris Garage (MG)",
      "model": "Hector",
      "price": 25000,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/Bv8PQDNM/Whats-App-Image-2026-04-08-at-01-49-04.jpg",
        "https://i.postimg.cc/7YxCJjmJ/Whats-App-Image-2026-04-08-at-01-49-47.jpg",
        "https://i.postimg.cc/C1T5h2z9/Whats-App-Image-2026-04-08-at-01-49-21.jpg"
      ],
      "description": "The MG Hector is a mid-size SUV with a spacious interior. Its 1.5L turbo engine (143 hp) powers the SUV, and its feature-rich cabin includes an integrated infotainment system and multiple airbags for safety.",
      "features": [
        { "title": "Engine", "value": "1.5L Turbocharged Inline-4 (143 hp)" },
        { "title": "Range", "value": "400 miles (est.)" },
        { "title": "Transmission", "value": "6-speed Automatic" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 12.5s" },
        { "title": "Top Speed", "value": "170 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "5 years or 60,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/mg-hector" }
    },
    {
      "id": "honda-civic",
      "brand": "Honda",
      "model": "Civic",
      "price": 24695,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/HnSTyvkB/Whats-App-Image-2026-04-08-at-01-55-45.jpg",
        "https://i.postimg.cc/fLCNGqmZ/Whats-App-Image-2026-04-08-at-01-53-44.jpg",
        "https://i.postimg.cc/KjjddGmz/Whats-App-Image-2026-04-08-at-01-55-55.jpg"
      ],
      "description": "The Honda Civic is a compact sedan with sporty handling and modern styling. Its 2.0L engine (150 hp)[21] delivers smooth performance and high fuel efficiency, making it an excellent all-rounder.",
      "features": [
        { "title": "Engine", "value": "2.0L Inline-4 (150 hp)[21]" },
        { "title": "Range", "value": "450 miles (est.)" },
        { "title": "Transmission", "value": "CVT" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 8.5s" },
        { "title": "Top Speed", "value": "200 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/honda-civic" }
    },
    {
      "id": "honda-accord",
      "brand": "Honda",
      "model": "Accord",
      "price": 28395,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/1RLQLFN8/Whats-App-Image-2026-04-08-at-01-58-27.jpg",
        "https://i.postimg.cc/RhtjMPJj/Whats-App-Image-2026-04-08-at-02-01-19.jpg",
        "https://i.postimg.cc/Gh1fFxy4/Whats-App-Image-2026-04-08-at-01-59-55.jpg"
      ],
      "description": "The Honda Accord is a sporty midsize sedan. Its 1.5L turbocharged engine (192 hp)[22] offers strong performance and efficiency, and the refined cabin and ride quality make it a benchmark in its class.",
      "features": [
        { "title": "Engine", "value": "1.5L Turbocharged Inline-4 (192 hp)[22]" },
        { "title": "Range", "value": "500 miles (est.)" },
        { "title": "Transmission", "value": "CVT" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 7.5s" },
        { "title": "Top Speed", "value": "210 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/honda-accord" }
    },
    {
      "id": "honda-cr-v",
      "brand": "Honda",
      "model": "CR-V",
      "price": 30920,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/DzW5kSGK/Whats-App-Image-2026-04-08-at-02-02-45.jpg",
        "https://i.postimg.cc/kXfy2QFB/Whats-App-Image-2026-04-08-at-02-05-07.jpg",
        "https://i.postimg.cc/Gh7kLcdn/Whats-App-Image-2026-04-08-at-02-03-58.jpg"
      ],
      "description": "The Honda CR-V is a top-selling compact SUV. Its 1.5L turbo engine (190 hp) balances power and fuel economy, and the spacious cabin with 5 seats and 39.2 cu.ft. cargo makes it very practical for families.",
      "features": [
        { "title": "Engine", "value": "1.5L Turbocharged Inline-4 (190 hp)" },
        { "title": "Range", "value": "450 miles (est.)" },
        { "title": "Transmission", "value": "CVT" },
        { "title": "Drive", "value": "FWD (AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 7.9s" },
        { "title": "Top Speed", "value": "205 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/honda-cr-v" }
    },
    {
      "id": "honda-hr-v",
      "brand": "Honda",
      "model": "HR-V",
      "price": 26600,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/qR4tcY4y/Whats-App-Image-2026-04-08-at-02-06-53.jpg",
        "https://i.postimg.cc/wT71kDYt/Whats-App-Image-2026-04-08-at-02-07-42.jpg",
        "https://i.postimg.cc/nz3L4hdj/Whats-App-Image-2026-04-08-at-02-07-15.jpg"
      ],
      "description": "The Honda HR-V is a subcompact crossover with versatile interior space. Powered by a 2.0L engine (158 hp), it emphasizes practicality and efficiency, with features like Honda Magic Seats that fold flat for cargo flexibility.",
      "features": [
        { "title": "Engine", "value": "2.0L Inline-4 (158 hp)" },
        { "title": "Range", "value": "400 miles (est.)" },
        { "title": "Transmission", "value": "CVT" },
        { "title": "Drive", "value": "FWD (AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 9.0s" },
        { "title": "Top Speed", "value": "190 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/honda-hr-v" }
    },
    {
      "id": "honda-ridgeline",
      "brand": "Honda",
      "model": "Ridgeline",
      "price": 40795,
      "currency": "USD",
      "category": "Truck",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/Y9CrCwpw/Whats-App-Image-2026-04-08-at-02-11-12.jpg",
        "https://i.postimg.cc/zDMz8M6c/Whats-App-Image-2026-04-08-at-02-10-22.jpg",
        "https://i.postimg.cc/9M02jtBv/Whats-App-Image-2026-04-08-at-02-11-50.jpg"
      ],
      "description": "The Honda Ridgeline is a unibody pickup known for a car-like ride. Its 3.5L V6 (280 hp) provides ample power and a smooth 9-speed automatic transmission. The unique in-bed trunk and fold-down tailgate add to its utility.",
      "features": [
        { "title": "Engine", "value": "3.5L V6 (280 hp)" },
        { "title": "Range", "value": "550 miles (est.)" },
        { "title": "Transmission", "value": "9-speed Automatic" },
        { "title": "Drive", "value": "AWD" },
        { "title": "Acceleration", "value": "0-100km/h in 6.0s" },
        { "title": "Top Speed", "value": "210 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/honda-ridgeline" }
    },
    {
      "id": "mercedes-c-class",
      "brand": "Mercedes-Benz",
      "model": "C 300",
      "price": 52430,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/KzPHwKXh/Whats-App-Image-2026-04-08-at-02-15-28.jpg",
        "https://i.postimg.cc/G2CMFc4M/Whats-App-Image-2026-04-08-at-02-15-41.jpg",
        "https://i.postimg.cc/4NSB8vKQ/Whats-App-Image-2026-04-08-at-02-16-02.jpg"
      ],
      "description": "The Mercedes-Benz C 300 sedan is a compact luxury car with an upscale interior. Its 2.0L turbo engine (255 hp)[23] and 48V hybrid assist deliver strong performance (0–60 in 6.0s)[24], while riding on a refined suspension.",
      "features": [
        { "title": "Engine", "value": "2.0L Turbocharged Inline-4 (255 hp)[23]" },
        { "title": "Range", "value": "400 miles (est.)" },
        { "title": "Transmission", "value": "9-speed Automatic (9G-TRONIC)" },
        { "title": "Drive", "value": "RWD (4MATIC AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 6.0s[24]" },
        { "title": "Top Speed", "value": "250 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/mercedes-c-class" }
    },
    {
      "id": "mercedes-e-class",
      "brand": "Mercedes-Benz",
      "model": "E 350",
      "price": 65150,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/fTpf7wFC/Whats-App-Image-2026-04-08-at-02-17-58.jpg",
        "https://i.postimg.cc/QtfpFs10/Whats-App-Image-2026-04-08-at-02-18-35.jpg",
        "https://i.postimg.cc/BvgFzshm/Whats-App-Image-2026-04-08-at-02-19-04.jpg"
      ],
      "description": "The Mercedes-Benz E 350 is a midsize luxury sedan blending elegance and power. Its turbocharged 2.0L engine (255 hp)[25] provides smooth acceleration, and the cabin features high-quality materials and advanced tech. A 3.0L inline-six (375 hp) is also available.",
      "features": [
        { "title": "Engine", "value": "2.0L Turbocharged Inline-4 (255 hp)[25]" },
        { "title": "Range", "value": "450 miles (est.)" },
        { "title": "Transmission", "value": "9-speed Automatic (9G-TRONIC)" },
        { "title": "Drive", "value": "RWD (4MATIC AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 6.5s" },
        { "title": "Top Speed", "value": "240 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/mercedes-e-class" }
    },
    {
      "id": "mercedes-glc-300",
      "brand": "Mercedes-Benz",
      "model": "GLC 300",
      "price": 46548,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/SxGLBWRV/Whats-App-Image-2026-04-08-at-02-20-56.jpg",
        "https://i.postimg.cc/65rCZdrC/Whats-App-Image-2026-04-08-at-02-21-19.jpg",
        "https://i.postimg.cc/Yqzm0t73/Whats-App-Image-2026-04-08-at-02-22-15.jpg"
      ],
      "description": "The Mercedes-Benz GLC 300 is a compact luxury SUV that combines style and utility. Its 2.0L turbocharged engine (255 hp)[26] and standard AWD (4MATIC) allow for confident acceleration (0–60 in 6.0s)[27], while its interior is refined and spacious.",
      "features": [
        { "title": "Engine", "value": "2.0L Turbocharged Inline-4 (255 hp)[26]" },
        { "title": "Range", "value": "420 miles (est.)" },
        { "title": "Transmission", "value": "9-speed Automatic (9G-TRONIC)" },
        { "title": "Drive", "value": "AWD (4MATIC)" },
        { "title": "Acceleration", "value": "0-100km/h in 6.0s[27]" },
        { "title": "Top Speed", "value": "220 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/mercedes-glc-300" }
    },
    {
      "id": "mercedes-s-class",
      "brand": "Mercedes-Benz",
      "model": "S 500",
      "price": 120000,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline / Hybrid",
      "images": [
        "https://i.postimg.cc/3wsw-9q7r/Whats-App-Image-2026-04-08-at-02-23-38.jpg",
        "https://i.postimg.cc/3JtJzN7F/Whats-App-Image-2026-04-08-at-02-24-34.jpg",
        "https://i.postimg.cc/fywDrnrC/image.png"
      ],
      "description": "The Mercedes-Benz S 500 is a flagship luxury sedan. Its twin-turbo V6 (429 hp) provides effortless power, and features like E-Active Body Control suspension make it exceptionally comfortable and high-tech, with a top speed limited to 250 km/h.",
      "features": [
        { "title": "Engine", "value": "3.0L Twin-Turbo V6 (429 hp)" },
        { "title": "Range", "value": "500 miles (est.)" },
        { "title": "Transmission", "value": "9-speed Automatic (9G-TRONIC)" },
        { "title": "Drive", "value": "RWD (AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 4.8s" },
        { "title": "Top Speed", "value": "250 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/mercedes-s-class" }
    },
    {
      "id": "mercedes-eqs-580",
      "brand": "Mercedes-Benz",
      "model": "EQS 580",
      "price": 119000,
      "currency": "USD",
      "category": "Electric",
      "type": "Electric",
      "images": [
        "https://i.postimg.cc/9fjSpPK2/Whats-App-Image-2026-04-08-at-02-33-30.jpg",
        "https://i.postimg.cc/vHJSYLQY/Whats-App-Image-2026-04-08-at-02-33-33.jpg",
        "https://i.postimg.cc/cJshCFPC/Whats-App-Image-2026-04-08-at-02-33-36.jpg"
      ],
      "description": "The Mercedes-Benz EQS 580 is a luxury electric sedan. Its dual motors produce 516 hp, enabling rapid acceleration. With a large battery pack, it offers a range over 350 miles, and the cabin features futuristic design and extensive digital displays.",
      "features": [
        { "title": "Engine", "value": "Dual Electric Motors (516 hp)" },
        { "title": "Range", "value": "350 miles (EPA)" },
        { "title": "Transmission", "value": "Single-Speed Automatic" },
        { "title": "Drive", "value": "AWD" },
        { "title": "Acceleration", "value": "0-100km/h in 4.1s" },
        { "title": "Top Speed", "value": "210 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/mercedes-eqs-580" }
    },
    {
      "id": "toyota-corolla",
      "brand": "Toyota",
      "model": "Corolla",
      "price": 23000,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/65Jmwf65/Whats-App-Image-2026-04-08-at-02-35-11.jpg",
        "https://i.postimg.cc/XqwxXtNS/Whats-App-Image-2026-04-08-at-02-35-28.jpg",
        "https://i.postimg.cc/bNy1QZ32/Whats-App-Image-2026-04-08-at-02-35-47.jpg"
      ],
      "description": "The Toyota Corolla is a reliable compact car. Its 1.8L engine (139 hp) and CVT provide smooth power delivery, and it boasts excellent fuel economy and safety features, making it a practical daily driver.",
      "features": [
        { "title": "Engine", "value": "1.8L Inline-4 (139 hp)" },
        { "title": "Range", "value": "450 miles (est.)" },
        { "title": "Transmission", "value": "CVT" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 10.5s" },
        { "title": "Top Speed", "value": "180 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/toyota-corolla" }
    },
    {
      "id": "toyota-camry",
      "brand": "Toyota",
      "model": "Camry",
      "price": 28395,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/L6Whn57M/Whats-App-Image-2026-04-08-at-02-37-34.jpg",
        "https://i.postimg.cc/2jcSK3CB/Whats-App-Image-2026-04-08-at-02-38-19.jpg",
        "https://i.postimg.cc/fbDsLhwh/Whats-App-Image-2026-04-08-at-02-37-14.jpg"
      ],
      "description": "The Toyota Camry is a bestselling midsize sedan. Its 2.5L engine (202 hp) offers a good balance of power and efficiency, and it provides a comfortable ride with a well-equipped interior.",
      "features": [
        { "title": "Engine", "value": "2.5L Inline-4 (202 hp)" },
        { "title": "Range", "value": "500 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "FWD (AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 7.6s" },
        { "title": "Top Speed", "value": "210 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/toyota-camry" }
    },
    {
      "id": "toyota-rav4",
      "brand": "Toyota",
      "model": "RAV4",
      "price": 28925,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/pTrghW3H/Whats-App-Image-2026-04-08-at-02-43-50.jpg",
        "https://i.postimg.cc/Y9JMtL0P/Whats-App-Image-2026-04-08-at-02-43-51.jpg",
        "https://i.postimg.cc/vZQM8s8x/Whats-App-Image-2026-04-08-at-02-43-51-(1).jpg"
      ],
      "description": "The Toyota RAV4 is a compact SUV with a rugged look. Its 2.5L engine (203 hp) provides ample acceleration, and it offers a comfortable ride with optional AWD and a spacious, high-tech interior.",
      "features": [
        { "title": "Engine", "value": "2.5L Inline-4 (203 hp)" },
        { "title": "Range", "value": "460 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "FWD (AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 8.1s" },
        { "title": "Top Speed", "value": "200 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/toyota-rav4" }
    },
    {
      "id": "toyota-highlander",
      "brand": "Toyota",
      "model": "Highlander",
      "price": 37565,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/BnwyW9XM/Whats-App-Image-2026-04-08-at-02-45-49.jpg",
        "https://i.postimg.cc/qMvjpDVd/Whats-App-Image-2026-04-08-at-02-46-18.jpg",
        "https://i.postimg.cc/cJ0KNj2k/Whats-App-Image-2026-04-08-at-02-46-09.jpg"
      ],
      "description": "The Toyota Highlander is a three-row SUV ideal for families. Its 3.5L V6 (295 hp) provides strong acceleration, and features like a quiet cabin and optional AWD make it comfortable and capable for road trips.",
      "features": [
        { "title": "Engine", "value": "3.5L V6 (295 hp)" },
        { "title": "Range", "value": "500 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "FWD (AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 7.0s" },
        { "title": "Top Speed", "value": "205 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/toyota-highlander" }
    },
    {
      "id": "toyota-prius",
      "brand": "Toyota",
      "model": "Prius",
      "price": 27925,
      "currency": "USD",
      "category": "Hatchback",
      "type": "Hybrid",
      "images": [
        "https://i.postimg.cc/WbZtqTPH/Whats-App-Image-2026-04-08-at-02-47-33.jpg",
        "https://i.postimg.cc/ThvdJ5XW/Whats-App-Image-2026-04-08-at-02-49-26.jpg",
        "https://i.postimg.cc/wvtRWNnZ/Whats-App-Image-2026-04-08-at-02-48-29.jpg"
      ],
      "description": "The Toyota Prius is an iconic hybrid. Its 1.8L engine paired with electric motors produces 121 hp, and it achieves excellent fuel economy (~56 mpg). The aerodynamic design and efficient powertrain make it ideal for economy.",
      "features": [
        { "title": "Engine", "value": "1.8L Inline-4 + Electric (121 hp combined)" },
        { "title": "Range", "value": "600 miles (est.)" },
        { "title": "Transmission", "value": "Continuously Variable Transmission (CVT)" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 10.0s" },
        { "title": "Top Speed", "value": "180 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/toyota-prius" }
    },
    {
      "id": "ford-f-150",
      "brand": "Ford",
      "model": "F-150",
      "price": 30000,
      "currency": "USD",
      "category": "Truck",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/X7gqkxpC/Whats-App-Image-2026-04-08-at-02-52-43.jpg",
        "https://i.postimg.cc/dVpY2TmG/Whats-App-Image-2026-04-08-at-02-53-16.jpg",
        "https://i.postimg.cc/XNzQ7cVv/image.png"
      ],
      "description": "The Ford F-150 is a full-size pickup truck. Its base 3.5L V6 (400 hp) or optional 5.0L V8 deliver strong towing and payload capabilities. Its rugged design and modern features make it a leader in its segment.",
      "features": [
        { "title": "Engine", "value": "3.5L V6 (400 hp)" },
        { "title": "Range", "value": "600 miles (est.)" },
        { "title": "Transmission", "value": "10-speed Automatic" },
        { "title": "Drive", "value": "RWD (4x4 optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 6.0s" },
        { "title": "Top Speed", "value": "180 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/ford-f-150" }
    },
    {
      "id": "ford-mustang",
      "brand": "Ford",
      "model": "Mustang",
      "price": 32000,
      "currency": "USD",
      "category": "Coupe",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/HkC0V6Fw/Whats-App-Image-2026-04-08-at-02-54-31.jpg",
        "https://i.postimg.cc/cLMRc5pt/Whats-App-Image-2026-04-08-at-02-55-43.jpg",
        "https://i.postimg.cc/QMdTJNgn/Whats-App-Image-2026-04-08-at-02-54-50.jpg"
      ],
      "description": "The Ford Mustang is an American sports coupe. The base EcoBoost version with a 2.3L turbo I4 (310 hp) is quick, while the GT’s 5.0L V8 (480 hp) delivers classic muscle car performance and a roar.",
      "features": [
        { "title": "Engine", "value": "2.3L Turbocharged Inline-4 (310 hp)" },
        { "title": "Range", "value": "450 miles (est.)" },
        { "title": "Transmission", "value": "10-speed Automatic" },
        { "title": "Drive", "value": "RWD" },
        { "title": "Acceleration", "value": "0-100km/h in 5.0s" },
        { "title": "Top Speed", "value": "250 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/ford-mustang" }
    },
    {
      "id": "ford-explorer",
      "brand": "Ford",
      "model": "Explorer",
      "price": 36000,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/NM1Bym90/image.png",
        "https://i.postimg.cc/wTBYzSk4/Whats-App-Image-2026-04-08-at-02-56-55.jpg",
        "https://i.postimg.cc/PxM0s4vf/Whats-App-Image-2026-04-08-at-02-58-41.jpg"
      ],
      "description": "The Ford Explorer is a three-row SUV. Its 2.3L turbocharged I4 (300 hp) and optional V6 provide ample power, and its technology-rich interior offers features like SYNC infotainment and advanced safety systems.",
      "features": [
        { "title": "Engine", "value": "2.3L Turbocharged Inline-4 (300 hp)" },
        { "title": "Range", "value": "500 miles (est.)" },
        { "title": "Transmission", "value": "10-speed Automatic" },
        { "title": "Drive", "value": "RWD (AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 6.5s" },
        { "title": "Top Speed", "value": "200 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/ford-explorer" }
    },
    {
      "id": "ford-escape",
      "brand": "Ford",
      "model": "Escape",
      "price": 27800,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/0NYBDff3/Whats-App-Image-2026-04-08-at-02-59-54.jpg",
        "https://i.postimg.cc/Xvkspvjc/image.png",
        "https://i.postimg.cc/vmbzFdrD/image.png"
      ],
      "description": "The Ford Escape is a compact SUV with a turbocharged 1.5L I3 engine (180 hp). It offers good fuel economy and a comfortable ride, along with modern tech like an available hybrid powertrain for better efficiency.",
      "features": [
        { "title": "Engine", "value": "1.5L Turbocharged Inline-3 (180 hp)" },
        { "title": "Range", "value": "450 miles (est.)" },
        { "title": "Transmission", "value": "8-speed Automatic" },
        { "title": "Drive", "value": "FWD (AWD optional)" },
        { "title": "Acceleration", "value": "0-100km/h in 8.2s" },
        { "title": "Top Speed", "value": "190 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/ford-escape" }
    },
    {
      "id": "ford-focus",
      "brand": "Ford",
      "model": "Focus",
      "price": 23000,
      "currency": "USD",
      "category": "Hatchback",
      "type": "Gasoline",
      "images": [
        "https://i.postimg.cc/YCfPmR8s/Whats-App-Image-2026-04-08-at-03-04-56.jpg",
        "https://i.postimg.cc/Vk1G1M16/Whats-App-Image-2026-04-08-at-03-05-20.jpg",
        "https://i.postimg.cc/TYv5HJqT/Whats-App-Image-2026-04-07-at-4-05-19-PM.jpg"
      ],
      "description": "The Ford Focus is a compact hatchback. Its 2.0L I4 engine (160 hp) provides nimble performance, and features like sharp steering and efficient fuel economy make it a practical choice for daily use.",
      "features": [
        { "title": "Engine", "value": "2.0L Inline-4 (160 hp)" },
        { "title": "Range", "value": "400 miles (est.)" },
        { "title": "Transmission", "value": "6-speed Manual / Automatic" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 8.7s" },
        { "title": "Top Speed", "value": "195 km/h" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24 months" },
          { "name": "Zero Interest Offer", "details": "0% interest for first 6 months" },
          { "name": "Premium Plan", "details": "Flexible installment with partner banks" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Roadside assistance", "Complimentary maintenance for 2 years"]
      },
      "cta": { "label": "Buy Now", "action": "/checkout/ford-focus" }
    },
    {
      "id": "nissan-altima",
      "brand": "Nissan",
      "model": "Altima",
      "price": 28000,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",

      "images": [
        "https://i.postimg.cc/g0bN4Zt2/NISSAN-ALTIMA.jpg",
        "https://i.postimg.cc/gJkyBqVP/NISAAN-ALTIMA-SV.jpg",
        "https://i.postimg.cc/W4SgrFQS/NISSAN-ALTIMA-1.jpg"
      ],

      "description": "The Nissan Altima delivers a perfect blend of comfort, fuel efficiency, and advanced driver assistance features, making it ideal for everyday driving.",

      "features": [
        { "title": "Engine", "value": "2.5L 4-Cylinder" },
        { "title": "Range", "value": "630 miles" },
        { "title": "Transmission", "value": "Automatic (CVT)" },
        { "title": "Drive", "value": "FWD / AWD" },
        { "title": "Acceleration", "value": "0-100km/h in 7.5s" },
        { "title": "Top Speed", "value": "220 km/h" }
      ],

      "finance": {
        "title": "Finance Options",
        "plans": [
          {
            "name": "Standard Plan",
            "details": "Pay 20% upfront and spread balance over 24 months"
          },
          {
            "name": "Zero Interest Offer",
            "details": "0% interest for first 6 months"
          },
          {
            "name": "Premium Plan",
            "details": "Flexible installment with partner banks"
          }
        ]
      }
    },
    {
      "id": "nissan-rogue",
      "brand": "Nissan",
      "model": "Rogue",
      "price": 32000,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",

      "images": [
        "https://i.postimg.cc/909BGXPy/NISSAN-ROGUE-FV.jpg",
        "https://i.postimg.cc/qvwxc5Kh/NISSAN-ROGUE-IV.jpg",
        "https://i.postimg.cc/MpS9mBFJ/Whats-App-Image-2026-04-08-at-03-51-59.jpg"
      ],

      "description": "The Nissan Rogue is a compact SUV designed for families, offering spacious interiors, safety technologies, and impressive fuel economy.",

      "features": [
        { "title": "Engine", "value": "1.5L Turbocharged" },
        { "title": "Range", "value": "550 miles" },
        { "title": "Transmission", "value": "Automatic (CVT)" },
        { "title": "Drive", "value": "AWD" },
        { "title": "Acceleration", "value": "0-100km/h in 8.2s" },
        { "title": "Top Speed", "value": "200 km/h" }
      ],

      "finance": {
        "title": "Finance Options",
        "plans": [
          {
            "name": "Standard Plan",
            "details": "Pay 20% upfront and spread balance over 24 months"
          },
          {
            "name": "Zero Interest Offer",
            "details": "0% interest for first 6 months"
          },
          {
            "name": "Premium Plan",
            "details": "Flexible installment with partner banks"
          }
        ]
      }
    },
    {
      "id": "nissan-leaf",
      "brand": "Nissan",
      "model": "Leaf",
      "price": 31000,
      "currency": "USD",
      "category": "Electric",
      "type": "Electric",

      "images": [
        "https://i.postimg.cc/qMdsPTXb/Whats-App-Image-2026-04-08-at-03-56-07.jpg",
        "https://i.postimg.cc/zfMW0ZGf/Whats-App-Image-2026-04-08-at-03-56-09.jpg",
        "https://i.postimg.cc/Nf4HZr0v/Whats-App-Image-2026-04-08-at-03-56-09-(1).jpg"
      ],

      "description": "The Nissan Leaf is a fully electric vehicle known for its eco-friendly performance, smooth ride, and advanced EV technology.",

      "features": [
        { "title": "Engine", "value": "Single Electric Motor" },
        { "title": "Range", "value": "240 miles" },
        { "title": "Transmission", "value": "Automatic" },
        { "title": "Drive", "value": "FWD" },
        { "title": "Acceleration", "value": "0-100km/h in 7.9s" },
        { "title": "Top Speed", "value": "157 km/h" }
      ],

      "finance": {
        "title": "Finance Options",
        "plans": [
          {
            "name": "Standard Plan",
            "details": "Pay 20% upfront and spread balance over 24 months"
          },
          {
            "name": "Zero Interest Offer",
            "details": "0% interest for first 6 months"
          },
          {
            "name": "Premium Plan",
            "details": "Flexible installment with partner banks"
          }
        ]
      }
    }
  ]
}



export default carsData;
