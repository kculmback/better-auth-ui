import {
  cn
} from "./chunk-X44IQ7M2.js";

// src/components/email/email-template.tsx
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text
} from "@react-email/components";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var EmailTemplate = ({
  classNames,
  action,
  baseUrl,
  content,
  heading,
  imageUrl,
  preview,
  siteName,
  variant = "vercel",
  url
}) => {
  baseUrl = baseUrl || process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;
  imageUrl = imageUrl || `${baseUrl}/apple-touch-icon.png`;
  siteName = siteName || process.env.SITE_NAME || process.env.NEXT_PUBLIC_SITE_NAME;
  preview = preview || (typeof heading === "string" ? heading : void 0);
  return /* @__PURE__ */ jsxs(Html, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("meta", { name: "x-apple-disable-message-reformatting" }),
      /* @__PURE__ */ jsx("meta", { content: "light dark", name: "color-scheme" }),
      /* @__PURE__ */ jsx("meta", { content: "light dark", name: "supported-color-schemes" }),
      /* @__PURE__ */ jsx("style", { type: "text/css", children: `
                        :root {
                            color-scheme: light dark;
                            supported-color-schemes: light dark;
                        }
                    ` }),
      /* @__PURE__ */ jsx("style", { type: "text/css", children: `      
                        html, body {
                            background-color: #ffffff;
                            color: #000000;
                        }

                        a {
                            color: #000000;
                        }

                        .border-color {
                            border-color: #eaeaea;
                        }

                        .action-button {
                            background-color: #000000 !important;
                            color: #ffffff !important;
                        }

                        @media (prefers-color-scheme: dark) {
                            html, body {
                                background-color: #000000 !important;
                                color: #ffffff !important;
                            }

                            a {
                                color: #ffffff;
                            }

                            .border-color {
                                border-color: #333333 !important;
                            }

                            .action-button {
                                background-color: rgb(38, 38, 38) !important;
                                color: #ffffff !important;
                            }
                        }
                    ` })
    ] }),
    preview && /* @__PURE__ */ jsx(Preview, { children: preview }),
    /* @__PURE__ */ jsx(Tailwind, { children: /* @__PURE__ */ jsx(
      Body,
      {
        className: cn(
          "mx-auto my-auto px-2 font-sans",
          classNames == null ? void 0 : classNames.body
        ),
        children: /* @__PURE__ */ jsxs(Container, { className: "mx-auto my-[40px] max-w-[465px] rounded border border-color border-solid p-[20px]", children: [
          /* @__PURE__ */ jsx(Section, { className: "mt-[32px]", children: /* @__PURE__ */ jsx(
            Img,
            {
              alt: siteName,
              className: cn(
                "mx-auto my-0 rounded-full",
                classNames == null ? void 0 : classNames.image
              ),
              height: "40",
              src: imageUrl,
              width: "40"
            }
          ) }),
          /* @__PURE__ */ jsx(
            Heading,
            {
              className: cn(
                "mx-0 my-[30px] p-0 text-center font-bold text-[24px]",
                classNames == null ? void 0 : classNames.heading
              ),
              children: heading
            }
          ),
          /* @__PURE__ */ jsx(
            Text,
            {
              className: cn(
                "text-[14px] leading-[24px]",
                classNames == null ? void 0 : classNames.content
              ),
              children: content
            }
          ),
          action && url && /* @__PURE__ */ jsx(Section, { className: "mt-[32px] mb-[32px] text-center", children: /* @__PURE__ */ jsx(
            Button,
            {
              className: cn(
                "action-button rounded px-5 py-3 text-center font-semibold text-[12px] no-underline",
                classNames == null ? void 0 : classNames.button
              ),
              href: url,
              children: action
            }
          ) }),
          /* @__PURE__ */ jsx(
            Hr,
            {
              className: cn(
                "mx-0 my-[26px] w-full border border-color border-solid",
                classNames == null ? void 0 : classNames.hr
              )
            }
          ),
          /* @__PURE__ */ jsxs(
            Text,
            {
              className: cn(
                "text-[#666666] text-[12px] leading-[24px]",
                classNames == null ? void 0 : classNames.footer
              ),
              children: [
                siteName && /* @__PURE__ */ jsxs(Fragment, { children: [
                  siteName,
                  " "
                ] }),
                baseUrl && /* @__PURE__ */ jsx(
                  Link,
                  {
                    className: cn(
                      "no-underline",
                      classNames == null ? void 0 : classNames.link
                    ),
                    href: baseUrl,
                    children: baseUrl == null ? void 0 : baseUrl.replace("https://", "").replace("http://", "")
                  }
                )
              ]
            }
          )
        ] })
      }
    ) })
  ] });
};

export {
  EmailTemplate
};
