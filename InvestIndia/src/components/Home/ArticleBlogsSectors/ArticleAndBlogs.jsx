import React from "react";

function ArticleAndBlogs() {
  return (
    <>
      <div className="h-[800px] grid lg:grid-cols-[35%_auto] py-5 px-3">
        {/* Article And Blogs */}
        <div className="pl-10 py-6">
          <h1 className="text-[#1FA37F] text-xl font-roboCondensedSan font-semibold flex items-center gap-4">
            <div className="w-[40px] h-[3px] bg-[#1fa37f]" />
            Articles & Blogs
          </h1>

          <div className="h-[670px] mt-7 font-robotoHelvAriSan overflow-x-auto">
            {AllArticleDetails.map((details, index) => (
              <div className="flex gap-6 justify-end items-center" key={index}>
                <img
                  className="w-[100px] h-[60px] rounded-md"
                  src={details.image}
                  alt=""
                />
                <div>
                  <h1 className="text-[#2EA35E]">{details.year}</h1>
                  <p className="text-[#171717] text-[15px] hover:text-red-500 cursor-pointer font-semibold">
                    {details.description}
                  </p>
                  <span className="flex gap-2 border-b-2 pb-2">
                    <img
                      className="w-[30px] rounded-full border"
                      src={details.manImg}
                      alt=""
                    />
                    <span>
                      By: <span className="text-pink-500">{details.name}</span>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors In India */}
        <div className="bg-orange-300 px-10 py-6 rounded-md">
        <h1 className="text-[#1FA37F] text-xl font-roboCondensedSan font-semibold flex items-center gap-4">
            <div className="w-[40px] h-[3px] bg-[#1fa37f]" />
            Sectors In India
          </h1>
        </div>
      </div>
    </>
  );
}

export default ArticleAndBlogs;

const AllArticleDetails = [
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-08/india_s_internet_surge-catalyzing_change_in_the_telecom_landscape.jpg?itok=kgi1yupc",
    name: "Kundan Kumar",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2022-10/Kuldeep_Singla.jpg?itok=mM0HDKtu",
    year: "Aug 20, 2024",
    description:
      "India’s internet surge: Catalyzing change in the telecom landscape.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-08/looms_of_legacy_commemorating_national_handloom_day_with_india_s_timeless_crafts.jpg?itok=CJnQPKeP",
    name: "Dr. Suruchi Mittar ",
    manImg:
      "http://www.investindia.gov.in/themes/investindia/image/user_2.jpg",
    year: "Mar 15, 2023",
    description:
      "Looms of Legacy: Commemorating National Handloom Day with India.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-07/india_s_union_budget_2024-25_key_highlights.jpg?itok=4fCyn4dK",
    name: "Ankit Agrawal",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2022-11/Ankit_Agrawal.jpg?itok=6M02-snd",
    year: "Jul 23, 2024",
    description:
      "India's Union Budget 2024-25: Key Highlights.Catalyzing change in the telecom landscape.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-07/sunrise_sectors_in_india.png?itok=eTyL1hbA",
    name: "Dewangi Sharma",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2022-11/Dewangi_Sharma%20%281%29.jpg?itok=Ckn_A3Ut",
    year: "Jul 15, 2024",
    description:
      "Sunrise sectors in India: A Lucrative Landscape for Foreign Investors.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-07/opportunities_in_india_s_edtech_industry_driving_innovation_and_accessibility.png?itok=uglR2toC",
    name: "Invest India",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2019-07/iiuser_0.png?itok=EXKino3s",
    year: "Jul 14, 2024",
    description:
      "Opportunities in India’s EdTech Industry: Driving Innovation.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-08/india_s_internet_surge-catalyzing_change_in_the_telecom_landscape.jpg?itok=kgi1yupc",
    name: "Kundan Kumar",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2022-10/Kuldeep_Singla.jpg?itok=mM0HDKtu",
    year: "Aug 20, 2024",
    description:
      "India’s internet surge: Catalyzing change in the telecom landscape.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-08/looms_of_legacy_commemorating_national_handloom_day_with_india_s_timeless_crafts.jpg?itok=CJnQPKeP",
    name: "Dr. Suruchi Mittar ",
    manImg:
      "http://www.investindia.gov.in/themes/investindia/image/user_2.jpg",
    year: "Mar 15, 2023",
    description:
      "Looms of Legacy: Commemorating National Handloom Day with India.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-07/india_s_union_budget_2024-25_key_highlights.jpg?itok=4fCyn4dK",
    name: "Ankit Agrawal",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2022-11/Ankit_Agrawal.jpg?itok=6M02-snd",
    year: "Jul 23, 2024",
    description:
      "India's Union Budget 2024-25: Key Highlights.Catalyzing change in the telecom landscape.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-07/sunrise_sectors_in_india.png?itok=eTyL1hbA",
    name: "Dewangi Sharma",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2022-11/Dewangi_Sharma%20%281%29.jpg?itok=Ckn_A3Ut",
    year: "Jul 15, 2024",
    description:
      "Sunrise sectors in India: A Lucrative Landscape for Foreign Investors.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-07/opportunities_in_india_s_edtech_industry_driving_innovation_and_accessibility.png?itok=uglR2toC",
    name: "Invest India",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2019-07/iiuser_0.png?itok=EXKino3s",
    year: "Jul 14, 2024",
    description:
      "Opportunities in India’s EdTech Industry: Driving Innovation.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-08/india_s_internet_surge-catalyzing_change_in_the_telecom_landscape.jpg?itok=kgi1yupc",
    name: "Kundan Kumar",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2022-10/Kuldeep_Singla.jpg?itok=mM0HDKtu",
    year: "Aug 20, 2024",
    description:
      "India’s internet surge: Catalyzing change in the telecom landscape.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-08/looms_of_legacy_commemorating_national_handloom_day_with_india_s_timeless_crafts.jpg?itok=CJnQPKeP",
    name: "Dr. Suruchi Mittar ",
    manImg:
      "http://www.investindia.gov.in/themes/investindia/image/user_2.jpg",
    year: "Mar 15, 2023",
    description:
      "Looms of Legacy: Commemorating National Handloom Day with India.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-07/india_s_union_budget_2024-25_key_highlights.jpg?itok=4fCyn4dK",
    name: "Ankit Agrawal",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2022-11/Ankit_Agrawal.jpg?itok=6M02-snd",
    year: "Jul 23, 2024",
    description:
      "India's Union Budget 2024-25: Key Highlights.Catalyzing change in the telecom landscape.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-07/sunrise_sectors_in_india.png?itok=eTyL1hbA",
    name: "Dewangi Sharma",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2022-11/Dewangi_Sharma%20%281%29.jpg?itok=Ckn_A3Ut",
    year: "Jul 15, 2024",
    description:
      "Sunrise sectors in India: A Lucrative Landscape for Foreign Investors.",
  },
  {
    image:
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-07/opportunities_in_india_s_edtech_industry_driving_innovation_and_accessibility.png?itok=uglR2toC",
    name: "Invest India",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2019-07/iiuser_0.png?itok=EXKino3s",
    year: "Jul 14, 2024",
    description:
      "Opportunities in India’s EdTech Industry: Driving Innovation.",
  },
  
];
