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
              <div className="flex gap-6 justify-end items-center">
                <img
                  className="w-[100px] h-[60px] rounded-md"
                  src="https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-08/india_s_internet_surge-catalyzing_change_in_the_telecom_landscape.jpg?itok=kgi1yupc"
                  alt=""
                />
                <div>
                  <h1 className="text-[#2EA35E]">Aug 20, 2024</h1>
                  <p className="text-[#171717] text-[15px] font-semibold">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <span className="flex gap-2 border-b-2 pb-2">
                    <img
                      className="w-[30px] rounded-full border"
                      src="https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2022-10/Kuldeep_Singla.jpg?itok=mM0HDKtu"
                      alt=""
                    />
                    <span>
                      By: <span className="text-pink-500">Kundan Singla</span>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors In India */}
        <div className="bg-orange-300 px-10 py-6">
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
      "https://static.investindia.gov.in/s3fs-public/styles/thumb_305x212/public/2024-08/india_s_internet_surge-catalyzing_change_in_the_telecom_landscape.jpg?itok=kgi1yupc",
    name: "Kundan Kumar",
    manImg:
      "https://static.investindia.gov.in/s3fs-public/styles/avtar/public/2022-10/Kuldeep_Singla.jpg?itok=mM0HDKtu",
    year: "Aug 20, 2024",
    description:
      "India’s internet surge: Catalyzing change in the telecom landscape.",
  },
];
