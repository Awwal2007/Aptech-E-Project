const carsData = {
  "cars": [
    {
      "id": "bmw-m4",
      "brand": "BMW",
      "model": "M4 Competition",
      "price": 89900,
      "currency": "USD",
      "category": "Coupe",
      "type": "Gasoline",
      "images": [
        "https://images.unsplash.com/photo-1617814071742-11f2bc178873?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop"
      ],
      "description": "Experience the epitome of driving pleasure with the BMW M4 Competition. Unleash raw power and precision engineering on every turn.",
      "features": [
        { "title": "Engine", "value": "3.0L Twin-Turbo Inline-6" },
        { "title": "Acceleration", "value": "0-60 in 3.8s" },
        { "title": "Transmission", "value": "8-Speed M Steptronic" },
        { "title": "Drive", "value": "RWD / xDrive" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Standard Plan", "details": "Pay 20% upfront and spread balance over 24-48 months" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["3 years free maintenance"]
      },
      "cta": { "label": "View Details", "action": "/cars/bmw-m4" }
    },
    {
      "id": "audi-rs7",
      "brand": "AUDI",
      "model": "RS7 Sportback",
      "price": 118500,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop"
      ],
      "description": "The Audi RS7 Sportback combines breathtaking performance with elegant design, offering an unmatched driving experience.",
      "features": [
        { "title": "Engine", "value": "4.0L Twin-Turbo V8" },
        { "title": "Acceleration", "value": "0-60 in 3.5s" },
        { "title": "Transmission", "value": "Tiptronic" },
        { "title": "Drive", "value": "Quattro AWD" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "RS Exclusive Plan", "details": "Tailored leasing for RS models" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Roadside Assistance"]
      },
      "cta": { "label": "View Details", "action": "/cars/audi-rs7" }
    },
    {
      "id": "hyundai-elantra",
      "brand": "HYUNDAI",
      "model": "Elantra N",
      "price": 34850,
      "currency": "USD",
      "category": "Sedan",
      "type": "Gasoline",
      "images": [
        "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617469767053-d3b503a0b982?q=80&w=1000&auto=format&fit=crop"
      ],
      "description": "The Hyundai Elantra N is a daily-driven performance beast that brings racetrack excitement to your every drive.",
      "features": [
        { "title": "Engine", "value": "2.0L Turbo Inline-4" },
        { "title": "Acceleration", "value": "0-60 in 5.0s" },
        { "title": "Transmission", "value": "6-Speed Manual / 8-Speed DCT" },
        { "title": "Drive", "value": "FWD with e-LSD" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "N-Performance Plan", "details": "Low APR for qualified buyers" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "10 years or 100,000 miles",
        "extras": ["Industry-leading powertrain warranty"]
      },
      "cta": { "label": "View Details", "action": "/cars/hyundai-elantra" }
    },
    {
      "id": "jeep-wrangler",
      "brand": "JEEP",
      "model": "Wrangler Rubicon",
      "price": 49500,
      "currency": "USD",
      "category": "SUV",
      "type": "Gasoline",
      "images": [
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop"
      ],
      "description": "Go where no one has gone before with the legendary Jeep Wrangler Rubicon — built for the most extreme off-road adventures.",
      "features": [
        { "title": "Engine", "value": "3.6L Pentastar V6" },
        { "title": "Suspension", "value": "Rock-Trac 4x4 System" },
        { "title": "Transmission", "value": "8-Speed Automatic" },
        { "title": "Drive", "value": "4WD" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Adventure Plan", "details": "No payments for first 90 days" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "3 years or 36,000 miles",
        "extras": ["Jeep Wave premium membership"]
      },
      "cta": { "label": "View Details", "action": "/cars/jeep-wrangler" }
    },
    {
      "id": "suzuki-swift",
      "brand": "SUZUKI",
      "model": "Swift Sport",
      "price": 27500,
      "currency": "USD",
      "category": "Hatchback",
      "type": "Gasoline",
      "images": [
        "https://images.unsplash.com/photo-1582268862590-b184f0bc931f?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1000&auto=format&fit=crop"
      ],
      "description": "Lightweight, agile, and incredibly fun — the Suzuki Swift Sport delivers pure hot hatch performance.",
      "features": [
        { "title": "Engine", "value": "1.4L BoosterJet Turbo" },
        { "title": "Weight", "value": "970 kg" },
        { "title": "Transmission", "value": "6-Speed Manual" },
        { "title": "Drive", "value": "FWD" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Suzuki Financial Services", "details": "Flexible monthly installments" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "5 years or 100,000 km",
        "extras": ["Capped price servicing"]
      },
      "cta": { "label": "View Details", "action": "/cars/suzuki-swift" }
    },
    {
      "id": "mg-cyberster",
      "brand": "MG",
      "model": "Cyberster",
      "price": 65000,
      "currency": "USD",
      "category": "Electric",
      "type": "Gasoline / Electric",
      "images": [
        "https://images.unsplash.com/photo-1631215160533-87f59f63567b?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1632245889027-ef319992383f?q=80&w=1000&auto=format&fit=crop"
      ],
      "description": "The MG Cyberster is a futuristic all-electric roadster that combines heritage with cutting-edge technology.",
      "features": [
        { "title": "Engine", "value": "Dual Electric Motors" },
        { "title": "Acceleration", "value": "0-60 in 3.2s" },
        { "title": "Range", "value": "500 km" },
        { "title": "Drive", "value": "AWD" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Eco Plan", "details": "Government incentives available for EV buyers" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "7 years or 80,000 miles",
        "extras": ["Battery health guarantee"]
      },
      "cta": { "label": "View Details", "action": "/cars/mg-cyberster" }
    },
    {
      "id": "tesla-model-3",
      "brand": "TESLA",
      "model": "Model 3 Performance",
      "price": 54990,
      "currency": "USD",
      "category": "Electric",
      "type": "Electric",
      "images": [
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1536700503339-1eeb430e3802?q=80&w=1000&auto=format&fit=crop"
      ],
      "description": "Model 3 Performance is built for exhilarating speed and handling, while maintaining Tesla's core focus on safety and range.",
      "features": [
        { "title": "Engine", "value": "Dual Motor Performance" },
        { "title": "Acceleration", "value": "0-60 in 3.1s" },
        { "title": "Range", "value": "315 miles" },
        { "title": "Top Speed", "value": "162 mph" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "Tesla Finance", "details": "Easy in-app management" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["8 year battery and drive unit warranty"]
      },
      "cta": { "label": "View Details", "action": "/cars/tesla-model-3" }
    },
    {
      "id": "mercedes-gt",
      "brand": "MERCEDES",
      "model": "AMG GT 63 S",
      "price": 165000,
      "currency": "USD",
      "category": "Coupe",
      "type": "Gasoline",
      "images": [
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=1000&auto=format&fit=crop"
      ],
      "description": "Unrivaled luxury and sheer AMG power. The GT 63 S is for those who demand total performance without compromise.",
      "features": [
        { "title": "Engine", "value": "4.0L Biturbo V8" },
        { "title": "Acceleration", "value": "0-60 in 3.2s" },
        { "title": "Transmission", "value": "9-Speed MCT" },
        { "title": "Drive", "value": "AMG Performance 4MATIC+" }
      ],
      "finance": {
        "title": "Finance Options",
        "plans": [
          { "name": "AMG Elite", "details": "Customized finance for AMG owners" }
        ]
      },
      "warranty": {
        "title": "Warranty",
        "coverage": "4 years or 50,000 miles",
        "extras": ["Mercedes me connect membership"]
      },
      "cta": { "label": "View Details", "action": "/cars/mercedes-gt" }
    }
  ]
}

export default carsData;
