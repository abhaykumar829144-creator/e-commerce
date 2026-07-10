import { IFooterLink }  from "@/interfaces/footer";

export const footerData: IFooterLink[] = [
    {
        title: "browse",
        urlData: [
            {
                urlTitle: "store location",
                urlLink: "#",
            },
            {
                urlTitle: "delivery Estimates",
                urlLink: "#",
            },
            {
                urlTitle: "careers",
                urlLink: "#",
            },
        ],

    },

{
    title: "Support",
    urlData: [
      { urlTitle: "Help Center", urlLink: "#" },
      { urlTitle: "Refund Policies", urlLink: "#" },
      { urlTitle: "Submit Ticket", urlLink: "#" },
    ],
  },
  {
    title: "Legal",
    urlData: [
      { urlTitle: "Privacy Terms", urlLink: "#" },
      { urlTitle: "Terms of Service", urlLink: "#" },
      { urlTitle: "Cookie Settings", urlLink: "#" },
    ],

  },
]