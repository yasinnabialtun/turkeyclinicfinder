/**
 * Mock clinic data for development
 * Firebase olmadan çalışmak için
 */

export interface Clinic {
  id: number;
  name: string;
  city: string;
  treatments: string[];
  rating: number;
  reviewCount: number;
  priceRange: string;
  image?: string;
  description?: string;
}

export const mockClinics: Clinic[] = [
  {
    id: 1,
    name: "Istanbul Hair Transplant Center",
    city: "Istanbul",
    treatments: ["Hair Transplant", "Beard Transplant"],
    rating: 4.8,
    reviewCount: 245,
    priceRange: "$1,500 - $3,000",
    description: "Leading hair transplant clinic in Istanbul with 15+ years of experience.",
  },
  {
    id: 2,
    name: "Ankara Dental Care",
    city: "Ankara",
    treatments: ["Dental Implants", "Teeth Whitening", "Orthodontics"],
    rating: 4.7,
    reviewCount: 189,
    priceRange: "$800 - $2,500",
    description: "Modern dental clinic offering comprehensive dental services.",
  },
  {
    id: 3,
    name: "Izmir Plastic Surgery",
    city: "Izmir",
    treatments: ["Rhinoplasty", "Breast Augmentation", "Liposuction"],
    rating: 4.9,
    reviewCount: 312,
    priceRange: "$3,000 - $8,000",
    description: "Expert plastic surgeons with international certifications.",
  },
  {
    id: 4,
    name: "Antalya Medical Center",
    city: "Antalya",
    treatments: ["Hair Transplant", "Dental Care", "Eye Surgery"],
    rating: 4.6,
    reviewCount: 156,
    priceRange: "$1,200 - $4,000",
    description: "Full-service medical center in beautiful Antalya.",
  },
  {
    id: 5,
    name: "Bursa Orthopedic Clinic",
    city: "Bursa",
    treatments: ["Knee Surgery", "Hip Replacement", "Sports Medicine"],
    rating: 4.5,
    reviewCount: 98,
    priceRange: "$2,000 - $6,000",
    description: "Specialized orthopedic treatments and rehabilitation.",
  },
];

export const getClinics = async (params?: {
  city?: string;
  treatment?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  page_size?: number;
}) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  let filtered = [...mockClinics];

  // Filter by city
  if (params?.city) {
    filtered = filtered.filter(c => 
      c.city.toLowerCase().includes(params.city!.toLowerCase())
    );
  }

  // Filter by treatment
  if (params?.treatment) {
    filtered = filtered.filter(c =>
      c.treatments.some(t => 
        t.toLowerCase().includes(params.treatment!.toLowerCase())
      )
    );
  }

  // Pagination
  const page = params?.page || 1;
  const pageSize = params?.page_size || 20;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    success: true,
    data: {
      items: filtered.slice(start, end),
      total: filtered.length,
      page,
      page_size: pageSize,
    },
  };
};

export const getClinic = async (id: number) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const clinic = mockClinics.find(c => c.id === id);
  
  if (!clinic) {
    return {
      success: false,
      data: null,
      message: "Clinic not found",
    };
  }

  return {
    success: true,
    data: clinic,
  };
};

