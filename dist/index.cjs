"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }"use client"



var _chunkJOLFGV3Ucjs = require('./chunk-JOLFGV3U.cjs');










var _chunkZE6BT3OYcjs = require('./chunk-ZE6BT3OY.cjs');








var _chunkQB6CPTMTcjs = require('./chunk-QB6CPTMT.cjs');

// src/components/auth/auth-callback.tsx
var _lucidereact = require('lucide-react');
var _react = require('react');

// src/hooks/use-success-transition.ts







function useOnSuccessTransition({
  redirectTo: redirectToProp
}) {
  const { redirectTo: contextRedirectTo } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const getRedirectTo = _react.useCallback.call(void 0, 
    () => redirectToProp || _chunkQB6CPTMTcjs.getSearchParam.call(void 0, "redirectTo") || contextRedirectTo,
    [redirectToProp, contextRedirectTo]
  );
  const [isPending, startTransition] = _react.useTransition.call(void 0, );
  const [success, setSuccess] = _react.useState.call(void 0, false);
  const {
    navigate,
    hooks: { useSession },
    onSessionChange
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const { refetch: refetchSession } = useSession();
  _react.useEffect.call(void 0, () => {
    if (!success || isPending) return;
    startTransition(() => {
      navigate(getRedirectTo());
    });
  }, [success, isPending, navigate, getRedirectTo]);
  const onSuccess = _react.useCallback.call(void 0, async () => {
    await (refetchSession == null ? void 0 : refetchSession());
    setSuccess(true);
    if (onSessionChange) startTransition(onSessionChange);
  }, [refetchSession, onSessionChange]);
  return { onSuccess, isPending };
}

// src/components/auth/auth-callback.tsx
var _jsxruntime = require('react/jsx-runtime');
function AuthCallback({ redirectTo }) {
  const {
    hooks: { useIsRestoring },
    persistClient
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const isRestoring = useIsRestoring == null ? void 0 : useIsRestoring();
  const isRedirecting = _react.useRef.call(void 0, false);
  const { onSuccess } = useOnSuccessTransition({ redirectTo });
  _react.useEffect.call(void 0, () => {
    if (isRedirecting.current) return;
    if (!persistClient) {
      isRedirecting.current = true;
      onSuccess();
      return;
    }
    if (isRestoring) return;
    isRedirecting.current = true;
    onSuccess();
  }, [isRestoring, persistClient, onSuccess]);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" });
}

// src/components/auth/auth-card.tsx



// src/components/provider-icons.tsx

var AppleIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "path",
      {
        d: "M9.438 31.401a7 7 0 0 1-1.656-1.536a20 20 0 0 1-1.422-1.938a18.9 18.9 0 0 1-2.375-4.849c-.667-2-.99-3.917-.99-5.792c0-2.094.453-3.922 1.339-5.458a7.7 7.7 0 0 1 2.797-2.906a7.45 7.45 0 0 1 3.786-1.12q.705.002 1.51.198c.385.109.854.281 1.427.495c.729.281 1.13.453 1.266.495c.427.156.786.224 1.068.224c.214 0 .516-.068.859-.172c.193-.068.557-.188 1.078-.411c.516-.188.922-.349 1.245-.469c.495-.146.974-.281 1.401-.349a6.7 6.7 0 0 1 1.531-.063a9 9 0 0 1 2.589.557c1.359.547 2.458 1.401 3.276 2.615a6.4 6.4 0 0 0-.969.734a8.2 8.2 0 0 0-1.641 2.005a6.8 6.8 0 0 0-.859 3.359c.021 1.443.391 2.714 1.12 3.813a7.2 7.2 0 0 0 2.047 2.047c.417.281.776.474 1.12.604c-.161.5-.333.984-.536 1.464a19 19 0 0 1-1.667 3.083c-.578.839-1.031 1.464-1.375 1.88c-.536.635-1.052 1.12-1.573 1.458c-.573.38-1.25.583-1.938.583a4.4 4.4 0 0 1-1.38-.167c-.385-.13-.766-.271-1.141-.432a9 9 0 0 0-1.203-.453a6.3 6.3 0 0 0-3.099-.005c-.417.12-.818.26-1.214.432c-.557.234-.927.391-1.141.458c-.427.125-.87.203-1.318.229c-.693 0-1.339-.198-1.979-.599zm9.14-24.615c-.906.453-1.771.646-2.63.583c-.135-.865 0-1.75.359-2.719a7.3 7.3 0 0 1 1.333-2.24A7.1 7.1 0 0 1 19.812.733q1.319-.68 2.521-.734c.104.906 0 1.797-.333 2.76a8 8 0 0 1-1.333 2.344a6.8 6.8 0 0 1-2.115 1.682z",
        fill: "currentColor"
      }
    )
  }
);
var DiscordIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 256 199",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "path",
      {
        d: "M216.856 16.597A208.5 208.5 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046q-29.538-4.442-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.8 207.8 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161 161 0 0 0 79.735 175.3a136.4 136.4 0 0 1-21.846-10.632a109 109 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a132 132 0 0 0 5.355 4.237a136 136 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36M85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2s23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18m85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18",
        fill: "#5865f2"
      }
    )
  }
);
var DropboxIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 256 218",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "path",
      {
        d: "M63.995 0L0 40.771l63.995 40.772L128 40.771zM192 0l-64 40.775l64 40.775l64.001-40.775zM0 122.321l63.995 40.772L128 122.321L63.995 81.55zM192 81.55l-64 40.775l64 40.774l64-40.774zM64 176.771l64.005 40.772L192 176.771L128.005 136z",
        fill: "#0061ff"
      }
    )
  }
);
var FacebookIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445",
          fill: "#1877f2"
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z",
          fill: "#fff"
        }
      )
    ]
  }
);
var GitHubIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "path",
      {
        d: "M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
        fill: "currentColor"
      }
    )
  }
);
var GitLabIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 256 236",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "path", { d: "m128.075 236.075l47.104-144.97H80.97z", fill: "#e24329" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "path", { d: "M128.075 236.074L80.97 91.104H14.956z", fill: "#fc6d26" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M14.956 91.104L.642 135.16a9.75 9.75 0 0 0 3.542 10.903l123.891 90.012z",
          fill: "#fca326"
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0z",
          fill: "#e24329"
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "path", { d: "m128.075 236.074l47.104-144.97h66.015z", fill: "#fc6d26" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "m241.194 91.104l14.314 44.056a9.75 9.75 0 0 1-3.543 10.903l-123.89 90.012z",
          fill: "#fca326"
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0z",
          fill: "#e24329"
        }
      )
    ]
  }
);
var GoogleIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
          fill: "#4285f4"
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
          fill: "#34a853"
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z",
          fill: "#fbbc05"
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
          fill: "#eb4335"
        }
      )
    ]
  }
);
var KickIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "svg",
  {
    className,
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "path",
      {
        fill: "currentColor",
        d: "M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z"
      }
    )
  }
);
var LinkedInIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 128 128",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3",
          fill: "#0076b2"
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z",
          fill: "#fff"
        }
      )
    ]
  }
);
var MicrosoftIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "path", { d: "M121.666 121.666H0V0h121.666z", fill: "#f1511b" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "path", { d: "M256 121.666H134.335V0H256z", fill: "#80cc28" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "path", { d: "M121.663 256.002H0V134.336h121.663z", fill: "#00adef" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "path", { d: "M256 256.002H134.335V134.336H256z", fill: "#fbbc09" })
    ]
  }
);
var RedditIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "circle", { cx: "128", cy: "128", fill: "#ff4500", r: "128" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M213.15 129.22c0-10.376-8.391-18.617-18.617-18.617a18.74 18.74 0 0 0-12.97 5.189c-12.818-9.157-30.368-15.107-49.9-15.87l8.544-39.981l27.773 5.95c.307 7.02 6.104 12.667 13.278 12.667c7.324 0 13.275-5.95 13.275-13.278c0-7.324-5.95-13.275-13.275-13.275c-5.188 0-9.768 3.052-11.904 7.478l-30.976-6.562c-.916-.154-1.832 0-2.443.458c-.763.458-1.22 1.22-1.371 2.136l-9.464 44.558c-19.837.612-37.692 6.562-50.662 15.872a18.74 18.74 0 0 0-12.971-5.188c-10.377 0-18.617 8.391-18.617 18.617c0 7.629 4.577 14.037 10.988 16.939a33.6 33.6 0 0 0-.458 5.646c0 28.686 33.42 52.036 74.621 52.036c41.202 0 74.622-23.196 74.622-52.036a35 35 0 0 0-.458-5.646c6.408-2.902 10.985-9.464 10.985-17.093M85.272 142.495c0-7.324 5.95-13.275 13.278-13.275c7.324 0 13.275 5.95 13.275 13.275s-5.95 13.278-13.275 13.278c-7.327.15-13.278-5.953-13.278-13.278m74.317 35.251c-9.156 9.157-26.553 9.768-31.588 9.768c-5.188 0-22.584-.765-31.59-9.768c-1.371-1.373-1.371-3.51 0-4.883c1.374-1.371 3.51-1.371 4.884 0c5.8 5.8 18.008 7.782 26.706 7.782s21.058-1.983 26.704-7.782c1.374-1.371 3.51-1.371 4.884 0c1.22 1.373 1.22 3.51 0 4.883m-2.443-21.822c-7.325 0-13.275-5.95-13.275-13.275s5.95-13.275 13.275-13.275c7.327 0 13.277 5.95 13.277 13.275c0 7.17-5.95 13.275-13.277 13.275",
          fill: "#fff"
        }
      )
    ]
  }
);
var RobloxIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "path",
      {
        d: "M18.926 23.998L0 18.892L5.075.002L24 5.108ZM15.348 10.09l-5.282-1.453l-1.414 5.273l5.282 1.453z",
        fill: "currentColor"
      }
    )
  }
);
var SpotifyIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "path",
      {
        d: "M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.98 7.98 0 0 1-9.552-6.007a7.97 7.97 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975m15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187z",
        fill: "#1ed760"
      }
    )
  }
);
var TikTokIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 256 290",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9",
          fill: "#ff004f"
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "path", { d: "M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "path",
        {
          d: "M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833",
          fill: "#00f2ea"
        }
      )
    ]
  }
);
var TwitchIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
  "svg",
  {
    className,
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 2400 2800",
    x: "0px",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    y: "0px",
    children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "style", { type: "text/css", children: `
                .st0{fill:#FFFFFF}
                .st1{fill:#9146FF}
            ` }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "title", { children: "Asset 2" }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "g", { children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "polygon",
          {
            className: "st0",
            points: "2200,1300 1800,1700 1400,1700 1050,2050 1050,1700 600,1700 600,200 2200,200"
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "g", { children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "g", { id: "Layer_1-2", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "path",
            {
              className: "st1",
              d: "M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600V1300z"
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "rect",
            {
              className: "st1",
              height: "600",
              width: "200",
              x: "1700",
              y: "550"
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "rect",
            {
              className: "st1",
              height: "600",
              width: "200",
              x: "1150",
              y: "550"
            }
          )
        ] }) })
      ] })
    ]
  }
);
var VKIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 576 512",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "path",
      {
        d: "M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7c0 0-30 73.1-72.4 120.5c-13.7 13.7-20 18.1-27.5 18.1c-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5c0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5c-20 0-68.6-73.4-97.4-157.4c-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7c0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9c0-66.8-3.4-73.1 15.4-73.1c8.7 0 23.7 4.4 58.7 38.1c40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25c-11.2-34.9-86.9-106.7-90.3-111.5c-8.7-11.2-6.2-16.2 0-26.2c.1-.1 72-101.3 79.4-135.6",
        fill: "currentColor"
      }
    )
  }
);
var XIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "svg",
  {
    className,
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "path",
      {
        d: "M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z",
        fill: "currentColor"
      }
    )
  }
);
var ZoomIcon = ({ className }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
  "svg",
  {
    className,
    xmlns: "http://www.w3.org/2000/svg",
    width: 512,
    height: 117,
    viewBox: "0 0 512 117",
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "path",
      {
        fill: "#0b5cff",
        d: "M107.472 114.706H16.348c-5.968 0-11.791-3.203-14.557-8.589C-1.41 99.858-.247 92.434 4.702 87.63L68.17 24.164H22.607C10.088 24.164.044 13.974.044 1.6h83.992c5.968 0 11.79 3.203 14.556 8.589c3.203 6.259 2.038 13.683-2.911 18.486L32.214 92.143h52.55c12.518 0 22.708 10.19 22.708 22.563M468.183 0c-13.1 0-24.746 5.677-32.898 14.702C427.134 5.677 415.488 0 402.388 0c-24.164 0-43.961 20.67-43.961 44.834v69.872c12.518 0 22.562-10.19 22.562-22.563V44.689c0-11.646 9.025-21.544 20.67-21.98c12.228-.437 22.272 9.315 22.272 21.397v48.037c0 12.519 10.19 22.563 22.563 22.563V44.543c0-11.645 9.025-21.544 20.67-21.98c12.228-.437 22.272 9.316 22.272 21.398v48.036c0 12.52 10.19 22.563 22.563 22.563V44.69C512.144 20.67 492.347 0 468.183 0M221.595 58.226c0 32.17-26.056 58.226-58.226 58.226s-58.226-26.056-58.226-58.226S131.199 0 163.369 0s58.226 26.056 58.226 58.226m-22.563 0c0-19.651-16.012-35.663-35.663-35.663s-35.664 16.012-35.664 35.663c0 19.652 16.013 35.664 35.664 35.664s35.663-16.012 35.663-35.664m148.04 0c0 32.17-26.056 58.226-58.226 58.226S230.62 90.396 230.62 58.226S256.676 0 288.846 0s58.227 26.056 58.227 58.226m-22.562 0c0-19.651-16.012-35.663-35.664-35.663c-19.65 0-35.663 16.012-35.663 35.663c0 19.652 16.012 35.664 35.663 35.664c19.652 0 35.664-16.012 35.664-35.664"
      }
    )
  }
);

// src/lib/social-providers.ts
var socialProviders = [
  {
    provider: "apple",
    name: "Apple",
    icon: AppleIcon
  },
  {
    provider: "discord",
    name: "Discord",
    icon: DiscordIcon
  },
  {
    provider: "dropbox",
    name: "Dropbox",
    icon: DropboxIcon
  },
  {
    provider: "facebook",
    name: "Facebook",
    icon: FacebookIcon
  },
  {
    provider: "github",
    name: "GitHub",
    icon: GitHubIcon
  },
  {
    provider: "gitlab",
    name: "GitLab",
    icon: GitLabIcon
  },
  {
    provider: "google",
    name: "Google",
    icon: GoogleIcon
  },
  {
    provider: "kick",
    name: "Kick",
    icon: KickIcon
  },
  {
    provider: "linkedin",
    name: "LinkedIn",
    icon: LinkedInIcon
  },
  {
    provider: "microsoft",
    name: "Microsoft",
    icon: MicrosoftIcon
  },
  {
    provider: "reddit",
    name: "Reddit",
    icon: RedditIcon
  },
  {
    provider: "roblox",
    name: "Roblox",
    icon: RobloxIcon
  },
  {
    provider: "spotify",
    name: "Spotify",
    icon: SpotifyIcon
  },
  {
    provider: "tiktok",
    name: "TikTok",
    icon: TikTokIcon
  },
  {
    provider: "twitch",
    name: "Twitch",
    icon: TwitchIcon
  },
  {
    provider: "vk",
    name: "VK",
    icon: VKIcon
  },
  {
    provider: "twitter",
    name: "X",
    icon: XIcon
  },
  {
    provider: "zoom",
    name: "Zoom",
    icon: ZoomIcon
  }
];

// src/components/organization/accept-invitation-card.tsx



// src/hooks/use-authenticate.ts

function useAuthenticate(options) {
  const { authView = "SIGN_IN", enabled = true } = _nullishCoalesce(options, () => ( {}));
  const {
    hooks: { useSession },
    basePath,
    viewPaths,
    replace
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const { data, isPending, error, refetch } = useSession();
  const sessionData = data;
  _react.useEffect.call(void 0, () => {
    if (!enabled || isPending || sessionData) return;
    replace(
      `${basePath}/${viewPaths[authView]}?redirectTo=${window.location.href.replace(window.location.origin, "")}`
    );
  }, [
    isPending,
    sessionData,
    basePath,
    viewPaths,
    replace,
    authView,
    enabled
  ]);
  return {
    data: sessionData,
    user: sessionData == null ? void 0 : sessionData.user,
    isPending,
    error,
    refetch
  };
}

// src/components/organization/organization-view.tsx


// src/components/organization/organization-logo.tsx



function OrganizationLogo({
  className,
  classNames,
  isPending,
  size,
  organization,
  localization: propLocalization,
  ...props
}) {
  const {
    components: { Avatar, AvatarFallback, AvatarImage, Skeleton },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...propLocalization };
  const name = organization == null ? void 0 : organization.name;
  const src = organization == null ? void 0 : organization.logo;
  if (isPending) {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      Skeleton,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "shrink-0 rounded-full",
          size === "sm" ? "size-6" : size === "lg" ? "size-10" : size === "xl" ? "size-12" : "size-8",
          className,
          classNames == null ? void 0 : classNames.base,
          classNames == null ? void 0 : classNames.skeleton
        )
      }
    );
  }
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Avatar,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "bg-muted",
        size === "sm" ? "size-6" : size === "lg" ? "size-10" : size === "xl" ? "size-12" : "size-8",
        className,
        classNames == null ? void 0 : classNames.base
      ),
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          AvatarImage,
          {
            alt: name || (localization == null ? void 0 : localization.ORGANIZATION),
            className: classNames == null ? void 0 : classNames.image,
            src: src || void 0
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          AvatarFallback,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-foreground", classNames == null ? void 0 : classNames.fallback),
            delayMs: src ? 600 : void 0,
            children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              _lucidereact.BuildingIcon,
              {
                className: _chunkQB6CPTMTcjs.cn.call(void 0, "size-[50%]", classNames == null ? void 0 : classNames.fallbackIcon)
              }
            )
          }
        )
      ]
    }
  );
}

// src/components/organization/organization-view.tsx

function OrganizationView({
  className,
  classNames,
  isPending,
  size,
  organization,
  localization: propLocalization
}) {
  const {
    components: { Skeleton },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...propLocalization };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex items-center gap-2 truncate",
        className,
        classNames == null ? void 0 : classNames.base
      ),
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          OrganizationLogo,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, size !== "sm" && "my-0.5"),
            classNames: classNames == null ? void 0 : classNames.avatar,
            isPending,
            localization,
            organization,
            size
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "div",
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "flex flex-col truncate text-left leading-tight",
              classNames == null ? void 0 : classNames.content
            ),
            children: isPending ? /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Skeleton,
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "max-w-full",
                    size === "lg" ? "h-4.5 w-32" : "h-3.5 w-24",
                    classNames == null ? void 0 : classNames.title,
                    classNames == null ? void 0 : classNames.skeleton
                  )
                }
              ),
              size !== "sm" && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Skeleton,
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "mt-1.5 max-w-full",
                    size === "lg" ? "h-3.5 w-24" : "h-3 w-16",
                    classNames == null ? void 0 : classNames.subtitle,
                    classNames == null ? void 0 : classNames.skeleton
                  )
                }
              )
            ] }) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                "span",
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "truncate font-semibold",
                    size === "lg" ? "text-base" : "text-sm",
                    classNames == null ? void 0 : classNames.title
                  ),
                  children: (organization == null ? void 0 : organization.name) || (localization == null ? void 0 : localization.ORGANIZATION)
                }
              ),
              size !== "sm" && (organization == null ? void 0 : organization.slug) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                "span",
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "truncate opacity-70",
                    size === "lg" ? "text-sm" : "text-xs",
                    classNames == null ? void 0 : classNames.subtitle
                  ),
                  children: organization.slug
                }
              )
            ] })
          }
        )
      ]
    }
  );
}

// src/components/organization/accept-invitation-card.tsx

function AcceptInvitationCard({
  className,
  classNames,
  localization: localizationProp
}) {
  const {
    hooks: { useSession },
    localization: contextLocalization,
    toast,
    redirectTo,
    replace
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = _react.useMemo.call(void 0, 
    () => ({ ...contextLocalization, ...localizationProp }),
    [contextLocalization, localizationProp]
  );
  const { data: sessionData } = useSession();
  const [invitationId, setInvitationId] = _react.useState.call(void 0, null);
  _react.useEffect.call(void 0, () => {
    const invitationIdParam = _chunkQB6CPTMTcjs.getSearchParam.call(void 0, "invitationId");
    if (!invitationIdParam) {
      toast({
        variant: "error",
        message: localization.INVITATION_NOT_FOUND
      });
      replace(redirectTo);
      return;
    }
    setInvitationId(invitationIdParam);
  }, [localization.INVITATION_NOT_FOUND, toast, replace, redirectTo]);
  useAuthenticate();
  if (!sessionData || !invitationId) {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      AcceptInvitationSkeleton,
      {
        className,
        classNames
      }
    );
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    AcceptInvitationContent,
    {
      className,
      classNames,
      localization,
      invitationId
    }
  );
}
function AcceptInvitationContent({
  className,
  classNames,
  localization: localizationProp,
  invitationId
}) {
  var _a;
  const {
    authClient,
    components: {
      Button,
      Card,
      CardContent,
      CardDescription,
      CardHeader,
      CardTitle
    },
    localization: contextLocalization,
    toast,
    redirectTo,
    replace,
    organization,
    hooks: { useInvitation }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = _react.useMemo.call(void 0, 
    () => ({ ...contextLocalization, ...localizationProp }),
    [contextLocalization, localizationProp]
  );
  const [isRejecting, setIsRejecting] = _react.useState.call(void 0, false);
  const [isAccepting, setIsAccepting] = _react.useState.call(void 0, false);
  const isProcessing = isRejecting || isAccepting;
  const { data: invitation, isPending } = useInvitation({
    query: {
      id: invitationId
    }
  });
  _react.useEffect.call(void 0, () => {
    if (isPending || !invitationId) return;
    if (!invitation) {
      toast({
        variant: "error",
        message: localization.INVITATION_NOT_FOUND
      });
      replace(redirectTo);
      return;
    }
    if (invitation.status !== "pending" || new Date(invitation.expiresAt) < /* @__PURE__ */ new Date()) {
      toast({
        variant: "error",
        message: new Date(invitation.expiresAt) < /* @__PURE__ */ new Date() ? localization.INVITATION_EXPIRED : localization.INVITATION_NOT_FOUND
      });
      replace(redirectTo);
    }
  }, [
    invitation,
    isPending,
    invitationId,
    localization,
    toast,
    replace,
    redirectTo
  ]);
  const acceptInvitation = async () => {
    if (!invitationId) return;
    setIsAccepting(true);
    try {
      await authClient.organization.acceptInvitation({
        invitationId,
        fetchOptions: { throw: true }
      });
      toast({
        variant: "success",
        message: localization.INVITATION_ACCEPTED || "Invitation accepted"
      });
      replace(redirectTo);
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      setIsAccepting(false);
    }
  };
  const rejectInvitation = async () => {
    if (!invitationId) return;
    setIsRejecting(true);
    try {
      await authClient.organization.rejectInvitation({
        invitationId,
        fetchOptions: { throw: true }
      });
      toast({
        variant: "success",
        message: localization.INVITATION_REJECTED
      });
      replace(redirectTo);
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      setIsRejecting(false);
    }
  };
  const builtInRoles = [
    { role: "owner", label: localization.OWNER },
    { role: "admin", label: localization.ADMIN },
    { role: "member", label: localization.MEMBER }
  ];
  const roles = [...builtInRoles, ...(organization == null ? void 0 : organization.customRoles) || []];
  const roleLabel = ((_a = roles.find((r) => r.role === (invitation == null ? void 0 : invitation.role))) == null ? void 0 : _a.label) || (invitation == null ? void 0 : invitation.role);
  if (isPending)
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      AcceptInvitationSkeleton,
      {
        className,
        classNames
      }
    );
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Card, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "w-full max-w-sm", className, classNames == null ? void 0 : classNames.base), children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      CardHeader,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "justify-items-center text-center",
          classNames == null ? void 0 : classNames.header
        ),
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            CardTitle,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
              children: localization.ACCEPT_INVITATION
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            CardDescription,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-xs md:text-sm",
                classNames == null ? void 0 : classNames.description
              ),
              children: localization.ACCEPT_INVITATION_DESCRIPTION
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      CardContent,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "flex flex-col gap-6 truncate",
          classNames == null ? void 0 : classNames.content
        ),
        children: [
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Card, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "flex-row items-center p-4"), children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              OrganizationView,
              {
                organization: invitation ? {
                  id: invitation.organizationId,
                  name: invitation.organizationName,
                  slug: invitation.organizationSlug,
                  logo: invitation.organizationLogo,
                  createdAt: /* @__PURE__ */ new Date()
                } : null,
                localization
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "ml-auto text-muted-foreground text-sm", children: roleLabel })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              Button,
              {
                variant: "outline",
                className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                  classNames == null ? void 0 : classNames.button,
                  classNames == null ? void 0 : classNames.outlineButton
                ),
                onClick: rejectInvitation,
                disabled: isProcessing,
                children: [
                  isRejecting ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.XIcon, {}),
                  localization.REJECT
                ]
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              Button,
              {
                className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                  classNames == null ? void 0 : classNames.button,
                  classNames == null ? void 0 : classNames.primaryButton
                ),
                onClick: acceptInvitation,
                disabled: isProcessing,
                children: [
                  isAccepting ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.CheckIcon, {}),
                  localization.ACCEPT
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
var AcceptInvitationSkeleton = ({
  className,
  classNames,
  localization
}) => {
  const {
    components: { Card, CardContent, CardHeader, Skeleton }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Card, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "w-full max-w-sm", className, classNames == null ? void 0 : classNames.base), children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      CardHeader,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, "justify-items-center", classNames == null ? void 0 : classNames.header),
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Skeleton,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "my-1 h-5 w-full max-w-32 md:h-5.5 md:w-40",
                classNames == null ? void 0 : classNames.skeleton
              )
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Skeleton,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "my-0.5 h-3 w-full max-w-56 md:h-3.5 md:w-64",
                classNames == null ? void 0 : classNames.skeleton
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      CardContent,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "flex flex-col gap-6 truncate",
          classNames == null ? void 0 : classNames.content
        ),
        children: [
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Card, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "flex-row items-center p-4"), children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, OrganizationView, { isPending: true, localization }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Skeleton, { className: "mt-0.5 ml-auto h-4 w-full max-w-14 shrink-2" })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Skeleton, { className: "h-9 w-full" }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Skeleton, { className: "h-9 w-full" })
          ] })
        ]
      }
    )
  ] });
};

// src/components/settings/settings-cards.tsx



// src/components/organization/organization-invitations-card.tsx


// src/components/settings/shared/settings-card.tsx


// src/components/settings/shared/settings-card-footer.tsx


// src/components/settings/shared/settings-action-button.tsx


var _reacthookform = require('react-hook-form');

function SettingsActionButton({
  classNames,
  actionLabel,
  disabled,
  isSubmitting,
  variant,
  onClick,
  ...props
}) {
  const {
    components: { Button }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  if (!onClick) {
    const formState = _reacthookform.useFormState.call(void 0, );
    isSubmitting = formState.isSubmitting;
  }
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Button,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "md:ms-auto",
        classNames == null ? void 0 : classNames.button,
        variant === "default" && (classNames == null ? void 0 : classNames.primaryButton),
        variant === "destructive" && (classNames == null ? void 0 : classNames.destructiveButton)
      ),
      disabled: isSubmitting || disabled,
      size: "sm",
      type: onClick ? "button" : "submit",
      variant,
      onClick,
      ...props,
      children: [
        isSubmitting && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
        actionLabel
      ]
    }
  );
}

// src/components/settings/shared/settings-card-footer.tsx

function SettingsCardFooter({
  className,
  classNames,
  actionLabel,
  disabled,
  instructions,
  isPending,
  isSubmitting,
  variant,
  action
}) {
  const {
    components: { CardDescription, CardFooter, Skeleton }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    CardFooter,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex flex-col justify-between gap-4 rounded-b-xl md:flex-row",
        (actionLabel || instructions) && "!py-4 border-t",
        variant === "destructive" ? "border-destructive/30 bg-destructive/15" : "bg-sidebar",
        className,
        classNames == null ? void 0 : classNames.footer
      ),
      children: isPending ? /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
        instructions && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Skeleton,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "my-0.5 h-3 w-48 max-w-full md:h-4 md:w-56",
              classNames == null ? void 0 : classNames.skeleton
            )
          }
        ),
        actionLabel && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Skeleton,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "h-8 w-14 md:ms-auto",
              classNames == null ? void 0 : classNames.skeleton
            )
          }
        )
      ] }) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
        instructions && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          CardDescription,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "text-center text-muted-foreground text-xs md:text-start md:text-sm",
              classNames == null ? void 0 : classNames.instructions
            ),
            children: instructions
          }
        ),
        actionLabel && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          SettingsActionButton,
          {
            classNames,
            actionLabel,
            disabled,
            isSubmitting,
            variant,
            onClick: action
          }
        )
      ] })
    }
  );
}

// src/components/settings/shared/settings-card-header.tsx


function SettingsCardHeader({
  className,
  classNames,
  description,
  isPending,
  title
}) {
  const {
    components: { CardDescription, CardHeader, CardTitle, Skeleton }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardHeader, { className: _chunkQB6CPTMTcjs.cn.call(void 0, classNames == null ? void 0 : classNames.header, className), children: isPending ? /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      Skeleton,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "my-0.5 h-5 w-1/3 md:h-5.5",
          classNames == null ? void 0 : classNames.skeleton
        )
      }
    ),
    description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      Skeleton,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "mt-1.5 mb-0.5 h-3 w-2/3 md:h-3.5",
          classNames == null ? void 0 : classNames.skeleton
        )
      }
    )
  ] }) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      CardTitle,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
        children: title
      }
    ),
    description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      CardDescription,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "text-xs md:text-sm",
          classNames == null ? void 0 : classNames.description
        ),
        children: description
      }
    )
  ] }) });
}

// src/components/settings/shared/settings-card.tsx

function SettingsCard({
  children,
  className,
  classNames,
  title,
  description,
  instructions,
  actionLabel,
  disabled,
  isPending,
  isSubmitting,
  optimistic,
  variant,
  action,
  ...props
}) {
  const {
    components: { Card }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Card,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "w-full pb-0 text-start",
        variant === "destructive" && "border-destructive/40",
        className,
        classNames == null ? void 0 : classNames.base
      ),
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          SettingsCardHeader,
          {
            classNames,
            description,
            isPending,
            title
          }
        ),
        children,
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          SettingsCardFooter,
          {
            classNames,
            actionLabel,
            disabled,
            isPending,
            isSubmitting,
            instructions,
            optimistic,
            variant,
            action
          }
        )
      ]
    }
  );
}

// src/components/organization/invitation-cell.tsx



// src/components/user-avatar.tsx



// src/lib/gravatar-utils.ts
var _jssha256 = require('js-sha256');
function getGravatarUrl(email, options) {
  if (!email) return null;
  try {
    const normalizedEmail = email.trim().toLowerCase();
    const hash = _jssha256.sha256.call(void 0, normalizedEmail);
    const extension = (options == null ? void 0 : options.jpg) ? ".jpg" : "";
    let url = `https://gravatar.com/avatar/${hash}${extension}`;
    const params = new URLSearchParams();
    if (options == null ? void 0 : options.size) {
      params.append(
        "s",
        Math.min(Math.max(options.size, 1), 2048).toString()
      );
    }
    if (options == null ? void 0 : options.d) {
      params.append("d", options.d);
    }
    if (options == null ? void 0 : options.forceDefault) {
      params.append("f", "y");
    }
    const queryString = params.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
    return url;
  } catch (error) {
    console.error("Error generating Gravatar URL:", error);
    return null;
  }
}

// src/components/user-avatar.tsx

function UserAvatar({
  className,
  classNames,
  isPending,
  size,
  user,
  localization: propLocalization,
  ...props
}) {
  const {
    localization: contextLocalization,
    gravatar,
    components: { Avatar, AvatarFallback, AvatarImage, Skeleton }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...propLocalization };
  const name = (user == null ? void 0 : user.displayUsername) || (user == null ? void 0 : user.username) || (user == null ? void 0 : user.displayName) || (user == null ? void 0 : user.firstName) || (user == null ? void 0 : user.name) || (user == null ? void 0 : user.fullName) || (user == null ? void 0 : user.email);
  const userImage = (user == null ? void 0 : user.image) || (user == null ? void 0 : user.avatar) || (user == null ? void 0 : user.avatarUrl);
  const gravatarUrl = gravatar && (user == null ? void 0 : user.email) ? getGravatarUrl(
    user.email,
    gravatar === true ? void 0 : gravatar
  ) : null;
  const src = gravatar ? gravatarUrl : userImage;
  if (isPending) {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      Skeleton,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "shrink-0 rounded-full",
          size === "sm" ? "size-6" : size === "lg" ? "size-10" : size === "xl" ? "size-12" : "size-8",
          className,
          classNames == null ? void 0 : classNames.base,
          classNames == null ? void 0 : classNames.skeleton
        )
      }
    );
  }
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Avatar,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "bg-muted",
        size === "sm" ? "size-6" : size === "lg" ? "size-10" : size === "xl" ? "size-12" : "size-8",
        className,
        classNames == null ? void 0 : classNames.base
      ),
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          AvatarImage,
          {
            alt: name || (localization == null ? void 0 : localization.USER),
            className: classNames == null ? void 0 : classNames.image,
            src: src || void 0
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          AvatarFallback,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "text-foreground uppercase",
              classNames == null ? void 0 : classNames.fallback
            ),
            delayMs: src ? 600 : void 0,
            children: firstTwoCharacters(name) || /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              _lucidereact.UserRoundIcon,
              {
                className: _chunkQB6CPTMTcjs.cn.call(void 0, "size-[50%]", classNames == null ? void 0 : classNames.fallbackIcon)
              }
            )
          }
        )
      ]
    }
  );
}
var firstTwoCharacters = (name) => name == null ? void 0 : name.slice(0, 2);

// src/components/organization/invitation-cell.tsx

function InvitationCell({
  className,
  classNames,
  invitation,
  localization: localizationProp
}) {
  const {
    authClient,
    components: {
      Button,
      Card,
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger
    },
    organization,
    hooks: { useActiveOrganization },
    localization: contextLocalization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const [isLoading, setIsLoading] = _react.useState.call(void 0, false);
  const { refetch } = useActiveOrganization();
  const builtInRoles = [
    { role: "owner", label: localization.OWNER },
    { role: "admin", label: localization.ADMIN },
    { role: "member", label: localization.MEMBER }
  ];
  const roles = [...builtInRoles, ...(organization == null ? void 0 : organization.customRoles) || []];
  const role = roles.find((r) => r.role === invitation.role);
  const handleCancelInvitation = async () => {
    setIsLoading(true);
    try {
      await authClient.organization.cancelInvitation({
        invitationId: invitation.id,
        fetchOptions: { throw: true }
      });
      await (refetch == null ? void 0 : refetch());
      toast({
        variant: "success",
        message: localization.INVITATION_CANCELLED
      });
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setIsLoading(false);
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Card,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex-row items-center p-4",
        className,
        classNames == null ? void 0 : classNames.cell
      ),
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex flex-1 items-center gap-2", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            UserAvatar,
            {
              className: "my-0.5",
              user: { email: invitation.email },
              localization
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "grid flex-1 text-left leading-tight", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "truncate font-semibold text-sm", children: invitation.email }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: "truncate text-muted-foreground text-xs", children: [
              localization.EXPIRES,
              " ",
              invitation.expiresAt.toLocaleDateString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "truncate text-sm opacity-70", children: role == null ? void 0 : role.label }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenu, { children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "relative ms-auto",
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.outlineButton
              ),
              disabled: isLoading,
              size: "icon",
              type: "button",
              variant: "outline",
              children: isLoading ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.EllipsisIcon, { className: classNames == null ? void 0 : classNames.icon })
            }
          ) }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DropdownMenuContent,
            {
              onCloseAutoFocus: (e) => e.preventDefault(),
              children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                DropdownMenuItem,
                {
                  onClick: handleCancelInvitation,
                  disabled: isLoading,
                  variant: "destructive",
                  children: [
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.XIcon, { className: classNames == null ? void 0 : classNames.icon }),
                    localization.CANCEL_INVITATION
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}

// src/components/organization/organization-invitations-card.tsx

function OrganizationInvitationsCard({
  className,
  classNames,
  localization: localizationProp,
  ...props
}) {
  const {
    components: { CardContent },
    hooks: { useActiveOrganization },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const { data: activeOrganization } = useActiveOrganization();
  const invitations = activeOrganization == null ? void 0 : activeOrganization.invitations;
  const pendingInvitations = invitations == null ? void 0 : invitations.filter(
    (invitation) => invitation.status === "pending"
  );
  const isPending = !activeOrganization;
  if (!(pendingInvitations == null ? void 0 : pendingInvitations.length)) return null;
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SettingsCard,
    {
      className,
      classNames,
      title: localization.PENDING_INVITATIONS,
      description: localization.PENDING_INVITATIONS_DESCRIPTION,
      isPending,
      ...props,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardContent, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid gap-4", classNames == null ? void 0 : classNames.content), children: pendingInvitations.map((invitation) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        InvitationCell,
        {
          classNames,
          invitation,
          localization
        },
        invitation.id
      )) })
    }
  );
}

// src/components/organization/organization-members-card.tsx


// src/components/organization/invite-member-dialog.tsx
var _zod = require('@hookform/resolvers/zod');



var _zod3 = require('zod'); var z = _interopRequireWildcard(_zod3); var z2 = _interopRequireWildcard(_zod3); var z3 = _interopRequireWildcard(_zod3); var z4 = _interopRequireWildcard(_zod3); var z5 = _interopRequireWildcard(_zod3); var z6 = _interopRequireWildcard(_zod3); var z7 = _interopRequireWildcard(_zod3); var z8 = _interopRequireWildcard(_zod3); var z9 = _interopRequireWildcard(_zod3); var z10 = _interopRequireWildcard(_zod3); var z11 = _interopRequireWildcard(_zod3); var z12 = _interopRequireWildcard(_zod3); var z13 = _interopRequireWildcard(_zod3); var z14 = _interopRequireWildcard(_zod3); var z15 = _interopRequireWildcard(_zod3); var z16 = _interopRequireWildcard(_zod3); var z17 = _interopRequireWildcard(_zod3); var z18 = _interopRequireWildcard(_zod3); var z19 = _interopRequireWildcard(_zod3);

function InviteMemberDialog({
  classNames,
  localization: localizationProp,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    authClient,
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input,
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue
    },
    hooks: { useActiveOrganization, useSession },
    localization: contextLocalization,
    toast,
    organization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const { data: activeOrganization, refetch: refetchActiveOrganization } = useActiveOrganization();
  const { data: sessionData } = useSession();
  const membership = activeOrganization == null ? void 0 : activeOrganization.members.find(
    (m) => m.userId === (sessionData == null ? void 0 : sessionData.user.id)
  );
  const builtInRoles = [
    { role: "owner", label: localization.OWNER },
    { role: "admin", label: localization.ADMIN },
    { role: "member", label: localization.MEMBER }
  ];
  const roles = [...builtInRoles, ...(organization == null ? void 0 : organization.customRoles) || []];
  const availableRoles = roles.filter(
    (role) => (membership == null ? void 0 : membership.role) === "owner" || role.role !== "owner"
  );
  const formSchema = z.object({
    email: z.string().min(1, { message: localization.EMAIL_REQUIRED }).email({
      message: localization.INVALID_EMAIL
    }),
    role: z.string().min(1, {
      message: `${localization.ROLE} ${localization.IS_REQUIRED}`
    })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      email: "",
      role: "member"
    }
  });
  const isSubmitting = form.formState.isSubmitting;
  async function onSubmit({ email, role }) {
    try {
      await authClient.organization.inviteMember({
        email,
        role,
        organizationId: activeOrganization == null ? void 0 : activeOrganization.id,
        fetchOptions: { throw: true }
      });
      await (refetchActiveOrganization == null ? void 0 : refetchActiveOrganization());
      onOpenChange == null ? void 0 : onOpenChange(false);
      form.reset();
      toast({
        variant: "success",
        message: localization.SEND_INVITATION_SUCCESS || "Invitation sent successfully"
      });
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogContent, { className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content, children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        DialogTitle,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
          children: localization.INVITE_MEMBER
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        DialogDescription,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
            "text-xs md:text-sm",
            classNames == null ? void 0 : classNames.description
          ),
          children: localization.INVITE_MEMBER_DESCRIPTION
        }
      )
    ] }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "form",
      {
        onSubmit: form.handleSubmit(onSubmit),
        className: "space-y-6",
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            FormField,
            {
              control: form.control,
              name: "email",
              render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.EMAIL }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Input,
                  {
                    placeholder: localization.EMAIL_PLACEHOLDER,
                    type: "email",
                    ...field,
                    className: classNames == null ? void 0 : classNames.input
                  }
                ) }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            FormField,
            {
              control: form.control,
              name: "role",
              render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.ROLE }),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                  Select,
                  {
                    onValueChange: field.onChange,
                    defaultValue: field.value,
                    children: [
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectTrigger, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectValue, {}) }) }),
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectContent, { children: availableRoles.map((role) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                        SelectItem,
                        {
                          value: role.role,
                          children: role.label
                        },
                        role.role
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
                className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                  classNames == null ? void 0 : classNames.button,
                  classNames == null ? void 0 : classNames.outlineButton
                ),
                children: localization.CANCEL
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              Button,
              {
                type: "submit",
                className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                  classNames == null ? void 0 : classNames.button,
                  classNames == null ? void 0 : classNames.primaryButton
                ),
                disabled: isSubmitting,
                children: [
                  isSubmitting && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                  localization.SEND_INVITATION
                ]
              }
            )
          ] })
        ]
      }
    ) })
  ] }) });
}

// src/components/organization/member-cell.tsx



// src/components/user-view.tsx


function UserView({
  className,
  classNames,
  isPending,
  size,
  user,
  localization: propLocalization
}) {
  const {
    localization: contextLocalization,
    components: { Skeleton }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = _react.useMemo.call(void 0, 
    () => ({ ...contextLocalization, ...propLocalization }),
    [contextLocalization, propLocalization]
  );
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex items-center gap-2",
        className,
        classNames == null ? void 0 : classNames.base
      ),
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          UserAvatar,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, size !== "sm" && "my-0.5"),
            classNames: classNames == null ? void 0 : classNames.avatar,
            isPending,
            size,
            user,
            localization
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "div",
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "grid flex-1 text-left leading-tight",
              classNames == null ? void 0 : classNames.content
            ),
            children: isPending ? /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Skeleton,
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "max-w-full",
                    size === "lg" ? "h-4.5 w-32" : "h-3.5 w-24",
                    classNames == null ? void 0 : classNames.title,
                    classNames == null ? void 0 : classNames.skeleton
                  )
                }
              ),
              size !== "sm" && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Skeleton,
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "mt-1.5 max-w-full",
                    size === "lg" ? "h-3.5 w-40" : "h-3 w-32",
                    classNames == null ? void 0 : classNames.subtitle,
                    classNames == null ? void 0 : classNames.skeleton
                  )
                }
              )
            ] }) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                "span",
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "truncate font-semibold",
                    size === "lg" ? "text-base" : "text-sm",
                    classNames == null ? void 0 : classNames.title
                  ),
                  children: (user == null ? void 0 : user.displayUsername) || (user == null ? void 0 : user.username) || (user == null ? void 0 : user.displayName) || (user == null ? void 0 : user.firstName) || (user == null ? void 0 : user.name) || (user == null ? void 0 : user.fullName) || (user == null ? void 0 : user.email) || (localization == null ? void 0 : localization.USER)
                }
              ),
              !(user == null ? void 0 : user.isAnonymous) && size !== "sm" && ((user == null ? void 0 : user.name) || (user == null ? void 0 : user.username)) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                "span",
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "truncate opacity-70",
                    size === "lg" ? "text-sm" : "text-xs",
                    classNames == null ? void 0 : classNames.subtitle
                  ),
                  children: user == null ? void 0 : user.email
                }
              )
            ] })
          }
        )
      ]
    }
  );
}

// src/components/organization/remove-member-dialog.tsx



function RemoveMemberDialog({
  member,
  classNames,
  localization: localizationProp,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    authClient,
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle
    },
    hooks: { useActiveOrganization },
    localization: contextLocalization,
    toast,
    organization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const { refetch } = useActiveOrganization();
  const builtInRoles = [
    { role: "owner", label: localization.OWNER },
    { role: "admin", label: localization.ADMIN },
    { role: "member", label: localization.MEMBER }
  ];
  const roles = [...builtInRoles, ...(organization == null ? void 0 : organization.customRoles) || []];
  const role = roles.find((r) => r.role === member.role);
  const [isRemoving, setIsRemoving] = _react.useState.call(void 0, false);
  const removeMember = async () => {
    setIsRemoving(true);
    try {
      await authClient.organization.removeMember({
        memberIdOrEmail: member.id,
        organizationId: member.organizationId,
        fetchOptions: {
          throw: true
        }
      });
      toast({
        variant: "success",
        message: localization.REMOVE_MEMBER_SUCCESS
      });
      await (refetch == null ? void 0 : refetch());
      onOpenChange == null ? void 0 : onOpenChange(false);
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setIsRemoving(false);
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DialogContent,
    {
      className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content,
      onOpenAutoFocus: (e) => e.preventDefault(),
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogTitle,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
              children: localization.REMOVE_MEMBER
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogDescription,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-xs md:text-sm",
                classNames == null ? void 0 : classNames.description
              ),
              children: localization.REMOVE_MEMBER_CONFIRM
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          MemberCell,
          {
            className: classNames == null ? void 0 : classNames.cell,
            member,
            localization,
            hideActions: true
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.outlineButton
              ),
              disabled: isRemoving,
              children: localization.CANCEL
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            Button,
            {
              type: "button",
              variant: "destructive",
              onClick: removeMember,
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.destructiveButton
              ),
              disabled: isRemoving,
              children: [
                isRemoving && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                localization.REMOVE_MEMBER
              ]
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/organization/update-member-role-dialog.tsx



function UpdateMemberRoleDialog({
  member,
  classNames,
  localization: localizationProp,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c, _d;
  const {
    authClient,
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue
    },
    hooks: { useActiveOrganization, useSession },
    localization: contextLocalization,
    organization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const { refetch } = useActiveOrganization();
  const { data: sessionData } = useSession();
  const { data: activeOrganization } = useActiveOrganization();
  const [isUpdating, setIsUpdating] = _react.useState.call(void 0, false);
  const [selectedRole, setSelectedRole] = _react.useState.call(void 0, member.role);
  const builtInRoles = [
    { role: "owner", label: localization.OWNER },
    { role: "admin", label: localization.ADMIN },
    { role: "member", label: localization.MEMBER }
  ];
  const roles = [...builtInRoles, ...(organization == null ? void 0 : organization.customRoles) || []];
  const currentUserRole = (_a = activeOrganization == null ? void 0 : activeOrganization.members.find(
    (m) => m.user.id === (sessionData == null ? void 0 : sessionData.user.id)
  )) == null ? void 0 : _a.role;
  const availableRoles = roles.filter((role) => {
    if (role.role === "owner") {
      return currentUserRole === "owner";
    }
    if (role.role === "admin") {
      return currentUserRole === "owner" || currentUserRole === "admin";
    }
    return true;
  });
  const updateMemberRole = async () => {
    if (selectedRole === member.role) {
      toast({
        variant: "error",
        message: `${localization.ROLE} ${localization.IS_THE_SAME}`
      });
      return;
    }
    setIsUpdating(true);
    try {
      await authClient.organization.updateMemberRole({
        memberId: member.id,
        // @ts-ignore - role is a string but the type expects specific values
        role: selectedRole,
        organizationId: member.organizationId,
        fetchOptions: {
          throw: true
        }
      });
      toast({
        variant: "success",
        message: localization.MEMBER_ROLE_UPDATED
      });
      await (refetch == null ? void 0 : refetch());
      onOpenChange == null ? void 0 : onOpenChange(false);
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setIsUpdating(false);
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DialogContent,
    {
      className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.content,
      onOpenAutoFocus: (e) => e.preventDefault(),
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.header, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogTitle,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
              children: localization.UPDATE_ROLE
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogDescription,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-xs md:text-sm",
                classNames == null ? void 0 : classNames.description
              ),
              children: localization.UPDATE_ROLE_DESCRIPTION
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "grid gap-6 py-4", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            MemberCell,
            {
              className: classNames == null ? void 0 : classNames.cell,
              member,
              localization,
              hideActions: true
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            Select,
            {
              value: selectedRole,
              onValueChange: setSelectedRole,
              children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectTrigger, { className: "w-full", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  SelectValue,
                  {
                    placeholder: localization.SELECT_ROLE
                  }
                ) }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectContent, { children: availableRoles.map((role) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectItem, { value: role.role, children: role.label }, role.role)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_d = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _d.footer, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.outlineButton
              ),
              disabled: isUpdating,
              children: localization.CANCEL
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            Button,
            {
              type: "button",
              onClick: updateMemberRole,
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.primaryButton
              ),
              disabled: isUpdating,
              children: [
                isUpdating && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                localization.UPDATE_ROLE
              ]
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/organization/member-cell.tsx

function MemberCell({
  className,
  classNames,
  member,
  localization: localizationProp,
  hideActions
}) {
  var _a;
  const {
    components: {
      Button,
      Card,
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger
    },
    organization,
    hooks: { useActiveOrganization, useSession },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const { data: sessionData } = useSession();
  const { data: activeOrganization } = useActiveOrganization();
  const [removeDialogOpen, setRemoveDialogOpen] = _react.useState.call(void 0, false);
  const [updateRoleDialogOpen, setUpdateRoleDialogOpen] = _react.useState.call(void 0, false);
  const builtInRoles = [
    { role: "owner", label: localization.OWNER },
    { role: "admin", label: localization.ADMIN },
    { role: "member", label: localization.MEMBER }
  ];
  const myRole = (_a = activeOrganization == null ? void 0 : activeOrganization.members.find(
    (m) => m.user.id === (sessionData == null ? void 0 : sessionData.user.id)
  )) == null ? void 0 : _a.role;
  const roles = [...builtInRoles, ...(organization == null ? void 0 : organization.customRoles) || []];
  const role = roles.find((r) => r.role === member.role);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      Card,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "flex-row items-center p-4",
          className,
          classNames == null ? void 0 : classNames.cell
        ),
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            UserView,
            {
              user: member.user,
              localization,
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "text-sm opacity-70", children: role == null ? void 0 : role.label }),
          (member.role !== "owner" || myRole === "owner") && !hideActions && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenu, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Button,
              {
                className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                  "relative ms-auto",
                  classNames == null ? void 0 : classNames.button,
                  classNames == null ? void 0 : classNames.outlineButton
                ),
                size: "icon",
                type: "button",
                variant: "outline",
                children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  _lucidereact.EllipsisIcon,
                  {
                    className: classNames == null ? void 0 : classNames.icon
                  }
                )
              }
            ) }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              DropdownMenuContent,
              {
                onCloseAutoFocus: (e) => e.preventDefault(),
                children: [
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                    DropdownMenuItem,
                    {
                      onClick: () => setUpdateRoleDialogOpen(true),
                      children: [
                        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.UserCogIcon, { className: classNames == null ? void 0 : classNames.icon }),
                        localization == null ? void 0 : localization.UPDATE_ROLE
                      ]
                    }
                  ),
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                    DropdownMenuItem,
                    {
                      onClick: () => setRemoveDialogOpen(true),
                      variant: "destructive",
                      children: [
                        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.UserXIcon, { className: classNames == null ? void 0 : classNames.icon }),
                        localization == null ? void 0 : localization.REMOVE_MEMBER
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      RemoveMemberDialog,
      {
        open: removeDialogOpen,
        onOpenChange: setRemoveDialogOpen,
        member,
        classNames,
        localization
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      UpdateMemberRoleDialog,
      {
        open: updateRoleDialogOpen,
        onOpenChange: setUpdateRoleDialogOpen,
        member,
        classNames,
        localization
      }
    )
  ] });
}

// src/components/organization/organization-members-card.tsx

function OrganizationMembersCard({
  className,
  classNames,
  localization: localizationProp,
  ...props
}) {
  const {
    basePath,
    hooks: { useActiveOrganization },
    localization: contextLocalization,
    settings,
    replace,
    viewPaths
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const {
    data: activeOrganization,
    isPending: organizationPending,
    isRefetching: organizationFetching
  } = useActiveOrganization();
  _react.useEffect.call(void 0, () => {
    if (organizationPending || organizationFetching) return;
    if (!activeOrganization)
      replace(`${(settings == null ? void 0 : settings.basePath) || basePath}/${viewPaths.SETTINGS}`);
  }, [
    activeOrganization,
    organizationPending,
    organizationFetching,
    basePath,
    settings == null ? void 0 : settings.basePath,
    replace,
    viewPaths
  ]);
  if (!activeOrganization) {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        className,
        classNames,
        title: localization.MEMBERS,
        description: localization.MEMBERS_DESCRIPTION,
        instructions: localization.MEMBERS_INSTRUCTIONS,
        actionLabel: localization.INVITE_MEMBER,
        isPending: true,
        ...props
      }
    );
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    OrganizationMembersContent,
    {
      className,
      classNames,
      localization,
      ...props
    }
  );
}
function OrganizationMembersContent({
  className,
  classNames,
  localization: localizationProp,
  ...props
}) {
  const {
    components: { CardContent },
    hooks: { useActiveOrganization, useHasPermission },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const { data: activeOrganization } = useActiveOrganization();
  const { data: hasPermissionInvite, isPending: isPendingInvite } = useHasPermission({
    permissions: {
      invitation: ["create"]
    }
  });
  const {
    data: hasPermissionUpdateMember,
    isPending: isPendingUpdateMember
  } = useHasPermission({
    permission: {
      member: ["update"]
    }
  });
  const isPending = isPendingInvite || isPendingUpdateMember;
  const members = activeOrganization == null ? void 0 : activeOrganization.members;
  const [inviteDialogOpen, setInviteDialogOpen] = _react.useState.call(void 0, false);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        className,
        classNames,
        title: localization.MEMBERS,
        description: localization.MEMBERS_DESCRIPTION,
        instructions: localization.MEMBERS_INSTRUCTIONS,
        actionLabel: localization.INVITE_MEMBER,
        action: () => setInviteDialogOpen(true),
        isPending,
        disabled: !(hasPermissionInvite == null ? void 0 : hasPermissionInvite.success),
        ...props,
        children: !isPending && members && members.length > 0 && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          CardContent,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid gap-4", classNames == null ? void 0 : classNames.content),
            children: members.sort(
              (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
            ).map((member) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              MemberCell,
              {
                classNames,
                member,
                localization,
                hideActions: !(hasPermissionUpdateMember == null ? void 0 : hasPermissionUpdateMember.success)
              },
              member.id
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      InviteMemberDialog,
      {
        open: inviteDialogOpen,
        onOpenChange: setInviteDialogOpen,
        classNames,
        localization
      }
    )
  ] });
}

// src/components/organization/organization-settings-cards.tsx


// src/components/organization/delete-organization-card.tsx


// src/components/organization/delete-organization-dialog.tsx






function DeleteOrganizationDialog({
  classNames,
  localization,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    authClient,
    components: {
      Button,
      Card,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input
    },
    hooks: { useActiveOrganization, useListOrganizations },
    localization: contextLocalization,
    redirectTo,
    navigate,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: activeOrganization, refetch: refetchActiveOrganization } = useActiveOrganization();
  const { refetch: refetchOrganizations } = useListOrganizations();
  const formSchema = z2.object({
    slug: z2.string().min(1, { message: localization.SLUG_REQUIRED }).refine((val) => val === (activeOrganization == null ? void 0 : activeOrganization.slug), {
      message: localization.SLUG_DOES_NOT_MATCH
    })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      slug: ""
    }
  });
  const { isSubmitting } = form.formState;
  const deleteOrganization = async () => {
    if (!activeOrganization) return;
    try {
      await authClient.organization.delete({
        organizationId: activeOrganization.id,
        fetchOptions: {
          throw: true
        }
      });
      await (refetchOrganizations == null ? void 0 : refetchOrganizations());
      await (refetchActiveOrganization == null ? void 0 : refetchActiveOrganization());
      toast({
        variant: "success",
        message: localization.DELETE_ORGANIZATION_SUCCESS
      });
      navigate(redirectTo);
      onOpenChange == null ? void 0 : onOpenChange(false);
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DialogContent,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "sm:max-w-md", (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content),
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogTitle,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
              children: localization == null ? void 0 : localization.DELETE_ORGANIZATION
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogDescription,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-xs md:text-sm",
                classNames == null ? void 0 : classNames.description
              ),
              children: localization == null ? void 0 : localization.DELETE_ORGANIZATION_DESCRIPTION
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Card, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "my-2 flex-row p-4", classNames == null ? void 0 : classNames.cell), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          OrganizationView,
          {
            organization: activeOrganization,
            localization
          }
        ) }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          "form",
          {
            onSubmit: form.handleSubmit(deleteOrganization),
            className: "grid gap-6",
            children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                FormField,
                {
                  control: form.control,
                  name: "slug",
                  render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: [
                      localization == null ? void 0 : localization.DELETE_ORGANIZATION_INSTRUCTIONS,
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "font-bold", children: activeOrganization == null ? void 0 : activeOrganization.slug })
                    ] }),
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      Input,
                      {
                        placeholder: activeOrganization == null ? void 0 : activeOrganization.slug,
                        className: classNames == null ? void 0 : classNames.input,
                        autoComplete: "off",
                        ...field
                      }
                    ) }),
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      FormMessage,
                      {
                        className: classNames == null ? void 0 : classNames.error
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Button,
                  {
                    type: "button",
                    variant: "secondary",
                    className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                      classNames == null ? void 0 : classNames.button,
                      classNames == null ? void 0 : classNames.secondaryButton
                    ),
                    onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
                    children: localization.CANCEL
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                  Button,
                  {
                    className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                      classNames == null ? void 0 : classNames.button,
                      classNames == null ? void 0 : classNames.destructiveButton
                    ),
                    disabled: isSubmitting,
                    variant: "destructive",
                    type: "submit",
                    children: [
                      isSubmitting && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                      localization == null ? void 0 : localization.DELETE_ORGANIZATION
                    ]
                  }
                )
              ] })
            ]
          }
        ) })
      ]
    }
  ) });
}

// src/components/organization/delete-organization-card.tsx

function DeleteOrganizationCard({
  className,
  classNames,
  localization
}) {
  var _a;
  const {
    hooks: { useActiveOrganization, useSession },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const [showDialog, setShowDialog] = _react.useState.call(void 0, false);
  const { data: activeOrganization, isPending: organizationPending } = useActiveOrganization();
  const { data: sessionData, isPending: sessionPending } = useSession();
  const isPending = organizationPending || sessionPending;
  const membership = (_a = activeOrganization == null ? void 0 : activeOrganization.members) == null ? void 0 : _a.find(
    (member) => member.userId === (sessionData == null ? void 0 : sessionData.user.id)
  );
  const isOwner = (membership == null ? void 0 : membership.role) === "owner";
  if (!isPending && !isOwner) return null;
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        className,
        classNames,
        actionLabel: localization == null ? void 0 : localization.DELETE_ORGANIZATION,
        description: localization == null ? void 0 : localization.DELETE_ORGANIZATION_DESCRIPTION,
        isPending,
        title: localization == null ? void 0 : localization.DELETE_ORGANIZATION,
        variant: "destructive",
        action: () => setShowDialog(true)
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      DeleteOrganizationDialog,
      {
        classNames,
        localization,
        open: showDialog,
        onOpenChange: setShowDialog
      }
    )
  ] });
}

// src/components/organization/organization-logo-card.tsx



// src/lib/image-utils.ts
async function resizeAndCropImage(file, name, size, extension) {
  const image = await loadImage(file);
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const minEdge = Math.min(image.width, image.height);
  const sx = (image.width - minEdge) / 2;
  const sy = (image.height - minEdge) / 2;
  const sWidth = minEdge;
  const sHeight = minEdge;
  ctx == null ? void 0 : ctx.drawImage(image, sx, sy, sWidth, sHeight, 0, 0, size, size);
  const resizedImageBlob = await new Promise(
    (resolve) => canvas.toBlob(resolve, `image/${extension}`)
  );
  return new File([resizedImageBlob], `${name}.${extension}`, {
    type: `image/${extension}`
  });
}
async function loadImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      var _a;
      image.src = (_a = e.target) == null ? void 0 : _a.result;
    };
    image.onload = () => resolve(image);
    image.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}
async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// src/components/organization/organization-logo-card.tsx

function OrganizationLogoCard({
  className,
  classNames,
  localization,
  ...props
}) {
  const {
    components: { Button, Card },
    hooks: { useActiveOrganization },
    localization: authLocalization2
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...authLocalization2, ...localization };
  const { data: activeOrganization } = useActiveOrganization();
  if (!activeOrganization) {
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      Card,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "w-full pb-0 text-start",
          className,
          classNames == null ? void 0 : classNames.base
        ),
        ...props,
        children: [
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex justify-between", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              SettingsCardHeader,
              {
                className: "grow self-start",
                title: localization.LOGO,
                description: localization.LOGO_DESCRIPTION,
                isPending: true,
                classNames
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Button,
              {
                type: "button",
                className: "me-6 size-fit rounded-full",
                size: "icon",
                variant: "ghost",
                disabled: true,
                children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  OrganizationLogo,
                  {
                    isPending: true,
                    className: "size-20 text-2xl",
                    classNames: classNames == null ? void 0 : classNames.avatar,
                    localization
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            SettingsCardFooter,
            {
              className: "!py-5",
              instructions: localization.LOGO_INSTRUCTIONS,
              classNames,
              isPending: true,
              isSubmitting: false
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    OrganizationLogoForm,
    {
      className,
      classNames,
      localization,
      ...props
    }
  );
}
function OrganizationLogoForm({
  className,
  classNames,
  localization,
  ...props
}) {
  const {
    authClient,
    components: {
      Button,
      Card,
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger
    },
    hooks: {
      useActiveOrganization,
      useListOrganizations,
      useHasPermission
    },
    localization: authLocalization2,
    optimistic,
    organization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...authLocalization2, ...localization };
  const { data: activeOrganization, refetch: refetchActiveOrganization } = useActiveOrganization();
  const { refetch: refetchOrganizations } = useListOrganizations();
  const { data: hasPermission, isPending: permissionPending } = useHasPermission({
    permissions: {
      organization: ["update"]
    }
  });
  const isPending = !activeOrganization || permissionPending;
  const fileInputRef = _react.useRef.call(void 0, null);
  const [loading, setLoading] = _react.useState.call(void 0, false);
  const handleLogoChange = async (file) => {
    if (!activeOrganization || !(organization == null ? void 0 : organization.logo) || !(hasPermission == null ? void 0 : hasPermission.success))
      return;
    setLoading(true);
    const resizedFile = await resizeAndCropImage(
      file,
      crypto.randomUUID(),
      organization.logo.size,
      organization.logo.extension
    );
    let image;
    if (organization.logo.upload) {
      image = await organization.logo.upload(resizedFile);
    } else {
      image = await fileToBase64(resizedFile);
    }
    if (!image) {
      setLoading(false);
      return;
    }
    if (optimistic && !organization.logo.upload) setLoading(false);
    try {
      await authClient.organization.update({
        data: { logo: image },
        fetchOptions: { throw: true }
      });
      await (refetchActiveOrganization == null ? void 0 : refetchActiveOrganization());
      await (refetchOrganizations == null ? void 0 : refetchOrganizations());
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setLoading(false);
  };
  const handleDeleteLogo = async () => {
    if (!activeOrganization || !(hasPermission == null ? void 0 : hasPermission.success)) return;
    setLoading(true);
    try {
      await authClient.organization.update({
        data: { logo: "" },
        fetchOptions: { throw: true }
      });
      await (refetchActiveOrganization == null ? void 0 : refetchActiveOrganization());
      await (refetchOrganizations == null ? void 0 : refetchOrganizations());
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setLoading(false);
  };
  const openFileDialog = () => {
    var _a;
    if (hasPermission == null ? void 0 : hasPermission.success) {
      (_a = fileInputRef.current) == null ? void 0 : _a.click();
    }
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Card,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "w-full pb-0 text-start",
        className,
        classNames == null ? void 0 : classNames.base
      ),
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "input",
          {
            ref: fileInputRef,
            accept: "image/*",
            disabled: loading || !(hasPermission == null ? void 0 : hasPermission.success),
            hidden: true,
            type: "file",
            onChange: (e) => {
              var _a;
              const file = (_a = e.target.files) == null ? void 0 : _a.item(0);
              if (file) handleLogoChange(file);
              e.target.value = "";
            }
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex justify-between", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            SettingsCardHeader,
            {
              className: "grow self-start",
              title: localization.LOGO,
              description: localization.LOGO_DESCRIPTION,
              isPending,
              classNames
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenu, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Button,
              {
                type: "button",
                className: "me-6 size-fit rounded-full",
                size: "icon",
                variant: "ghost",
                disabled: !(hasPermission == null ? void 0 : hasPermission.success),
                children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  OrganizationLogo,
                  {
                    isPending: isPending || loading,
                    className: "size-20 text-2xl",
                    classNames: classNames == null ? void 0 : classNames.avatar,
                    organization: activeOrganization,
                    localization
                  },
                  activeOrganization == null ? void 0 : activeOrganization.logo
                )
              }
            ) }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              DropdownMenuContent,
              {
                align: "end",
                onCloseAutoFocus: (e) => e.preventDefault(),
                children: [
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                    DropdownMenuItem,
                    {
                      onClick: openFileDialog,
                      disabled: loading || !(hasPermission == null ? void 0 : hasPermission.success),
                      children: [
                        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.UploadCloudIcon, {}),
                        localization.UPLOAD_LOGO
                      ]
                    }
                  ),
                  (activeOrganization == null ? void 0 : activeOrganization.logo) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                    DropdownMenuItem,
                    {
                      onClick: handleDeleteLogo,
                      disabled: loading || !(hasPermission == null ? void 0 : hasPermission.success),
                      variant: "destructive",
                      children: [
                        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Trash2Icon, {}),
                        localization.DELETE_LOGO
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          SettingsCardFooter,
          {
            className: "!py-5",
            instructions: localization.LOGO_INSTRUCTIONS,
            classNames,
            isPending,
            isSubmitting: loading
          }
        )
      ]
    }
  );
}

// src/components/organization/organization-name-card.tsx





function OrganizationNameCard({
  className,
  classNames,
  localization: localizationProp,
  ...props
}) {
  const {
    components: { CardContent, Skeleton },
    hooks: { useActiveOrganization },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const { data: activeOrganization } = useActiveOrganization();
  if (!activeOrganization) {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        className,
        classNames,
        description: localization.ORGANIZATION_NAME_DESCRIPTION,
        instructions: localization.ORGANIZATION_NAME_INSTRUCTIONS,
        isPending: true,
        title: localization.ORGANIZATION_NAME,
        actionLabel: localization.SAVE,
        optimistic: props.optimistic,
        ...props,
        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardContent, { className: classNames == null ? void 0 : classNames.content, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Skeleton,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, "h-9 w-full", classNames == null ? void 0 : classNames.skeleton)
          }
        ) })
      }
    );
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    OrganizationNameForm,
    {
      className,
      classNames,
      localization,
      ...props
    }
  );
}
function OrganizationNameForm({
  className,
  classNames,
  localization: localizationProp,
  ...props
}) {
  const {
    authClient,
    components: {
      CardContent,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormMessage,
      Input,
      Skeleton
    },
    localization: contextLocalization,
    hooks: {
      useActiveOrganization,
      useListOrganizations,
      useHasPermission
    },
    optimistic,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const { data: activeOrganization, refetch: refetchActiveOrganization } = useActiveOrganization();
  const { refetch: refetchOrganizations } = useListOrganizations();
  const { data: hasPermission, isPending } = useHasPermission({
    permissions: {
      organization: ["update"]
    }
  });
  const formSchema = z3.object({
    name: z3.string().min(1, {
      message: `${localization.ORGANIZATION_NAME} ${localization.IS_REQUIRED}`
    })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    values: { name: (activeOrganization == null ? void 0 : activeOrganization.name) || "" }
  });
  const { isSubmitting } = form.formState;
  const updateOrganizationName = async ({
    name
  }) => {
    if (!activeOrganization) return;
    if (activeOrganization.name === name) {
      toast({
        variant: "error",
        message: `${localization.ORGANIZATION_NAME} ${localization.IS_THE_SAME}`
      });
      return;
    }
    try {
      await authClient.organization.update({
        data: { name },
        fetchOptions: {
          throw: true
        }
      });
      await (refetchActiveOrganization == null ? void 0 : refetchActiveOrganization());
      await (refetchOrganizations == null ? void 0 : refetchOrganizations());
      toast({
        variant: "success",
        message: `${localization.ORGANIZATION_NAME} ${localization.UPDATED_SUCCESSFULLY}`
      });
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "form", { onSubmit: form.handleSubmit(updateOrganizationName), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SettingsCard,
    {
      className,
      classNames,
      description: localization.ORGANIZATION_NAME_DESCRIPTION,
      instructions: localization.ORGANIZATION_NAME_INSTRUCTIONS,
      isPending,
      title: localization.ORGANIZATION_NAME,
      actionLabel: localization.SAVE,
      optimistic,
      disabled: !(hasPermission == null ? void 0 : hasPermission.success),
      ...props,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardContent, { className: classNames == null ? void 0 : classNames.content, children: isPending ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        Skeleton,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
            "h-9 w-full",
            classNames == null ? void 0 : classNames.skeleton
          )
        }
      ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        FormField,
        {
          control: form.control,
          name: "name",
          render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Input,
              {
                className: classNames == null ? void 0 : classNames.input,
                placeholder: localization.ORGANIZATION_NAME_PLACEHOLDER,
                disabled: isSubmitting || !(hasPermission == null ? void 0 : hasPermission.success),
                ...field
              }
            ) }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              FormMessage,
              {
                className: classNames == null ? void 0 : classNames.error
              }
            )
          ] })
        }
      ) })
    }
  ) }) });
}

// src/components/organization/organization-slug-card.tsx





function OrganizationSlugCard({
  className,
  classNames,
  localization: localizationProp,
  ...props
}) {
  const {
    components: { CardContent, Skeleton },
    hooks: { useActiveOrganization },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const { data: activeOrganization } = useActiveOrganization();
  if (!activeOrganization) {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        className,
        classNames,
        description: localization.ORGANIZATION_SLUG_DESCRIPTION,
        instructions: localization.ORGANIZATION_SLUG_INSTRUCTIONS,
        isPending: true,
        title: localization.ORGANIZATION_SLUG,
        actionLabel: localization.SAVE,
        optimistic: props.optimistic,
        ...props,
        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardContent, { className: classNames == null ? void 0 : classNames.content, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Skeleton,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, "h-9 w-full", classNames == null ? void 0 : classNames.skeleton)
          }
        ) })
      }
    );
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    OrganizationSlugForm,
    {
      className,
      classNames,
      localization,
      ...props
    }
  );
}
function OrganizationSlugForm({
  className,
  classNames,
  localization: localizationProp,
  ...props
}) {
  const {
    authClient,
    components: {
      CardContent,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormMessage,
      Input,
      Skeleton
    },
    localization: contextLocalization,
    hooks: {
      useActiveOrganization,
      useListOrganizations,
      useHasPermission
    },
    optimistic,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const { data: activeOrganization, refetch: refetchActiveOrganization } = useActiveOrganization();
  const { refetch: refetchOrganizations } = useListOrganizations();
  const { data: hasPermission, isPending } = useHasPermission({
    permissions: {
      organization: ["update"]
    }
  });
  const formSchema = z4.object({
    slug: z4.string().min(1, {
      message: `${localization.ORGANIZATION_SLUG} ${localization.IS_REQUIRED}`
    }).regex(/^[a-z0-9-]+$/, {
      message: `${localization.ORGANIZATION_SLUG} ${localization.IS_INVALID}`
    })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    values: { slug: (activeOrganization == null ? void 0 : activeOrganization.slug) || "" }
  });
  const { isSubmitting } = form.formState;
  const updateOrganizationSlug = async ({
    slug
  }) => {
    if (!activeOrganization) return;
    if (activeOrganization.slug === slug) {
      toast({
        variant: "error",
        message: `${localization.ORGANIZATION_SLUG} ${localization.IS_THE_SAME}`
      });
      return;
    }
    try {
      await authClient.organization.update({
        data: { slug },
        fetchOptions: {
          throw: true
        }
      });
      await (refetchActiveOrganization == null ? void 0 : refetchActiveOrganization());
      await (refetchOrganizations == null ? void 0 : refetchOrganizations());
      toast({
        variant: "success",
        message: `${localization.ORGANIZATION_SLUG} ${localization.UPDATED_SUCCESSFULLY}`
      });
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "form", { onSubmit: form.handleSubmit(updateOrganizationSlug), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SettingsCard,
    {
      className,
      classNames,
      description: localization.ORGANIZATION_SLUG_DESCRIPTION,
      instructions: localization.ORGANIZATION_SLUG_INSTRUCTIONS,
      isPending,
      title: localization.ORGANIZATION_SLUG,
      actionLabel: localization.SAVE,
      optimistic,
      disabled: !(hasPermission == null ? void 0 : hasPermission.success),
      ...props,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardContent, { className: classNames == null ? void 0 : classNames.content, children: isPending ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        Skeleton,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
            "h-9 w-full",
            classNames == null ? void 0 : classNames.skeleton
          )
        }
      ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        FormField,
        {
          control: form.control,
          name: "slug",
          render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Input,
              {
                className: classNames == null ? void 0 : classNames.input,
                placeholder: localization.ORGANIZATION_SLUG_PLACEHOLDER,
                disabled: isSubmitting || !(hasPermission == null ? void 0 : hasPermission.success),
                ...field
              }
            ) }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              FormMessage,
              {
                className: classNames == null ? void 0 : classNames.error
              }
            )
          ] })
        }
      ) })
    }
  ) }) });
}

// src/components/organization/organization-settings-cards.tsx

function OrganizationSettingsCards({
  className,
  classNames,
  localization
}) {
  const {
    basePath,
    hooks: { useActiveOrganization },
    organization,
    settings,
    replace,
    viewPaths
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const {
    data: activeOrganization,
    isPending: organizationPending,
    isRefetching: organizationFetching
  } = useActiveOrganization();
  _react.useEffect.call(void 0, () => {
    if (organizationPending || organizationFetching) return;
    if (!activeOrganization)
      replace(`${(settings == null ? void 0 : settings.basePath) || basePath}/${viewPaths.SETTINGS}`);
  }, [
    activeOrganization,
    organizationPending,
    organizationFetching,
    basePath,
    settings == null ? void 0 : settings.basePath,
    replace,
    viewPaths.SETTINGS
  ]);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex w-full flex-col gap-4 md:gap-6",
        className,
        classNames == null ? void 0 : classNames.cards
      ),
      children: [
        (organization == null ? void 0 : organization.logo) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          OrganizationLogoCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          OrganizationNameCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          OrganizationSlugCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          DeleteOrganizationCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        )
      ]
    }
  );
}

// src/components/organization/organizations-card.tsx


// src/components/organization/create-organization-dialog.tsx







function CreateOrganizationDialog({
  className,
  classNames,
  localization: localizationProp,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    authClient,
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input
    },
    hooks: { useActiveOrganization, useListOrganizations },
    localization: contextLocalization,
    organization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const [logo, setLogo] = _react.useState.call(void 0, null);
  const [uploadingLogo, setUploadingLogo] = _react.useState.call(void 0, false);
  const fileInputRef = _react.useRef.call(void 0, null);
  const openFileDialog = () => {
    var _a2;
    return (_a2 = fileInputRef.current) == null ? void 0 : _a2.click();
  };
  const { refetch: refetchActiveOrganization } = useActiveOrganization();
  const { refetch: refetchOrganizations } = useListOrganizations();
  const formSchema = z5.object({
    logo: z5.string().optional(),
    name: z5.string().min(1, {
      message: `${localization.ORGANIZATION_NAME} ${localization.IS_REQUIRED}`
    }),
    slug: z5.string().min(1, {
      message: `${localization.ORGANIZATION_SLUG} ${localization.IS_REQUIRED}`
    }).regex(/^[a-z0-9-]+$/, {
      message: `${localization.ORGANIZATION_SLUG} ${localization.IS_INVALID}`
    })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      logo: "",
      name: "",
      slug: ""
    }
  });
  const isSubmitting = form.formState.isSubmitting;
  const handleLogoChange = async (file) => {
    if (!(organization == null ? void 0 : organization.logo)) return;
    setUploadingLogo(true);
    try {
      const resizedFile = await resizeAndCropImage(
        file,
        crypto.randomUUID(),
        organization.logo.size,
        organization.logo.extension
      );
      let image;
      if (organization == null ? void 0 : organization.logo.upload) {
        image = await organization.logo.upload(resizedFile);
      } else {
        image = await fileToBase64(resizedFile);
      }
      setLogo(image || null);
      form.setValue("logo", image || "");
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setUploadingLogo(false);
  };
  const deleteLogo = () => {
    setLogo(null);
    form.setValue("logo", "");
  };
  async function onSubmit({ name, slug, logo: logo2 }) {
    try {
      const organization2 = await authClient.organization.create({
        name,
        slug,
        logo: logo2,
        fetchOptions: { throw: true }
      });
      await authClient.organization.setActive({
        organizationId: organization2.id
      });
      await (refetchActiveOrganization == null ? void 0 : refetchActiveOrganization());
      await (refetchOrganizations == null ? void 0 : refetchOrganizations());
      onOpenChange == null ? void 0 : onOpenChange(false);
      form.reset();
      setLogo(null);
      toast({
        variant: "success",
        message: localization.CREATE_ORGANIZATION_SUCCESS
      });
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogContent, { className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content, children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        DialogTitle,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
          children: localization.CREATE_ORGANIZATION
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        DialogDescription,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
            "text-xs md:text-sm",
            classNames == null ? void 0 : classNames.description
          ),
          children: localization.ORGANIZATIONS_INSTRUCTIONS
        }
      )
    ] }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "form",
      {
        onSubmit: form.handleSubmit(onSubmit),
        className: "space-y-6",
        children: [
          (organization == null ? void 0 : organization.logo) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            FormField,
            {
              control: form.control,
              name: "logo",
              render: () => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  "input",
                  {
                    ref: fileInputRef,
                    accept: "image/*",
                    disabled: uploadingLogo,
                    hidden: true,
                    type: "file",
                    onChange: (e) => {
                      var _a2;
                      const file = (_a2 = e.target.files) == null ? void 0 : _a2.item(0);
                      if (file) handleLogoChange(file);
                      e.target.value = "";
                    }
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { children: localization.LOGO }),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenu, { children: [
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      Button,
                      {
                        className: "size-fit rounded-full",
                        size: "icon",
                        type: "button",
                        variant: "ghost",
                        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                          OrganizationLogo,
                          {
                            className: "size-16",
                            isPending: uploadingLogo,
                            localization,
                            organization: logo ? {
                              name: form.watch(
                                "name"
                              ),
                              logo
                            } : null
                          }
                        )
                      }
                    ) }),
                    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                      DropdownMenuContent,
                      {
                        align: "start",
                        onCloseAutoFocus: (e) => e.preventDefault(),
                        children: [
                          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                            DropdownMenuItem,
                            {
                              onClick: openFileDialog,
                              disabled: uploadingLogo,
                              children: [
                                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.UploadCloudIcon, {}),
                                localization.UPLOAD_LOGO
                              ]
                            }
                          ),
                          logo && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                            DropdownMenuItem,
                            {
                              onClick: deleteLogo,
                              disabled: uploadingLogo,
                              variant: "destructive",
                              children: [
                                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Trash2Icon, {}),
                                localization.DELETE_LOGO
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                    Button,
                    {
                      disabled: uploadingLogo,
                      variant: "outline",
                      onClick: openFileDialog,
                      type: "button",
                      children: [
                        uploadingLogo && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                        localization.UPLOAD
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            FormField,
            {
              control: form.control,
              name: "name",
              render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { children: localization.ORGANIZATION_NAME }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Input,
                  {
                    placeholder: localization.ORGANIZATION_NAME_PLACEHOLDER,
                    ...field
                  }
                ) }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            FormField,
            {
              control: form.control,
              name: "slug",
              render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { children: localization.ORGANIZATION_SLUG }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Input,
                  {
                    placeholder: localization.ORGANIZATION_SLUG_PLACEHOLDER,
                    ...field
                  }
                ) }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
                className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                  classNames == null ? void 0 : classNames.button,
                  classNames == null ? void 0 : classNames.outlineButton
                ),
                children: localization.CANCEL
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              Button,
              {
                type: "submit",
                className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                  classNames == null ? void 0 : classNames.button,
                  classNames == null ? void 0 : classNames.primaryButton
                ),
                disabled: isSubmitting,
                children: [
                  isSubmitting && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                  localization.CREATE_ORGANIZATION
                ]
              }
            )
          ] })
        ]
      }
    ) })
  ] }) });
}

// src/components/organization/organization-cell.tsx



// src/components/organization/leave-organization-dialog.tsx



function LeaveOrganizationDialog({
  organization,
  className,
  classNames,
  localization: localizationProp,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    authClient,
    components: {
      Button,
      Card,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle
    },
    hooks: { useActiveOrganization, useListOrganizations },
    localization: contextLocalization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...localizationProp };
  const { data: activeOrganization, refetch: refetchActiveOrganization } = useActiveOrganization();
  const { refetch: refetchOrganizations } = useListOrganizations();
  const [isLeaving, setIsLeaving] = _react.useState.call(void 0, false);
  const handleLeaveOrganization = async () => {
    setIsLeaving(true);
    try {
      await authClient.organization.leave({
        organizationId: organization.id,
        fetchOptions: {
          throw: true
        }
      });
      toast({
        variant: "success",
        message: localization.LEAVE_ORGANIZATION_SUCCESS
      });
      if ((activeOrganization == null ? void 0 : activeOrganization.id) === organization.id) {
        refetchActiveOrganization == null ? void 0 : refetchActiveOrganization();
      }
      await (refetchOrganizations == null ? void 0 : refetchOrganizations());
      onOpenChange == null ? void 0 : onOpenChange(false);
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setIsLeaving(false);
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DialogContent,
    {
      className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content,
      onOpenAutoFocus: (e) => e.preventDefault(),
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogTitle,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
              children: localization.LEAVE_ORGANIZATION
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogDescription,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-xs md:text-sm",
                classNames == null ? void 0 : classNames.description
              ),
              children: localization.LEAVE_ORGANIZATION_CONFIRM
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Card,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "my-2 flex-row p-4",
              className,
              classNames == null ? void 0 : classNames.cell
            ),
            children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              OrganizationView,
              {
                organization,
                localization
              }
            )
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.outlineButton
              ),
              disabled: isLeaving,
              children: localization.CANCEL
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            Button,
            {
              type: "button",
              variant: "destructive",
              onClick: handleLeaveOrganization,
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.destructiveButton
              ),
              disabled: isLeaving,
              children: [
                isLeaving && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                localization.LEAVE_ORGANIZATION
              ]
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/organization/organization-cell.tsx

function OrganizationCell({
  className,
  classNames,
  organization,
  localization: localizationProp
}) {
  const {
    authClient,
    basePath,
    components: {
      Button,
      Card,
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger
    },
    hooks: { useActiveOrganization },
    localization: contextLocalization,
    settings,
    viewPaths,
    navigate,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = _react.useMemo.call(void 0, 
    () => ({ ...contextLocalization, ...localizationProp }),
    [contextLocalization, localizationProp]
  );
  const { data: activeOrganization, refetch: refetchActiveOrganization } = useActiveOrganization();
  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = _react.useState.call(void 0, false);
  const [isManagingOrganization, setIsManagingOrganization] = _react.useState.call(void 0, false);
  const handleManageOrganization = _react.useCallback.call(void 0, async () => {
    if ((activeOrganization == null ? void 0 : activeOrganization.id) === organization.id) {
      navigate(
        `${(settings == null ? void 0 : settings.basePath) || basePath}/${viewPaths.ORGANIZATION}`
      );
      return;
    }
    setIsManagingOrganization(true);
    try {
      await authClient.organization.setActive({
        organizationId: organization.id,
        fetchOptions: {
          throw: true
        }
      });
      await (refetchActiveOrganization == null ? void 0 : refetchActiveOrganization());
      navigate(
        `${(settings == null ? void 0 : settings.basePath) || basePath}/${viewPaths.ORGANIZATION}`
      );
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    } finally {
      setIsManagingOrganization(false);
    }
  }, [
    activeOrganization,
    authClient,
    organization.id,
    basePath,
    settings == null ? void 0 : settings.basePath,
    viewPaths,
    navigate,
    toast,
    localization,
    refetchActiveOrganization
  ]);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Card, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "flex-row p-4", className, classNames == null ? void 0 : classNames.cell), children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        OrganizationView,
        {
          organization,
          localization
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenu, { children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Button,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "relative ms-auto",
              classNames == null ? void 0 : classNames.button,
              classNames == null ? void 0 : classNames.outlineButton
            ),
            disabled: isManagingOrganization,
            size: "icon",
            type: "button",
            variant: "outline",
            children: isManagingOrganization ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.EllipsisIcon, { className: classNames == null ? void 0 : classNames.icon })
          }
        ) }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenuContent, { children: [
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            DropdownMenuItem,
            {
              onClick: handleManageOrganization,
              disabled: isManagingOrganization,
              children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.SettingsIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.MANAGE_ORGANIZATION
              ]
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            DropdownMenuItem,
            {
              onClick: () => setIsLeaveDialogOpen(true),
              variant: "destructive",
              children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.LogOutIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.LEAVE_ORGANIZATION
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      LeaveOrganizationDialog,
      {
        open: isLeaveDialogOpen,
        onOpenChange: setIsLeaveDialogOpen,
        organization,
        localization
      }
    )
  ] });
}

// src/components/organization/organizations-card.tsx

function OrganizationsCard({
  className,
  classNames,
  localization,
  ...props
}) {
  const {
    components: { CardContent },
    hooks: { useListOrganizations },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const isHydrated = _chunkZE6BT3OYcjs.useIsHydrated.call(void 0, );
  const { data: organizations, isPending: organizationsPending } = useListOrganizations();
  const isPending = !isHydrated || organizationsPending;
  const [createDialogOpen, setCreateDialogOpen] = _react.useState.call(void 0, false);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        className,
        classNames,
        title: localization.ORGANIZATIONS,
        description: localization.ORGANIZATIONS_DESCRIPTION,
        instructions: localization.ORGANIZATIONS_INSTRUCTIONS,
        actionLabel: localization.CREATE_ORGANIZATION,
        action: () => setCreateDialogOpen(true),
        isPending,
        ...props,
        children: organizations && (organizations == null ? void 0 : organizations.length) > 0 && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          CardContent,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid gap-4", classNames == null ? void 0 : classNames.content),
            children: organizations == null ? void 0 : organizations.map((organization) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              OrganizationCell,
              {
                classNames,
                organization,
                localization
              },
              organization.id
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      CreateOrganizationDialog,
      {
        classNames,
        localization,
        open: createDialogOpen,
        onOpenChange: setCreateDialogOpen
      }
    )
  ] });
}

// src/components/settings/account-settings-cards.tsx


// src/components/settings/account/accounts-card.tsx


// src/components/settings/account/account-cell.tsx



function AccountCell({
  className,
  classNames,
  deviceSession,
  localization,
  refetch
}) {
  const {
    basePath,
    components: {
      Button,
      Card,
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger
    },
    localization: contextLocalization,
    hooks: { useSession },
    mutators: { revokeDeviceSession, setActiveSession },
    toast,
    viewPaths,
    navigate
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData } = useSession();
  const [isLoading, setIsLoading] = _react.useState.call(void 0, false);
  const handleRevoke = async () => {
    setIsLoading(true);
    try {
      await revokeDeviceSession({
        sessionToken: deviceSession.session.token
      });
      refetch == null ? void 0 : refetch();
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  };
  const handleSetActiveSession = async () => {
    setIsLoading(true);
    try {
      await setActiveSession({
        sessionToken: deviceSession.session.token
      });
      refetch == null ? void 0 : refetch();
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  };
  const isCurrentSession = deviceSession.session.id === (sessionData == null ? void 0 : sessionData.session.id);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Card, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "flex-row p-4", className, classNames == null ? void 0 : classNames.cell), children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, UserView, { user: deviceSession.user, localization }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenu, { children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        Button,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
            "relative ms-auto",
            classNames == null ? void 0 : classNames.button,
            classNames == null ? void 0 : classNames.outlineButton
          ),
          disabled: isLoading,
          size: "icon",
          type: "button",
          variant: "outline",
          children: isLoading ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.EllipsisIcon, { className: classNames == null ? void 0 : classNames.icon })
        }
      ) }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenuContent, { children: [
        !isCurrentSession && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenuItem, { onClick: handleSetActiveSession, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.RepeatIcon, { className: classNames == null ? void 0 : classNames.icon }),
          localization.SWITCH_ACCOUNT
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          DropdownMenuItem,
          {
            onClick: () => {
              if (isCurrentSession) {
                navigate(`${basePath}/${viewPaths.SIGN_OUT}`);
                return;
              }
              handleRevoke();
            },
            children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.LogOutIcon, { className: classNames == null ? void 0 : classNames.icon }),
              isCurrentSession ? localization.SIGN_OUT : localization.REVOKE
            ]
          }
        )
      ] })
    ] })
  ] });
}

// src/components/settings/account/accounts-card.tsx

function AccountsCard({
  className,
  classNames,
  localization
}) {
  const {
    basePath,
    components: { CardContent },
    hooks: { useListDeviceSessions },
    localization: contextLocalization,
    viewPaths,
    navigate
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: deviceSessions, isPending, refetch } = useListDeviceSessions();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SettingsCard,
    {
      className,
      classNames,
      title: localization.ACCOUNTS,
      description: localization.ACCOUNTS_DESCRIPTION,
      actionLabel: localization.ADD_ACCOUNT,
      instructions: localization.ACCOUNTS_INSTRUCTIONS,
      isPending,
      action: () => navigate(`${basePath}/${viewPaths.SIGN_IN}`),
      children: (deviceSessions == null ? void 0 : deviceSessions.length) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardContent, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid gap-4", classNames == null ? void 0 : classNames.content), children: deviceSessions == null ? void 0 : deviceSessions.map((deviceSession) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        AccountCell,
        {
          classNames,
          deviceSession,
          localization,
          refetch
        },
        deviceSession.session.id
      )) })
    }
  );
}

// src/components/settings/account/update-avatar-card.tsx



function UpdateAvatarCard({
  className,
  classNames,
  localization,
  ...props
}) {
  const {
    components: {
      Button,
      Card,
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger
    },
    hooks: { useSession },
    mutators: { updateUser },
    localization: authLocalization2,
    optimistic,
    avatar,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...authLocalization2, ...localization };
  const { data: sessionData, isPending, refetch } = useSession();
  const fileInputRef = _react.useRef.call(void 0, null);
  const [loading, setLoading] = _react.useState.call(void 0, false);
  const handleAvatarChange = async (file) => {
    if (!sessionData || !avatar) return;
    setLoading(true);
    const resizedFile = await resizeAndCropImage(
      file,
      crypto.randomUUID(),
      avatar.size,
      avatar.extension
    );
    let image;
    if (avatar.upload) {
      image = await avatar.upload(resizedFile);
    } else {
      image = await fileToBase64(resizedFile);
    }
    if (!image) {
      setLoading(false);
      return;
    }
    if (optimistic && !avatar.upload) setLoading(false);
    try {
      await updateUser({ image });
      await (refetch == null ? void 0 : refetch());
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setLoading(false);
  };
  const handleDeleteAvatar = async () => {
    if (!sessionData) return;
    setLoading(true);
    try {
      await updateUser({ image: null });
      await (refetch == null ? void 0 : refetch());
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setLoading(false);
  };
  const openFileDialog = () => {
    var _a;
    return (_a = fileInputRef.current) == null ? void 0 : _a.click();
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Card,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "w-full pb-0 text-start",
        className,
        classNames == null ? void 0 : classNames.base
      ),
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "input",
          {
            ref: fileInputRef,
            accept: "image/*",
            disabled: loading,
            hidden: true,
            type: "file",
            onChange: (e) => {
              var _a;
              const file = (_a = e.target.files) == null ? void 0 : _a.item(0);
              if (file) handleAvatarChange(file);
              e.target.value = "";
            }
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex justify-between", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            SettingsCardHeader,
            {
              className: "grow self-start",
              title: localization.AVATAR,
              description: localization.AVATAR_DESCRIPTION,
              isPending,
              classNames
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenu, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Button,
              {
                className: "me-6 size-fit rounded-full",
                size: "icon",
                variant: "ghost",
                children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  UserAvatar,
                  {
                    isPending: isPending || loading,
                    className: "size-20 text-2xl",
                    classNames: classNames == null ? void 0 : classNames.avatar,
                    user: sessionData == null ? void 0 : sessionData.user,
                    localization
                  },
                  sessionData == null ? void 0 : sessionData.user.image
                )
              }
            ) }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              DropdownMenuContent,
              {
                align: "end",
                onCloseAutoFocus: (e) => e.preventDefault(),
                children: [
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                    DropdownMenuItem,
                    {
                      onClick: openFileDialog,
                      disabled: loading,
                      children: [
                        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.UploadCloudIcon, {}),
                        localization.UPLOAD_AVATAR
                      ]
                    }
                  ),
                  (sessionData == null ? void 0 : sessionData.user.image) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                    DropdownMenuItem,
                    {
                      onClick: handleDeleteAvatar,
                      disabled: loading,
                      variant: "destructive",
                      children: [
                        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Trash2Icon, {}),
                        localization.DELETE_AVATAR
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          SettingsCardFooter,
          {
            className: "!py-5",
            instructions: localization.AVATAR_INSTRUCTIONS,
            classNames,
            isPending,
            isSubmitting: loading
          }
        )
      ]
    }
  );
}

// src/components/settings/account/update-field-card.tsx





function UpdateFieldCard({
  className,
  classNames,
  description,
  instructions,
  localization,
  name,
  placeholder,
  required,
  label,
  type,
  value,
  validate
}) {
  const {
    components: {
      CardContent,
      Checkbox,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input,
      Skeleton
    },
    hooks: { useSession },
    mutators: { updateUser },
    localization: contextLocalization,
    optimistic,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { isPending, refetch } = useSession();
  let fieldSchema = z6.unknown();
  if (type === "number") {
    fieldSchema = required ? z6.preprocess(
      (val) => !val ? void 0 : Number(val),
      z6.number({
        required_error: `${label} ${localization.IS_REQUIRED}`,
        invalid_type_error: `${label} ${localization.IS_INVALID}`
      })
    ) : z6.coerce.number({
      invalid_type_error: `${label} ${localization.IS_INVALID}`
    }).optional();
  } else if (type === "boolean") {
    fieldSchema = required ? z6.coerce.boolean({
      required_error: `${label} ${localization.IS_REQUIRED}`,
      invalid_type_error: `${label} ${localization.IS_INVALID}`
    }).refine((val) => val === true, {
      message: `${label} ${localization.IS_REQUIRED}`
    }) : z6.coerce.boolean({
      invalid_type_error: `${label} ${localization.IS_INVALID}`
    });
  } else {
    fieldSchema = required ? z6.string().min(1, `${label} ${localization.IS_REQUIRED}`) : z6.string().optional();
  }
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, z6.object({ [name]: fieldSchema })),
    values: { [name]: value || "" }
  });
  const { isSubmitting } = form.formState;
  const updateField = async (values) => {
    await new Promise((resolve) => setTimeout(resolve));
    const newValue = values[name];
    if (value === newValue) {
      toast({
        variant: "error",
        message: `${label} ${localization.IS_THE_SAME}`
      });
      return;
    }
    if (validate && typeof newValue === "string" && !await validate(newValue)) {
      form.setError(name, {
        message: `${label} ${localization.IS_INVALID}`
      });
      return;
    }
    try {
      await updateUser({ [name]: newValue });
      await (refetch == null ? void 0 : refetch());
      toast({
        variant: "success",
        message: `${label} ${localization.UPDATED_SUCCESSFULLY}`
      });
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "form", { onSubmit: form.handleSubmit(updateField), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SettingsCard,
    {
      className,
      classNames,
      description,
      instructions,
      isPending,
      title: label,
      actionLabel: localization.SAVE,
      optimistic,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardContent, { className: classNames == null ? void 0 : classNames.content, children: type === "boolean" ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        FormField,
        {
          control: form.control,
          name,
          render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { className: "flex", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Checkbox,
              {
                checked: field.value,
                onCheckedChange: field.onChange,
                disabled: isSubmitting,
                className: classNames == null ? void 0 : classNames.checkbox
              }
            ) }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              FormLabel,
              {
                className: classNames == null ? void 0 : classNames.label,
                children: label
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              FormMessage,
              {
                className: classNames == null ? void 0 : classNames.error
              }
            )
          ] })
        }
      ) : isPending ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        Skeleton,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
            "h-9 w-full",
            classNames == null ? void 0 : classNames.skeleton
          )
        }
      ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        FormField,
        {
          control: form.control,
          name,
          render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Input,
              {
                className: classNames == null ? void 0 : classNames.input,
                placeholder: placeholder || (typeof label === "string" ? label : ""),
                type,
                disabled: isSubmitting,
                ...field,
                value: field.value
              }
            ) }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              FormMessage,
              {
                className: classNames == null ? void 0 : classNames.error
              }
            )
          ] })
        }
      ) })
    }
  ) }) });
}

// src/components/settings/account/update-name-card.tsx


function UpdateNameCard({
  className,
  classNames,
  localization,
  ...props
}) {
  const {
    hooks: { useSession },
    localization: contextLocalization,
    nameRequired
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData } = useSession();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    UpdateFieldCard,
    {
      className,
      classNames,
      value: sessionData == null ? void 0 : sessionData.user.name,
      description: localization.NAME_DESCRIPTION,
      name: "name",
      instructions: localization.NAME_INSTRUCTIONS,
      label: localization.NAME,
      localization,
      placeholder: localization.NAME_PLACEHOLDER,
      required: nameRequired,
      ...props
    }
  );
}

// src/components/settings/account/update-username-card.tsx


function UpdateUsernameCard({
  className,
  classNames,
  localization,
  ...props
}) {
  var _a, _b;
  const {
    hooks: { useSession },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData } = useSession();
  const value = ((_a = sessionData == null ? void 0 : sessionData.user) == null ? void 0 : _a.displayUsername) || ((_b = sessionData == null ? void 0 : sessionData.user) == null ? void 0 : _b.username);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    UpdateFieldCard,
    {
      className,
      classNames,
      value,
      description: localization.USERNAME_DESCRIPTION,
      name: "username",
      instructions: localization.USERNAME_INSTRUCTIONS,
      label: localization.USERNAME,
      localization,
      placeholder: localization.USERNAME_PLACEHOLDER,
      required: true,
      ...props
    }
  );
}

// src/components/settings/security/change-email-card.tsx





function ChangeEmailCard({
  className,
  classNames,
  localization,
  ...props
}) {
  const {
    authClient,
    components: {
      CardContent,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormMessage,
      Input,
      Skeleton
    },
    emailVerification,
    hooks: { useSession },
    localization: contextLocalization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData, isPending, refetch } = useSession();
  const [resendDisabled, setResendDisabled] = _react.useState.call(void 0, false);
  const formSchema = z7.object({
    email: z7.string().min(1, { message: localization.EMAIL_REQUIRED }).email({ message: localization.INVALID_EMAIL })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    values: {
      email: (sessionData == null ? void 0 : sessionData.user.email) || ""
    }
  });
  const resendForm = _reacthookform.useForm.call(void 0, );
  const { isSubmitting } = form.formState;
  const changeEmail = async ({ email }) => {
    if (email === (sessionData == null ? void 0 : sessionData.user.email)) {
      await new Promise((resolve) => setTimeout(resolve));
      toast({
        variant: "error",
        message: localization.EMAIL_IS_THE_SAME
      });
      return;
    }
    try {
      await authClient.changeEmail({
        newEmail: email,
        callbackURL: window.location.pathname,
        fetchOptions: { throw: true }
      });
      if (sessionData == null ? void 0 : sessionData.user.emailVerified) {
        toast({
          variant: "success",
          message: localization.EMAIL_VERIFY_CHANGE
        });
      } else {
        await (refetch == null ? void 0 : refetch());
        toast({
          variant: "success",
          message: `${localization.EMAIL} ${localization.UPDATED_SUCCESSFULLY}`
        });
      }
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  };
  const resendVerification = async () => {
    if (!sessionData) return;
    const email = sessionData.user.email;
    setResendDisabled(true);
    try {
      await authClient.sendVerificationEmail({
        email,
        fetchOptions: { throw: true }
      });
      toast({
        variant: "success",
        message: localization.EMAIL_VERIFICATION
      });
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      setResendDisabled(false);
      throw error;
    }
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "form", { noValidate: true, onSubmit: form.handleSubmit(changeEmail), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        className,
        classNames,
        description: localization.EMAIL_DESCRIPTION,
        instructions: localization.EMAIL_INSTRUCTIONS,
        isPending,
        title: localization.EMAIL,
        actionLabel: localization.SAVE,
        ...props,
        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardContent, { className: classNames == null ? void 0 : classNames.content, children: isPending ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Skeleton,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "h-9 w-full",
              classNames == null ? void 0 : classNames.skeleton
            )
          }
        ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.EMAIL_PLACEHOLDER,
                  type: "email",
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                FormMessage,
                {
                  className: classNames == null ? void 0 : classNames.error
                }
              )
            ] })
          }
        ) })
      }
    ) }) }),
    emailVerification && (sessionData == null ? void 0 : sessionData.user) && !(sessionData == null ? void 0 : sessionData.user.emailVerified) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...resendForm, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "form",
      {
        onSubmit: resendForm.handleSubmit(
          resendVerification
        ),
        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          SettingsCard,
          {
            className,
            classNames,
            title: localization.VERIFY_YOUR_EMAIL,
            description: localization.VERIFY_YOUR_EMAIL_DESCRIPTION,
            actionLabel: localization.RESEND_VERIFICATION_EMAIL,
            disabled: resendDisabled,
            ...props
          }
        )
      }
    ) })
  ] });
}

// src/components/settings/account-settings-cards.tsx

function AccountSettingsCards({
  className,
  classNames,
  localization
}) {
  var _a, _b, _c;
  const {
    additionalFields,
    avatar,
    changeEmail,
    credentials,
    hooks: { useSession },
    multiSession,
    settings
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const { data: sessionData } = useSession();
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex w-full flex-col gap-4 md:gap-6",
        className,
        classNames == null ? void 0 : classNames.cards
      ),
      children: [
        ((_a = settings == null ? void 0 : settings.fields) == null ? void 0 : _a.includes("image")) && avatar && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          UpdateAvatarCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ),
        (credentials == null ? void 0 : credentials.username) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          UpdateUsernameCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ),
        ((_b = settings == null ? void 0 : settings.fields) == null ? void 0 : _b.includes("name")) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          UpdateNameCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ),
        changeEmail && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          ChangeEmailCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ),
        (_c = settings == null ? void 0 : settings.fields) == null ? void 0 : _c.map((field) => {
          if (field === "image") return null;
          if (field === "name") return null;
          const additionalField = additionalFields == null ? void 0 : additionalFields[field];
          if (!additionalField) return null;
          const {
            label,
            description,
            instructions,
            placeholder,
            required,
            type,
            validate
          } = additionalField;
          const defaultValue = sessionData == null ? void 0 : sessionData.user[field];
          return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            UpdateFieldCard,
            {
              classNames: classNames == null ? void 0 : classNames.card,
              value: defaultValue,
              description,
              name: field,
              instructions,
              label,
              localization,
              placeholder,
              required,
              type,
              validate
            },
            field
          );
        }),
        multiSession && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          AccountsCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        )
      ]
    }
  );
}

// src/components/settings/api-key/api-keys-card.tsx


// src/components/settings/api-key/api-key-cell.tsx



// src/components/settings/api-key/api-key-delete-dialog.tsx



function ApiKeyDeleteDialog({
  classNames,
  apiKey,
  localization,
  refetch,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    components: {
      Button,
      Card,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle
    },
    localization: contextLocalization,
    mutators: { deleteApiKey },
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { lang } = _chunkZE6BT3OYcjs.useLang.call(void 0, );
  const [isLoading, setIsLoading] = _react.useState.call(void 0, false);
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteApiKey({ keyId: apiKey.id });
      await (refetch == null ? void 0 : refetch());
      onOpenChange == null ? void 0 : onOpenChange(false);
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setIsLoading(false);
  };
  const formatExpiration = () => {
    if (!apiKey.expiresAt) return localization.NEVER_EXPIRES;
    const expiresDate = new Date(apiKey.expiresAt);
    return `${localization.EXPIRES} ${expiresDate.toLocaleDateString(
      _nullishCoalesce(lang, () => ( "en")),
      {
        month: "short",
        day: "numeric",
        year: "numeric"
      }
    )}`;
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DialogContent,
    {
      onOpenAutoFocus: (e) => e.preventDefault(),
      className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content,
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            DialogTitle,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
              children: [
                localization.DELETE,
                " ",
                localization.API_KEY
              ]
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogDescription,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-xs md:text-sm",
                classNames == null ? void 0 : classNames.description
              ),
              children: localization.DELETE_API_KEY_CONFIRM
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          Card,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "my-2 flex-row items-center gap-3 px-4 py-3",
              classNames == null ? void 0 : classNames.cell
            ),
            children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.KeyRoundIcon, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "size-4", classNames == null ? void 0 : classNames.icon) }),
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex flex-col", children: [
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "font-semibold text-sm", children: apiKey.name }),
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: "text-muted-foreground text-sm", children: [
                    apiKey.start,
                    "******"
                  ] })
                ] }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "text-muted-foreground text-xs", children: formatExpiration() })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              type: "button",
              variant: "secondary",
              onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
              disabled: isLoading,
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.secondaryButton
              ),
              children: localization.CANCEL
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            Button,
            {
              type: "button",
              variant: "destructive",
              onClick: handleDelete,
              disabled: isLoading,
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.destructiveButton
              ),
              children: [
                isLoading && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                localization.DELETE
              ]
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/settings/api-key/api-key-cell.tsx

function APIKeyCell({
  className,
  classNames,
  apiKey,
  localization,
  refetch
}) {
  const {
    components: { Button, Card },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { lang } = _chunkZE6BT3OYcjs.useLang.call(void 0, );
  const [showDeleteDialog, setShowDeleteDialog] = _react.useState.call(void 0, false);
  const formatExpiration = () => {
    if (!apiKey.expiresAt) return localization.NEVER_EXPIRES;
    const expiresDate = new Date(apiKey.expiresAt);
    return `${localization.EXPIRES} ${expiresDate.toLocaleDateString(
      _nullishCoalesce(lang, () => ( "en")),
      {
        month: "short",
        day: "numeric",
        year: "numeric"
      }
    )}`;
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      Card,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "flex-row items-center gap-3 truncate px-4 py-3",
          className,
          classNames == null ? void 0 : classNames.cell
        ),
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            _lucidereact.KeyRoundIcon,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "size-4 flex-shrink-0", classNames == null ? void 0 : classNames.icon)
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex flex-col truncate", children: [
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "truncate font-semibold text-sm", children: apiKey.name }),
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: "flex-1 truncate text-muted-foreground text-sm", children: [
                apiKey.start,
                "******"
              ] })
            ] }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "truncate text-muted-foreground text-xs", children: formatExpiration() })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "relative ms-auto",
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.outlineButton
              ),
              size: "sm",
              variant: "outline",
              onClick: () => setShowDeleteDialog(true),
              children: localization.DELETE
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      ApiKeyDeleteDialog,
      {
        classNames,
        apiKey,
        localization,
        open: showDeleteDialog,
        onOpenChange: setShowDeleteDialog,
        refetch
      }
    )
  ] });
}

// src/components/settings/api-key/api-key-display-dialog.tsx



function APIKeyDisplayDialog({
  classNames,
  apiKey,
  localization,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    components: {
      Button,
      Card,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle
    },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const [copied, setCopied] = _react.useState.call(void 0, false);
  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DialogContent,
    {
      onOpenAutoFocus: (e) => e.preventDefault(),
      className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content,
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogTitle,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
              children: localization.API_KEY_CREATED
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogDescription,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-xs md:text-sm",
                classNames == null ? void 0 : classNames.description
              ),
              children: localization.CREATE_API_KEY_SUCCESS
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "break-all rounded-md bg-muted p-4 font-mono text-sm", children: apiKey }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: handleCopy,
              disabled: copied,
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.outlineButton
              ),
              children: copied ? /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.CheckIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.COPIED_TO_CLIPBOARD
              ] }) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.CopyIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.COPY_TO_CLIPBOARD
              ] })
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              type: "button",
              variant: "default",
              onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.primaryButton
              ),
              children: localization.DONE
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/settings/api-key/create-api-key-dialog.tsx






function CreateAPIKeyDialog({
  classNames,
  localization,
  onSuccess,
  refetch,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    authClient,
    apiKey,
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input,
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue
    },
    localization: contextLocalization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { lang } = _chunkZE6BT3OYcjs.useLang.call(void 0, );
  const formSchema = z8.object({
    name: z8.string().min(1, `${localization.NAME} ${localization.IS_REQUIRED}`),
    expiresInDays: z8.string().optional()
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      name: "",
      expiresInDays: "none"
    }
  });
  const { isSubmitting } = form.formState;
  const onSubmit = async (values) => {
    try {
      const expiresIn = values.expiresInDays && values.expiresInDays !== "none" ? Number.parseInt(values.expiresInDays) * 60 * 60 * 24 : void 0;
      const result = await authClient.apiKey.create({
        name: values.name,
        expiresIn,
        prefix: typeof apiKey === "object" ? apiKey.prefix : void 0,
        metadata: typeof apiKey === "object" ? apiKey.metadata : void 0,
        fetchOptions: { throw: true }
      });
      await (refetch == null ? void 0 : refetch());
      onSuccess(result.key);
      onOpenChange == null ? void 0 : onOpenChange(false);
      form.reset();
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  };
  const rtf = new Intl.RelativeTimeFormat(_nullishCoalesce(lang, () => ( "en")));
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DialogContent,
    {
      onOpenAutoFocus: (e) => e.preventDefault(),
      className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content,
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogTitle,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
              children: localization.CREATE_API_KEY
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogDescription,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-xs md:text-sm",
                classNames == null ? void 0 : classNames.description
              ),
              children: localization.CREATE_API_KEY_DESCRIPTION
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          "form",
          {
            onSubmit: form.handleSubmit(onSubmit),
            className: "space-y-6",
            children: [
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex gap-4", children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  FormField,
                  {
                    control: form.control,
                    name: "name",
                    render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { className: "flex-1", children: [
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                        FormLabel,
                        {
                          className: classNames == null ? void 0 : classNames.label,
                          children: localization.NAME
                        }
                      ),
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                        Input,
                        {
                          className: classNames == null ? void 0 : classNames.input,
                          placeholder: localization.API_KEY_NAME_PLACEHOLDER,
                          autoFocus: true,
                          disabled: isSubmitting,
                          ...field
                        }
                      ) }),
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, {})
                    ] })
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  FormField,
                  {
                    control: form.control,
                    name: "expiresInDays",
                    render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                        FormLabel,
                        {
                          className: classNames == null ? void 0 : classNames.label,
                          children: localization.EXPIRES
                        }
                      ),
                      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                        Select,
                        {
                          onValueChange: field.onChange,
                          defaultValue: field.value,
                          disabled: isSubmitting,
                          children: [
                            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                              SelectTrigger,
                              {
                                className: classNames == null ? void 0 : classNames.input,
                                children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                                  SelectValue,
                                  {
                                    placeholder: localization.NO_EXPIRATION
                                  }
                                )
                              }
                            ) }),
                            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, SelectContent, { children: [
                              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectItem, { value: "none", children: localization.NO_EXPIRATION }),
                              [
                                1,
                                7,
                                30,
                                60,
                                90,
                                180,
                                365
                              ].map((days) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                                SelectItem,
                                {
                                  value: days.toString(),
                                  children: days === 365 ? rtf.format(
                                    1,
                                    "year"
                                  ) : rtf.format(
                                    days,
                                    "day"
                                  )
                                },
                                days
                              ))
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, {})
                    ] })
                  }
                )
              ] }),
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
                    className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                      classNames == null ? void 0 : classNames.button,
                      classNames == null ? void 0 : classNames.outlineButton
                    ),
                    disabled: isSubmitting,
                    children: localization.CANCEL
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                  Button,
                  {
                    type: "submit",
                    variant: "default",
                    className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                      classNames == null ? void 0 : classNames.button,
                      classNames == null ? void 0 : classNames.primaryButton
                    ),
                    disabled: isSubmitting,
                    children: [
                      isSubmitting && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                      localization.CREATE_API_KEY
                    ]
                  }
                )
              ] })
            ]
          }
        ) })
      ]
    }
  ) });
}

// src/components/settings/api-key/api-keys-card.tsx

function APIKeysCard({
  className,
  classNames,
  localization,
  ...props
}) {
  const {
    components: { CardContent },
    hooks: { useListApiKeys },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: apiKeys, isPending, refetch } = useListApiKeys();
  const [createDialogOpen, setCreateDialogOpen] = _react.useState.call(void 0, false);
  const [displayDialogOpen, setDisplayDialogOpen] = _react.useState.call(void 0, false);
  const [createdApiKey, setCreatedApiKey] = _react.useState.call(void 0, "");
  const handleCreateApiKey = (apiKey) => {
    setCreatedApiKey(apiKey);
    setDisplayDialogOpen(true);
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        className,
        classNames,
        actionLabel: localization.CREATE_API_KEY,
        description: localization.API_KEYS_DESCRIPTION,
        instructions: localization.API_KEYS_INSTRUCTIONS,
        isPending,
        title: localization.API_KEYS,
        action: () => setCreateDialogOpen(true),
        ...props,
        children: apiKeys && apiKeys.length > 0 && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          CardContent,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid gap-4", classNames == null ? void 0 : classNames.content),
            children: apiKeys == null ? void 0 : apiKeys.map((apiKey) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              APIKeyCell,
              {
                classNames,
                apiKey,
                localization,
                refetch
              },
              apiKey.id
            ))
          }
        )
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      CreateAPIKeyDialog,
      {
        classNames,
        localization,
        open: createDialogOpen,
        onOpenChange: setCreateDialogOpen,
        onSuccess: handleCreateApiKey,
        refetch
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      APIKeyDisplayDialog,
      {
        classNames,
        apiKey: createdApiKey,
        localization,
        open: displayDialogOpen,
        onOpenChange: setDisplayDialogOpen
      }
    )
  ] });
}

// src/components/settings/security-settings-cards.tsx


// src/components/settings/account/delete-account-card.tsx


// src/components/settings/account/delete-account-dialog.tsx






function DeleteAccountDialog({
  classNames,
  accounts,
  localization,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    authClient,
    basePath,
    baseURL,
    components: {
      Button,
      Card,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input
    },
    deleteUser,
    freshAge,
    hooks: { useSession },
    localization: contextLocalization,
    viewPaths,
    navigate,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData } = useSession();
  const session = sessionData == null ? void 0 : sessionData.session;
  const user = sessionData == null ? void 0 : sessionData.user;
  const isFresh = session ? Date.now() - (session == null ? void 0 : session.createdAt.getTime()) < freshAge * 1e3 : false;
  const credentialsLinked = accounts == null ? void 0 : accounts.some(
    (acc) => acc.provider === "credential"
  );
  const formSchema = z9.object({
    password: credentialsLinked ? z9.string().min(1, { message: localization.PASSWORD_REQUIRED }) : z9.string().optional()
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      password: ""
    }
  });
  const { isSubmitting } = form.formState;
  const deleteAccount = async ({ password }) => {
    const params = {};
    if (credentialsLinked) {
      params.password = password;
    } else if (!isFresh) {
      navigate(`${basePath}/${viewPaths.SIGN_OUT}`);
      return;
    }
    if (deleteUser == null ? void 0 : deleteUser.verification) {
      params.callbackURL = `${baseURL}${basePath}/${viewPaths.SIGN_OUT}`;
    }
    try {
      await authClient.deleteUser({
        ...params,
        fetchOptions: {
          throw: true
        }
      });
      if (deleteUser == null ? void 0 : deleteUser.verification) {
        toast({
          variant: "success",
          message: localization.DELETE_ACCOUNT_VERIFY
        });
      } else {
        toast({
          variant: "success",
          message: localization.DELETE_ACCOUNT_SUCCESS
        });
        navigate(`${basePath}/${viewPaths.SIGN_OUT}`);
      }
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    onOpenChange == null ? void 0 : onOpenChange(false);
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DialogContent,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "sm:max-w-md", (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content),
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogTitle,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
              children: localization == null ? void 0 : localization.DELETE_ACCOUNT
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogDescription,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-xs md:text-sm",
                classNames == null ? void 0 : classNames.description
              ),
              children: isFresh ? localization == null ? void 0 : localization.DELETE_ACCOUNT_INSTRUCTIONS : localization == null ? void 0 : localization.SESSION_NOT_FRESH
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Card, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "my-2 flex-row p-4", classNames == null ? void 0 : classNames.cell), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, UserView, { user, localization }) }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          "form",
          {
            onSubmit: form.handleSubmit(deleteAccount),
            className: "grid gap-6",
            children: [
              credentialsLinked && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                FormField,
                {
                  control: form.control,
                  name: "password",
                  render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      FormLabel,
                      {
                        className: classNames == null ? void 0 : classNames.label,
                        children: localization == null ? void 0 : localization.PASSWORD
                      }
                    ),
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      Input,
                      {
                        autoComplete: "current-password",
                        placeholder: localization == null ? void 0 : localization.PASSWORD_PLACEHOLDER,
                        type: "password",
                        className: classNames == null ? void 0 : classNames.input,
                        ...field
                      }
                    ) }),
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      FormMessage,
                      {
                        className: classNames == null ? void 0 : classNames.error
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Button,
                  {
                    type: "button",
                    variant: "secondary",
                    className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                      classNames == null ? void 0 : classNames.button,
                      classNames == null ? void 0 : classNames.secondaryButton
                    ),
                    onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
                    children: localization.CANCEL
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                  Button,
                  {
                    className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                      classNames == null ? void 0 : classNames.button,
                      classNames == null ? void 0 : classNames.destructiveButton
                    ),
                    disabled: isSubmitting,
                    variant: "destructive",
                    type: "submit",
                    children: [
                      isSubmitting && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                      isFresh ? localization == null ? void 0 : localization.DELETE_ACCOUNT : localization == null ? void 0 : localization.SIGN_OUT
                    ]
                  }
                )
              ] })
            ]
          }
        ) })
      ]
    }
  ) });
}

// src/components/settings/account/delete-account-card.tsx

function DeleteAccountCard({
  className,
  classNames,
  accounts,
  isPending,
  localization,
  skipHook
}) {
  const {
    hooks: { useListAccounts },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const [showDialog, setShowDialog] = _react.useState.call(void 0, false);
  if (!skipHook) {
    const result = useListAccounts();
    accounts = result.data;
    isPending = result.isPending;
  }
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        className,
        classNames,
        actionLabel: localization == null ? void 0 : localization.DELETE_ACCOUNT,
        description: localization == null ? void 0 : localization.DELETE_ACCOUNT_DESCRIPTION,
        isPending,
        title: localization == null ? void 0 : localization.DELETE_ACCOUNT,
        variant: "destructive",
        action: () => setShowDialog(true)
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      DeleteAccountDialog,
      {
        classNames,
        accounts,
        localization,
        open: showDialog,
        onOpenChange: setShowDialog
      }
    )
  ] });
}

// src/components/settings/passkey/passkeys-card.tsx



// src/components/settings/shared/session-freshness-dialog.tsx


function SessionFreshnessDialog({
  classNames,
  localization,
  title,
  description,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    basePath,
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle
    },
    localization: contextLocalization,
    viewPaths,
    navigate
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const handleSignOut = () => {
    navigate(`${basePath}/${viewPaths.SIGN_OUT}`);
    onOpenChange == null ? void 0 : onOpenChange(false);
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DialogContent,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "sm:max-w-md", (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content),
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogTitle,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
              children: title || (localization == null ? void 0 : localization.SESSION_EXPIRED) || "Session Expired"
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogDescription,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-xs md:text-sm",
                classNames == null ? void 0 : classNames.description
              ),
              children: description || (localization == null ? void 0 : localization.SESSION_NOT_FRESH)
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              type: "button",
              variant: "secondary",
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.secondaryButton
              ),
              onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
              children: localization.CANCEL
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.primaryButton
              ),
              variant: "default",
              onClick: handleSignOut,
              children: localization == null ? void 0 : localization.SIGN_OUT
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/settings/passkey/passkey-cell.tsx



function PasskeyCell({
  className,
  classNames,
  localization,
  passkey
}) {
  const {
    components: { Button, Card },
    freshAge,
    hooks: { useSession, useListPasskeys },
    localization: contextLocalization,
    mutators: { deletePasskey },
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { refetch } = useListPasskeys();
  const { data: sessionData } = useSession();
  const session = sessionData == null ? void 0 : sessionData.session;
  const isFresh = session ? Date.now() - (session == null ? void 0 : session.createdAt.getTime()) < freshAge * 1e3 : false;
  const [showFreshnessDialog, setShowFreshnessDialog] = _react.useState.call(void 0, false);
  const [isLoading, setIsLoading] = _react.useState.call(void 0, false);
  const handleDeletePasskey = async () => {
    if (!isFresh) {
      setShowFreshnessDialog(true);
      return;
    }
    setIsLoading(true);
    try {
      await deletePasskey({ id: passkey.id });
      refetch == null ? void 0 : refetch();
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SessionFreshnessDialog,
      {
        open: showFreshnessDialog,
        onOpenChange: setShowFreshnessDialog,
        classNames,
        localization
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      Card,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "flex-row items-center p-4",
          className,
          classNames == null ? void 0 : classNames.cell
        ),
        children: [
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              _lucidereact.FingerprintIcon,
              {
                className: _chunkQB6CPTMTcjs.cn.call(void 0, "size-4", classNames == null ? void 0 : classNames.icon)
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "text-sm", children: passkey.createdAt.toLocaleString() })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            Button,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "relative ms-auto",
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.outlineButton
              ),
              disabled: isLoading,
              size: "sm",
              variant: "outline",
              onClick: handleDeletePasskey,
              children: [
                isLoading && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                localization.DELETE
              ]
            }
          )
        ]
      }
    )
  ] });
}

// src/components/settings/passkey/passkeys-card.tsx

function PasskeysCard({
  className,
  classNames,
  localization
}) {
  const {
    authClient,
    components: { CardContent },
    freshAge,
    hooks: { useListPasskeys, useSession },
    localization: authLocalization2,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...authLocalization2, ...localization };
  const { data: passkeys, isPending, refetch } = useListPasskeys();
  const { data: sessionData } = useSession();
  const session = sessionData == null ? void 0 : sessionData.session;
  const isFresh = session ? Date.now() - (session == null ? void 0 : session.createdAt.getTime()) < freshAge * 1e3 : false;
  const [showFreshnessDialog, setShowFreshnessDialog] = _react.useState.call(void 0, false);
  const addPasskey = async () => {
    if (!isFresh) {
      setShowFreshnessDialog(true);
      return;
    }
    try {
      await authClient.passkey.addPasskey({
        fetchOptions: { throw: true }
      });
      await (refetch == null ? void 0 : refetch());
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  };
  const form = _reacthookform.useForm.call(void 0, );
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SessionFreshnessDialog,
      {
        open: showFreshnessDialog,
        onOpenChange: setShowFreshnessDialog,
        classNames,
        localization
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkZE6BT3OYcjs.Form, { ...form, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "form", { onSubmit: form.handleSubmit(addPasskey), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        className,
        classNames,
        actionLabel: localization.ADD_PASSKEY,
        description: localization.PASSKEYS_DESCRIPTION,
        instructions: localization.PASSKEYS_INSTRUCTIONS,
        isPending,
        title: localization.PASSKEYS,
        children: passkeys && passkeys.length > 0 && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          CardContent,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "grid gap-4",
              classNames == null ? void 0 : classNames.content
            ),
            children: passkeys == null ? void 0 : passkeys.map((passkey) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              PasskeyCell,
              {
                classNames,
                localization,
                passkey
              },
              passkey.id
            ))
          }
        )
      }
    ) }) })
  ] });
}

// src/components/settings/providers/providers-card.tsx


// src/components/settings/skeletons/settings-cell-skeleton.tsx


function SettingsCellSkeleton({
  classNames
}) {
  const {
    components: { Card, Skeleton }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Card,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex-row items-center gap-3 px-4 py-3",
        classNames == null ? void 0 : classNames.cell
      ),
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Skeleton,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "size-5 rounded-full", classNames == null ? void 0 : classNames.skeleton)
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Skeleton,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "h-4 w-24", classNames == null ? void 0 : classNames.skeleton)
            }
          ) })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Skeleton,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, "ms-auto size-8 w-12", classNames == null ? void 0 : classNames.skeleton)
          }
        )
      ]
    }
  );
}

// src/components/settings/providers/provider-cell.tsx



function ProviderCell({
  className,
  classNames,
  account,
  localization,
  other,
  provider,
  refetch
}) {
  const {
    authClient,
    basePath,
    baseURL,
    components: { Button, Card },
    localization: contextLocalization,
    mutators: { unlinkAccount },
    viewPaths,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const [isLoading, setIsLoading] = _react.useState.call(void 0, false);
  const handleLink = async () => {
    setIsLoading(true);
    const callbackURL = `${baseURL}${basePath}/${viewPaths.CALLBACK}?redirectTo=${window.location.pathname}`;
    try {
      if (other) {
        await authClient.oauth2.link({
          providerId: provider.provider,
          callbackURL,
          fetchOptions: { throw: true }
        });
      } else {
        await authClient.linkSocial({
          provider: provider.provider,
          callbackURL,
          fetchOptions: { throw: true }
        });
      }
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      setIsLoading(false);
    }
  };
  const handleUnlink = async () => {
    setIsLoading(true);
    try {
      await unlinkAccount({
        accountId: account == null ? void 0 : account.accountId,
        providerId: provider.provider
      });
      await (refetch == null ? void 0 : refetch());
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setIsLoading(false);
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Card,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex-row items-center gap-3 px-4 py-3",
        className,
        classNames == null ? void 0 : classNames.cell
      ),
      children: [
        provider.icon && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, provider.icon, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "size-4", classNames == null ? void 0 : classNames.icon) }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "text-sm", children: provider.name }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          Button,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, "relative ms-auto", classNames == null ? void 0 : classNames.button),
            disabled: isLoading,
            size: "sm",
            type: "button",
            variant: account ? "outline" : "default",
            onClick: account ? handleUnlink : handleLink,
            children: [
              isLoading && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
              account ? localization.UNLINK : localization.LINK
            ]
          }
        )
      ]
    }
  );
}

// src/components/settings/providers/providers-card.tsx

function ProvidersCard({
  className,
  classNames,
  accounts,
  isPending,
  localization,
  skipHook,
  refetch
}) {
  var _a, _b, _c;
  const {
    components: { CardContent },
    hooks: { useListAccounts },
    localization: contextLocalization,
    social,
    genericOAuth
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  if (!skipHook) {
    const result = useListAccounts();
    accounts = result.data;
    isPending = result.isPending;
    refetch = result.refetch;
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SettingsCard,
    {
      className,
      classNames,
      title: localization.PROVIDERS,
      description: localization.PROVIDERS_DESCRIPTION,
      isPending,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardContent, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid gap-4", classNames == null ? void 0 : classNames.content), children: isPending ? (_a = social == null ? void 0 : social.providers) == null ? void 0 : _a.map((provider) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        SettingsCellSkeleton,
        {
          classNames
        },
        provider
      )) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
        (_b = social == null ? void 0 : social.providers) == null ? void 0 : _b.map((provider) => {
          const socialProvider = socialProviders.find(
            (socialProvider2) => socialProvider2.provider === provider
          );
          if (!socialProvider) return null;
          return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            ProviderCell,
            {
              classNames,
              account: accounts == null ? void 0 : accounts.find(
                (acc) => acc.provider === provider
              ),
              provider: socialProvider,
              refetch
            },
            provider
          );
        }),
        (_c = genericOAuth == null ? void 0 : genericOAuth.providers) == null ? void 0 : _c.map((provider) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          ProviderCell,
          {
            classNames,
            account: accounts == null ? void 0 : accounts.find(
              (acc) => acc.provider === provider.provider
            ),
            provider,
            refetch,
            other: true
          },
          provider.provider
        ))
      ] }) })
    }
  );
}

// src/components/settings/security/change-password-card.tsx





// src/components/password-input.tsx



function PasswordInput({
  className,
  enableToggle,
  onChange,
  ...props
}) {
  const [disabled, setDisabled] = _react.useState.call(void 0, true);
  const [isVisible, setIsVisible] = _react.useState.call(void 0, false);
  const {
    components: { Button, Input }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "relative", children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      Input,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, enableToggle && "pr-10", className),
        ...props,
        type: isVisible && enableToggle ? "text" : "password",
        onChange: (event) => {
          setDisabled(!event.target.value);
          onChange == null ? void 0 : onChange(event);
        }
      }
    ),
    enableToggle && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        Button,
        {
          className: "!bg-transparent absolute top-0 right-0",
          disabled,
          size: "icon",
          type: "button",
          variant: "ghost",
          onClick: () => setIsVisible(!isVisible),
          children: isVisible ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.EyeIcon, {}) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.EyeOffIcon, {})
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "style", { children: `
                        .hide-password-toggle::-ms-reveal,
                        .hide-password-toggle::-ms-clear {
                            visibility: hidden;
                            pointer-events: none;
                            display: none;
                        }
                    ` })
    ] })
  ] });
}

// src/components/settings/skeletons/input-field-skeleton.tsx


function InputFieldSkeleton({
  classNames
}) {
  const {
    components: { Skeleton }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Skeleton, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "h-4 w-32", classNames == null ? void 0 : classNames.skeleton) }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Skeleton, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "h-9 w-full", classNames == null ? void 0 : classNames.skeleton) })
  ] });
}

// src/components/settings/security/change-password-card.tsx

function ChangePasswordCard({
  className,
  classNames,
  accounts,
  isPending,
  localization,
  skipHook,
  passwordValidation
}) {
  const {
    authClient,
    basePath,
    baseURL,
    components: {
      CardContent,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage
    },
    credentials,
    hooks: { useSession, useListAccounts },
    localization: contextLocalization,
    viewPaths,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const confirmPasswordEnabled = credentials == null ? void 0 : credentials.confirmPassword;
  const contextPasswordValidation = credentials == null ? void 0 : credentials.passwordValidation;
  localization = { ...contextLocalization, ...localization };
  passwordValidation = { ...contextPasswordValidation, ...passwordValidation };
  const { data: sessionData } = useSession();
  if (!skipHook) {
    const result = useListAccounts();
    accounts = result.data;
    isPending = result.isPending;
  }
  const formSchema = z10.object({
    currentPassword: _chunkQB6CPTMTcjs.getPasswordSchema.call(void 0, 
      passwordValidation,
      localization
    ),
    newPassword: _chunkQB6CPTMTcjs.getPasswordSchema.call(void 0, passwordValidation, {
      PASSWORD_REQUIRED: localization.NEW_PASSWORD_REQUIRED,
      PASSWORD_TOO_SHORT: localization.PASSWORD_TOO_SHORT,
      PASSWORD_TOO_LONG: localization.PASSWORD_TOO_LONG,
      INVALID_PASSWORD: localization.INVALID_PASSWORD
    }),
    confirmPassword: confirmPasswordEnabled ? _chunkQB6CPTMTcjs.getPasswordSchema.call(void 0, passwordValidation, {
      PASSWORD_REQUIRED: localization.CONFIRM_PASSWORD_REQUIRED,
      PASSWORD_TOO_SHORT: localization.PASSWORD_TOO_SHORT,
      PASSWORD_TOO_LONG: localization.PASSWORD_TOO_LONG,
      INVALID_PASSWORD: localization.INVALID_PASSWORD
    }) : z10.string().optional()
  }).refine(
    (data) => !confirmPasswordEnabled || data.newPassword === data.confirmPassword,
    {
      message: localization.PASSWORDS_DO_NOT_MATCH,
      path: ["confirmPassword"]
    }
  );
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    }
  });
  const setPasswordForm = _reacthookform.useForm.call(void 0, );
  const { isSubmitting } = form.formState;
  const setPassword = async () => {
    if (!sessionData) return;
    const email = sessionData == null ? void 0 : sessionData.user.email;
    try {
      await authClient.requestPasswordReset({
        email,
        redirectTo: `${baseURL}${basePath}/${viewPaths.RESET_PASSWORD}`,
        fetchOptions: { throw: true }
      });
      toast({
        variant: "success",
        message: localization.FORGOT_PASSWORD_EMAIL
      });
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  };
  const changePassword = async ({
    currentPassword,
    newPassword
  }) => {
    try {
      await authClient.changePassword({
        currentPassword,
        newPassword,
        revokeOtherSessions: true,
        fetchOptions: { throw: true }
      });
      toast({
        variant: "success",
        message: localization.CHANGE_PASSWORD_SUCCESS
      });
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    form.reset();
  };
  const credentialsLinked = accounts == null ? void 0 : accounts.some(
    (acc) => acc.provider === "credential"
  );
  if (!isPending && !credentialsLinked) {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...setPasswordForm, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "form", { onSubmit: setPasswordForm.handleSubmit(setPassword), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        title: localization.SET_PASSWORD,
        description: localization.SET_PASSWORD_DESCRIPTION,
        actionLabel: localization.SET_PASSWORD,
        isPending,
        className,
        classNames
      }
    ) }) });
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "form", { onSubmit: form.handleSubmit(changePassword), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SettingsCard,
    {
      className,
      classNames,
      actionLabel: localization.SAVE,
      description: localization.CHANGE_PASSWORD_DESCRIPTION,
      instructions: localization.CHANGE_PASSWORD_INSTRUCTIONS,
      isPending,
      title: localization.CHANGE_PASSWORD,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        CardContent,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid gap-6", classNames == null ? void 0 : classNames.content),
          children: isPending || !accounts ? /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputFieldSkeleton, { classNames }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputFieldSkeleton, { classNames }),
            confirmPasswordEnabled && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              InputFieldSkeleton,
              {
                classNames
              }
            )
          ] }) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              FormField,
              {
                control: form.control,
                name: "currentPassword",
                render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    FormLabel,
                    {
                      className: classNames == null ? void 0 : classNames.label,
                      children: localization.CURRENT_PASSWORD
                    }
                  ),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    PasswordInput,
                    {
                      className: classNames == null ? void 0 : classNames.input,
                      autoComplete: "current-password",
                      placeholder: localization.CURRENT_PASSWORD_PLACEHOLDER,
                      disabled: isSubmitting,
                      ...field
                    }
                  ) }),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    FormMessage,
                    {
                      className: classNames == null ? void 0 : classNames.error
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              FormField,
              {
                control: form.control,
                name: "newPassword",
                render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    FormLabel,
                    {
                      className: classNames == null ? void 0 : classNames.label,
                      children: localization.NEW_PASSWORD
                    }
                  ),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    PasswordInput,
                    {
                      className: classNames == null ? void 0 : classNames.input,
                      autoComplete: "new-password",
                      disabled: isSubmitting,
                      placeholder: localization.NEW_PASSWORD_PLACEHOLDER,
                      enableToggle: true,
                      ...field
                    }
                  ) }),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    FormMessage,
                    {
                      className: classNames == null ? void 0 : classNames.error
                    }
                  )
                ] })
              }
            ),
            confirmPasswordEnabled && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              FormField,
              {
                control: form.control,
                name: "confirmPassword",
                render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    FormLabel,
                    {
                      className: classNames == null ? void 0 : classNames.label,
                      children: localization.CONFIRM_PASSWORD
                    }
                  ),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    PasswordInput,
                    {
                      className: classNames == null ? void 0 : classNames.input,
                      autoComplete: "new-password",
                      placeholder: localization.CONFIRM_PASSWORD_PLACEHOLDER,
                      disabled: isSubmitting,
                      enableToggle: true,
                      ...field
                    }
                  ) }),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    FormMessage,
                    {
                      className: classNames == null ? void 0 : classNames.error
                    }
                  )
                ] })
              }
            )
          ] })
        }
      )
    }
  ) }) });
}

// src/components/settings/security/sessions-card.tsx


// src/components/settings/security/session-cell.tsx


var _uaparserjs = require('ua-parser-js');

function SessionCell({
  className,
  classNames,
  localization,
  session,
  refetch
}) {
  var _a;
  const {
    basePath,
    components: { Button, Card },
    hooks: { useSession },
    localization: contextLocalization,
    mutators: { revokeSession },
    viewPaths,
    navigate,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData } = useSession();
  const isCurrentSession = session.id === ((_a = sessionData == null ? void 0 : sessionData.session) == null ? void 0 : _a.id);
  const [isLoading, setIsLoading] = _react.useState.call(void 0, false);
  const handleRevoke = async () => {
    setIsLoading(true);
    if (isCurrentSession) {
      navigate(`${basePath}/${viewPaths.SIGN_OUT}`);
      return;
    }
    try {
      await revokeSession({ token: session.token });
      refetch == null ? void 0 : refetch();
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      setIsLoading(false);
    }
  };
  const parser = _uaparserjs.UAParser.call(void 0, session.userAgent);
  const isMobile = parser.device.type === "mobile";
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Card,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex-row items-center gap-3 px-4 py-3",
        className,
        classNames == null ? void 0 : classNames.cell
      ),
      children: [
        isMobile ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.SmartphoneIcon, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "size-4", classNames == null ? void 0 : classNames.icon) }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.LaptopIcon, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "size-4", classNames == null ? void 0 : classNames.icon) }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex flex-col", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "font-semibold text-sm", children: isCurrentSession ? localization.CURRENT_SESSION : session == null ? void 0 : session.ipAddress }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: "text-muted-foreground text-xs", children: [
            parser.os.name,
            ", ",
            parser.browser.name
          ] })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          Button,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "relative ms-auto",
              classNames == null ? void 0 : classNames.button,
              classNames == null ? void 0 : classNames.outlineButton
            ),
            disabled: isLoading,
            size: "sm",
            variant: "outline",
            onClick: handleRevoke,
            children: [
              isLoading && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
              isCurrentSession ? localization.SIGN_OUT : localization.REVOKE
            ]
          }
        )
      ]
    }
  );
}

// src/components/settings/security/sessions-card.tsx

function SessionsCard({
  className,
  classNames,
  localization
}) {
  const {
    components: { CardContent },
    hooks: { useListSessions },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessions, isPending, refetch } = useListSessions();
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    SettingsCard,
    {
      className,
      classNames,
      description: localization.SESSIONS_DESCRIPTION,
      isPending,
      title: localization.SESSIONS,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardContent, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid gap-4", classNames == null ? void 0 : classNames.content), children: isPending ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SettingsCellSkeleton, { classNames }) : sessions == null ? void 0 : sessions.map((session) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        SessionCell,
        {
          classNames,
          localization,
          session,
          refetch
        },
        session.id
      )) })
    }
  );
}

// src/components/settings/two-factor/two-factor-card.tsx


// src/components/settings/two-factor/two-factor-password-dialog.tsx






// src/components/settings/two-factor/backup-codes-dialog.tsx



function BackupCodesDialog({
  classNames,
  backupCodes,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle
    },
    localization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const [copied, setCopied] = _react.useState.call(void 0, false);
  const handleCopy = () => {
    const codeText = backupCodes.join("\n");
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    DialogContent,
    {
      onOpenAutoFocus: (e) => e.preventDefault(),
      className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content,
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogTitle,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-lg md:text-xl", classNames == null ? void 0 : classNames.title),
              children: localization.BACKUP_CODES
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DialogDescription,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-xs md:text-sm",
                classNames == null ? void 0 : classNames.description
              ),
              children: localization.BACKUP_CODES_DESCRIPTION
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "grid grid-cols-2 gap-2", children: backupCodes.map((code, index) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "div",
          {
            className: "rounded-md bg-muted p-2 text-center font-mono text-sm",
            children: code
          },
          index
        )) }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: handleCopy,
              disabled: copied,
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.outlineButton
              ),
              children: copied ? /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.CheckIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.COPIED_TO_CLIPBOARD
              ] }) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.CopyIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.COPY_ALL_CODES
              ] })
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              type: "button",
              variant: "default",
              onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.primaryButton
              ),
              children: localization.CONTINUE
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/settings/two-factor/two-factor-password-dialog.tsx

function TwoFactorPasswordDialog({
  classNames,
  onOpenChange,
  isTwoFactorEnabled,
  ...props
}) {
  var _a, _b;
  const {
    localization,
    authClient,
    basePath,
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage
    },
    viewPaths,
    navigate,
    toast,
    twoFactor
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const [showBackupCodesDialog, setShowBackupCodesDialog] = _react.useState.call(void 0, false);
  const [backupCodes, setBackupCodes] = _react.useState.call(void 0, []);
  const [totpURI, setTotpURI] = _react.useState.call(void 0, null);
  const formSchema = z11.object({
    password: z11.string().min(1, { message: localization.PASSWORD_REQUIRED })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      password: ""
    }
  });
  const { isSubmitting } = form.formState;
  async function enableTwoFactor({ password }) {
    try {
      const response = await authClient.twoFactor.enable({
        password,
        fetchOptions: { throw: true }
      });
      onOpenChange == null ? void 0 : onOpenChange(false);
      setBackupCodes(response.backupCodes);
      if (twoFactor == null ? void 0 : twoFactor.includes("totp")) {
        setTotpURI(response.totpURI);
      }
      setTimeout(() => {
        setShowBackupCodesDialog(true);
      }, 250);
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  }
  async function disableTwoFactor({ password }) {
    try {
      await authClient.twoFactor.disable({
        password,
        fetchOptions: { throw: true }
      });
      toast({
        variant: "success",
        message: localization.TWO_FACTOR_DISABLED
      });
      onOpenChange == null ? void 0 : onOpenChange(false);
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      DialogContent,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, "sm:max-w-md", classNames == null ? void 0 : classNames.dialog),
        children: [
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogHeader, { className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.header, children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DialogTitle, { className: classNames == null ? void 0 : classNames.title, children: localization.TWO_FACTOR }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DialogDescription, { className: classNames == null ? void 0 : classNames.description, children: isTwoFactorEnabled ? localization.TWO_FACTOR_DISABLE_INSTRUCTIONS : localization.TWO_FACTOR_ENABLE_INSTRUCTIONS })
          ] }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            "form",
            {
              onSubmit: form.handleSubmit(
                isTwoFactorEnabled ? disableTwoFactor : enableTwoFactor
              ),
              className: "grid gap-4",
              children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  FormField,
                  {
                    control: form.control,
                    name: "password",
                    render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                        FormLabel,
                        {
                          className: classNames == null ? void 0 : classNames.label,
                          children: localization.PASSWORD
                        }
                      ),
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                        PasswordInput,
                        {
                          className: classNames == null ? void 0 : classNames.input,
                          placeholder: localization.PASSWORD_PLACEHOLDER,
                          autoComplete: "current-password",
                          ...field
                        }
                      ) }),
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                        FormMessage,
                        {
                          className: classNames == null ? void 0 : classNames.error
                        }
                      )
                    ] })
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                  DialogFooter,
                  {
                    className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.footer,
                    children: [
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                        Button,
                        {
                          type: "button",
                          variant: "secondary",
                          onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
                          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                            classNames == null ? void 0 : classNames.button,
                            classNames == null ? void 0 : classNames.secondaryButton
                          ),
                          children: localization.CANCEL
                        }
                      ),
                      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                        Button,
                        {
                          type: "submit",
                          disabled: isSubmitting,
                          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                            classNames == null ? void 0 : classNames.button,
                            classNames == null ? void 0 : classNames.primaryButton
                          ),
                          children: [
                            isSubmitting && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                            isTwoFactorEnabled ? localization.DISABLE_TWO_FACTOR : localization.ENABLE_TWO_FACTOR
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      BackupCodesDialog,
      {
        classNames,
        open: showBackupCodesDialog,
        onOpenChange: (open) => {
          setShowBackupCodesDialog(open);
          if (!open) {
            const url = `${basePath}/${viewPaths.TWO_FACTOR}`;
            navigate(
              (twoFactor == null ? void 0 : twoFactor.includes("totp")) && totpURI ? `${url}?totpURI=${totpURI}` : url
            );
          }
        },
        backupCodes
      }
    )
  ] });
}

// src/components/settings/two-factor/two-factor-card.tsx

function TwoFactorCard({
  className,
  classNames,
  localization
}) {
  var _a;
  const {
    localization: contextLocalization,
    hooks: { useSession }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const [showPasswordDialog, setShowPasswordDialog] = _react.useState.call(void 0, false);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData, isPending } = useSession();
  const isTwoFactorEnabled = (_a = sessionData == null ? void 0 : sessionData.user) == null ? void 0 : _a.twoFactorEnabled;
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCard,
      {
        className,
        classNames,
        actionLabel: isTwoFactorEnabled ? localization.DISABLE_TWO_FACTOR : localization.ENABLE_TWO_FACTOR,
        description: localization.TWO_FACTOR_CARD_DESCRIPTION,
        instructions: isTwoFactorEnabled ? localization.TWO_FACTOR_DISABLE_INSTRUCTIONS : localization.TWO_FACTOR_ENABLE_INSTRUCTIONS,
        isPending,
        title: localization.TWO_FACTOR,
        action: () => setShowPasswordDialog(true)
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      TwoFactorPasswordDialog,
      {
        classNames,
        open: showPasswordDialog,
        onOpenChange: setShowPasswordDialog,
        isTwoFactorEnabled: !!isTwoFactorEnabled
      }
    )
  ] });
}

// src/components/settings/security-settings-cards.tsx

function SecuritySettingsCards({
  className,
  classNames,
  localization
}) {
  var _a, _b;
  const {
    credentials,
    deleteUser,
    hooks,
    localization: contextLocalization,
    passkey,
    social,
    genericOAuth,
    twoFactor
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { useListAccounts } = hooks;
  const {
    data: accounts,
    isPending: accountsPending,
    refetch: refetchAccounts
  } = useListAccounts();
  const credentialsLinked = accounts == null ? void 0 : accounts.some(
    (acc) => acc.provider === "credential"
  );
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex w-full flex-col gap-4 md:gap-6",
        className,
        classNames == null ? void 0 : classNames.cards
      ),
      children: [
        credentials && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          ChangePasswordCard,
          {
            accounts,
            classNames: classNames == null ? void 0 : classNames.card,
            isPending: accountsPending,
            localization,
            skipHook: true
          }
        ),
        (((_a = social == null ? void 0 : social.providers) == null ? void 0 : _a.length) || ((_b = genericOAuth == null ? void 0 : genericOAuth.providers) == null ? void 0 : _b.length)) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          ProvidersCard,
          {
            accounts,
            classNames: classNames == null ? void 0 : classNames.card,
            isPending: accountsPending,
            localization,
            refetch: refetchAccounts,
            skipHook: true
          }
        ),
        twoFactor && credentialsLinked && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          TwoFactorCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ),
        passkey && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          PasskeysCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          SessionsCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ),
        deleteUser && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          DeleteAccountCard,
          {
            accounts,
            classNames: classNames == null ? void 0 : classNames.card,
            isPending: accountsPending,
            localization,
            skipHook: true
          }
        )
      ]
    }
  );
}

// src/components/settings/settings-cards.tsx

var settingsViews = [
  "SETTINGS",
  "SECURITY",
  "API_KEYS",
  "ORGANIZATION",
  "ORGANIZATIONS",
  "MEMBERS"
];
function SettingsCards({
  className,
  classNames,
  localization,
  pathname,
  view
}) {
  var _a, _b, _c, _d;
  useAuthenticate();
  const {
    apiKey,
    basePath,
    components: {
      Button,
      Drawer,
      DrawerContent,
      DrawerHeader,
      DrawerTitle,
      DrawerTrigger,
      Label
    },
    localization: contextLocalization,
    organization,
    settings,
    viewPaths,
    Link
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const path = pathname == null ? void 0 : pathname.split("/").pop();
  view = view || _chunkQB6CPTMTcjs.getAuthViewByPath.call(void 0, viewPaths, path) || "SETTINGS";
  const personalGroup = [
    {
      view: "SETTINGS",
      label: localization.ACCOUNT
    },
    {
      view: "SECURITY",
      label: localization.SECURITY
    }
  ];
  if (apiKey) {
    personalGroup.push({
      view: "API_KEYS",
      label: localization.API_KEYS
    });
  }
  if (organization) {
    personalGroup.push({
      view: "ORGANIZATIONS",
      label: localization.ORGANIZATIONS
    });
  }
  const organizationGroup = [];
  if (organization) {
    organizationGroup.push({
      view: "ORGANIZATION",
      label: localization.ORGANIZATION
    });
    organizationGroup.push({
      view: "MEMBERS",
      label: localization.MEMBERS
    });
  }
  const isPersonalView = personalGroup.some((item) => item.view === view);
  const isOrganizationView = organizationGroup.some((item) => item.view === view) || view === "MEMBERS";
  const currentNavigationGroup = isOrganizationView ? organizationGroup : personalGroup;
  const currentItem = currentNavigationGroup.find(
    (item) => item.view === view
  );
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex w-full grow flex-col gap-4 md:flex-row md:gap-12",
        className,
        classNames == null ? void 0 : classNames.base
      ),
      children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex justify-between gap-2 md:hidden", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Label, { className: "font-semibold text-base", children: currentItem == null ? void 0 : currentItem.label }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Drawer, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DrawerTrigger, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Button,
              {
                className: _chunkQB6CPTMTcjs.cn.call(void 0, (_a = classNames == null ? void 0 : classNames.drawer) == null ? void 0 : _a.trigger),
                variant: "outline",
                children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  _lucidereact.MenuIcon,
                  {
                    className: _chunkQB6CPTMTcjs.cn.call(void 0, (_b = classNames == null ? void 0 : classNames.drawer) == null ? void 0 : _b.menuIcon)
                  }
                )
              }
            ) }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DrawerContent, { className: _chunkQB6CPTMTcjs.cn.call(void 0, (_c = classNames == null ? void 0 : classNames.drawer) == null ? void 0 : _c.content), children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DrawerHeader, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DrawerTitle, { className: "hidden", children: localization.SETTINGS }) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "flex flex-col px-4 pb-4", children: currentNavigationGroup.map((item) => {
                var _a2;
                return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Link,
                  {
                    href: `${(settings == null ? void 0 : settings.basePath) || basePath}/${viewPaths[item.view]}`,
                    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      Button,
                      {
                        size: "lg",
                        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                          "w-full justify-start px-4 transition-none",
                          (_a2 = classNames == null ? void 0 : classNames.drawer) == null ? void 0 : _a2.menuItem,
                          view === item.view ? "font-semibold" : "text-foreground/70"
                        ),
                        variant: "ghost",
                        children: item.label
                      }
                    )
                  },
                  item.view
                );
              }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "hidden md:block", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "div",
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "flex w-60 flex-col gap-1",
              (_d = classNames == null ? void 0 : classNames.sidebar) == null ? void 0 : _d.base
            ),
            children: currentNavigationGroup.map((item) => {
              var _a2, _b2;
              return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Link,
                {
                  href: `${(settings == null ? void 0 : settings.basePath) || basePath}/${viewPaths[item.view]}`,
                  children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    Button,
                    {
                      size: "lg",
                      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                        "w-full justify-start px-4 transition-none",
                        (_a2 = classNames == null ? void 0 : classNames.sidebar) == null ? void 0 : _a2.button,
                        view === item.view ? "font-semibold" : "text-foreground/70",
                        view === item.view && ((_b2 = classNames == null ? void 0 : classNames.sidebar) == null ? void 0 : _b2.buttonActive)
                      ),
                      variant: "ghost",
                      children: item.label
                    }
                  )
                },
                item.view
              );
            })
          }
        ) }),
        view === "SETTINGS" && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          AccountSettingsCards,
          {
            classNames,
            localization
          }
        ),
        view === "SECURITY" && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          SecuritySettingsCards,
          {
            classNames,
            localization
          }
        ),
        view === "API_KEYS" && apiKey && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: _chunkQB6CPTMTcjs.cn.call(void 0, "flex w-full flex-col", classNames == null ? void 0 : classNames.cards), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          APIKeysCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ) }),
        view === "ORGANIZATION" && organization && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          OrganizationSettingsCards,
          {
            classNames,
            localization
          }
        ),
        view === "ORGANIZATIONS" && organization && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: _chunkQB6CPTMTcjs.cn.call(void 0, "flex w-full flex-col", classNames == null ? void 0 : classNames.cards), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          OrganizationsCard,
          {
            classNames: classNames == null ? void 0 : classNames.card,
            localization
          }
        ) }),
        view === "MEMBERS" && organization && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          "div",
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "flex w-full flex-col gap-4 md:gap-6",
              classNames == null ? void 0 : classNames.cards
            ),
            children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                OrganizationMembersCard,
                {
                  classNames: classNames == null ? void 0 : classNames.card,
                  localization
                }
              ),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                OrganizationInvitationsCard,
                {
                  classNames: classNames == null ? void 0 : classNames.card,
                  localization
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// src/components/auth/auth-form.tsx


// src/components/auth/forms/email-otp-form.tsx






// src/components/auth/otp-input-group.tsx


function OTPInputGroup({
  otpSeparators = 0
}) {
  const {
    components: { InputOTPGroup, InputOTPSeparator, InputOTPSlot }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  if (otpSeparators === 0) {
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, InputOTPGroup, { children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 0 }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 1 }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 2 }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 3 }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 4 }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 5 })
    ] });
  }
  if (otpSeparators === 1) {
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, InputOTPGroup, { children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 0 }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 1 }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 2 })
      ] }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSeparator, {}),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, InputOTPGroup, { children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 3 }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 4 }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 5 })
      ] })
    ] });
  }
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, InputOTPGroup, { children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 0 }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 1 })
    ] }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSeparator, {}),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, InputOTPGroup, { children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 2 }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 3 })
    ] }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSeparator, {}),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, InputOTPGroup, { children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 4 }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InputOTPSlot, { index: 5 })
    ] })
  ] });
}

// src/components/auth/forms/email-otp-form.tsx

function EmailOTPForm(props) {
  const [email, setEmail] = _react.useState.call(void 0, );
  if (!email) {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, EmailForm, { ...props, setEmail });
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, OTPForm, { ...props, email });
}
function EmailForm({
  className,
  classNames,
  isSubmitting,
  localization,
  setIsSubmitting,
  setEmail
}) {
  const isHydrated = _chunkZE6BT3OYcjs.useIsHydrated.call(void 0, );
  const {
    authClient,
    components: {
      Button,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input
    },
    localization: contextLocalization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const formSchema = z12.object({
    email: z12.string().min(1, {
      message: `${localization.EMAIL} ${localization.IS_REQUIRED}`
    }).email({
      message: `${localization.EMAIL} ${localization.IS_INVALID}`
    })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      email: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting;
  _react.useEffect.call(void 0, () => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting);
  }, [form.formState.isSubmitting, setIsSubmitting]);
  async function sendEmailOTP({ email }) {
    try {
      await authClient.emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
        fetchOptions: { throw: true }
      });
      toast({
        variant: "success",
        message: localization.EMAIL_OTP_VERIFICATION_SENT
      });
      setEmail(email);
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "form",
    {
      onSubmit: form.handleSubmit(sendEmailOTP),
      noValidate: isHydrated,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.EMAIL }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  type: "email",
                  placeholder: localization.EMAIL_PLACEHOLDER,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "w-full",
              classNames == null ? void 0 : classNames.button,
              classNames == null ? void 0 : classNames.primaryButton
            ),
            children: isSubmitting ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : localization.EMAIL_OTP_SEND_ACTION
          }
        )
      ]
    }
  ) });
}
function OTPForm({
  className,
  classNames,
  isSubmitting,
  localization,
  otpSeparators = 0,
  redirectTo,
  setIsSubmitting,
  email
}) {
  const {
    authClient,
    components: {
      Button,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      InputOTP
    },
    localization: contextLocalization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { onSuccess, isPending: transitionPending } = useOnSuccessTransition({
    redirectTo
  });
  const formSchema = z12.object({
    code: z12.string().min(1, {
      message: `${localization.EMAIL_OTP} ${localization.IS_REQUIRED}`
    }).min(6, {
      message: `${localization.EMAIL_OTP} ${localization.IS_INVALID}`
    })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      code: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting || transitionPending;
  _react.useEffect.call(void 0, () => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting || transitionPending);
  }, [form.formState.isSubmitting, transitionPending, setIsSubmitting]);
  async function verifyCode({ code }) {
    try {
      await authClient.signIn.emailOtp({
        email,
        otp: code,
        fetchOptions: { throw: true }
      });
      await onSuccess();
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      form.reset();
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "form",
    {
      onSubmit: form.handleSubmit(verifyCode),
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "code",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.EMAIL_OTP }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                InputOTP,
                {
                  ...field,
                  maxLength: 6,
                  onChange: (value) => {
                    field.onChange(value);
                    if (value.length === 6) {
                      form.handleSubmit(verifyCode)();
                    }
                  },
                  containerClassName: classNames == null ? void 0 : classNames.otpInputContainer,
                  className: classNames == null ? void 0 : classNames.otpInput,
                  disabled: isSubmitting,
                  children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    OTPInputGroup,
                    {
                      otpSeparators
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "grid gap-4", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              classNames == null ? void 0 : classNames.button,
              classNames == null ? void 0 : classNames.primaryButton
            ),
            children: [
              isSubmitting && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
              localization.EMAIL_OTP_VERIFY_ACTION
            ]
          }
        ) })
      ]
    }
  ) });
}

// src/components/auth/forms/forgot-password-form.tsx






// src/hooks/use-captcha.tsx
var _reactrecaptchav3 = require('@wojtekmaj/react-recaptcha-v3');

var DEFAULT_CAPTCHA_ENDPOINTS = [
  "/sign-up/email",
  "/sign-in/email",
  "/forget-password"
];
var sanitizeActionName = (action) => {
  let result = action.startsWith("/") ? action.substring(1) : action;
  result = result.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()).replace(/\/([a-z])/g, (_, letter) => letter.toUpperCase()).replace(/\//g, "").replace(/[^A-Za-z0-9_]/g, "");
  return result;
};
function useCaptcha({
  localization
}) {
  const { captcha, localization: contextLocalization } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const captchaRef = _react.useRef.call(void 0, null);
  const { executeRecaptcha } = _reactrecaptchav3.useGoogleReCaptcha.call(void 0, );
  const executeCaptcha = async (action) => {
    if (!captcha) throw new Error(localization.MISSING_RESPONSE);
    let response;
    switch (captcha.provider) {
      case "google-recaptcha-v3": {
        const sanitizedAction = sanitizeActionName(action);
        response = await (executeRecaptcha == null ? void 0 : executeRecaptcha(sanitizedAction));
        break;
      }
      case "google-recaptcha-v2-checkbox": {
        const recaptchaRef = captchaRef;
        response = recaptchaRef.current.getValue();
        break;
      }
      case "google-recaptcha-v2-invisible": {
        const recaptchaRef = captchaRef;
        response = await recaptchaRef.current.executeAsync();
        break;
      }
      case "cloudflare-turnstile": {
        const turnstileRef = captchaRef;
        response = turnstileRef.current.getResponse();
        break;
      }
      case "hcaptcha": {
        const hcaptchaRef = captchaRef;
        response = hcaptchaRef.current.getResponse();
        break;
      }
    }
    if (!response) {
      throw new Error(localization.MISSING_RESPONSE);
    }
    return response;
  };
  const getCaptchaHeaders = async (action) => {
    if (!captcha) return void 0;
    const endpoints = captcha.endpoints || DEFAULT_CAPTCHA_ENDPOINTS;
    if (endpoints.includes(action)) {
      return { "x-captcha-response": await executeCaptcha(action) };
    }
    return void 0;
  };
  return {
    captchaRef,
    getCaptchaHeaders
  };
}

// src/components/captcha/captcha.tsx
var _reacthcaptcha = require('@hcaptcha/react-hcaptcha'); var _reacthcaptcha2 = _interopRequireDefault(_reacthcaptcha);
var _reactturnstile = require('@marsidev/react-turnstile');


// src/components/captcha/recaptcha-badge.tsx


function RecaptchaBadge({
  className,
  localization: propLocalization
}) {
  const isHydrated = _chunkZE6BT3OYcjs.useIsHydrated.call(void 0, );
  const { captcha, localization: contextLocalization } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = { ...contextLocalization, ...propLocalization };
  if (!captcha) return null;
  if (!captcha.hideBadge) {
    return isHydrated ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "style", { children: `
                .grecaptcha-badge { visibility: visible !important; }
            ` }) : null;
  }
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "style", { children: `
                .grecaptcha-badge { visibility: hidden; }
            ` }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "p", { className: _chunkQB6CPTMTcjs.cn.call(void 0, "text-muted-foreground text-xs", className), children: [
      localization.PROTECTED_BY_RECAPTCHA,
      " ",
      localization.BY_CONTINUING_YOU_AGREE,
      " Google",
      " ",
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "a",
        {
          className: "text-foreground hover:underline",
          href: "https://policies.google.com/privacy",
          target: "_blank",
          rel: "noreferrer",
          children: localization.PRIVACY_POLICY
        }
      ),
      " ",
      "&",
      " ",
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "a",
        {
          className: "text-foreground hover:underline",
          href: "https://policies.google.com/terms",
          target: "_blank",
          rel: "noreferrer",
          children: localization.TERMS_OF_SERVICE
        }
      ),
      "."
    ] })
  ] });
}

// src/components/captcha/recaptcha-v2.tsx

var _reactgooglerecaptcha = require('react-google-recaptcha'); var _reactgooglerecaptcha2 = _interopRequireDefault(_reactgooglerecaptcha);

function RecaptchaV2({
  ref
}) {
  const { captcha } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const { theme } = _chunkZE6BT3OYcjs.useTheme.call(void 0, );
  const { lang } = _chunkZE6BT3OYcjs.useLang.call(void 0, );
  _react.useEffect.call(void 0, () => {
    ;
    window.recaptchaOptions = {
      useRecaptchaNet: captcha == null ? void 0 : captcha.recaptchaNet,
      enterprise: captcha == null ? void 0 : captcha.enterprise
    };
  }, [captcha]);
  if (!captcha) return null;
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "style", { children: `
                .grecaptcha-badge {
                    border-radius: var(--radius) !important;
                    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, #0000000d);
                    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;
                    border-style: var(--tw-border-style) !important;
                    border-width: 1px;
                }

                .dark .grecaptcha-badge {
                    border-color: var(--input) !important;
                }
            ` }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      _reactgooglerecaptcha2.default,
      {
        ref,
        sitekey: captcha.siteKey,
        theme,
        hl: lang,
        size: captcha.provider === "google-recaptcha-v2-invisible" ? "invisible" : "normal",
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          captcha.provider === "google-recaptcha-v2-invisible" ? "absolute" : "mx-auto h-[76px] w-[302px] overflow-hidden rounded bg-muted"
        )
      },
      `${theme}-${lang}-${captcha.provider}`
    )
  ] });
}

// src/components/captcha/captcha.tsx

var DEFAULT_CAPTCHA_ENDPOINTS2 = [
  "/sign-up/email",
  "/sign-in/email",
  "/forget-password"
];
function Captcha({ ref, localization, action }) {
  const { captcha } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  if (!captcha) return null;
  if (action) {
    const endpoints = captcha.endpoints || DEFAULT_CAPTCHA_ENDPOINTS2;
    if (!endpoints.includes(action)) {
      return null;
    }
  }
  const { theme } = _chunkZE6BT3OYcjs.useTheme.call(void 0, );
  const showRecaptchaV2 = captcha.provider === "google-recaptcha-v2-checkbox" || captcha.provider === "google-recaptcha-v2-invisible";
  const showRecaptchaBadge = captcha.provider === "google-recaptcha-v3" || captcha.provider === "google-recaptcha-v2-invisible";
  const showTurnstile = captcha.provider === "cloudflare-turnstile";
  const showHCaptcha = captcha.provider === "hcaptcha";
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    showRecaptchaV2 && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RecaptchaV2, { ref }),
    showRecaptchaBadge && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RecaptchaBadge, { localization }),
    showTurnstile && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      _reactturnstile.Turnstile,
      {
        className: "mx-auto",
        ref,
        siteKey: captcha.siteKey,
        options: {
          theme,
          size: "flexible"
        }
      }
    ),
    showHCaptcha && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mx-auto", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      _reacthcaptcha2.default,
      {
        ref,
        sitekey: captcha.siteKey,
        theme
      }
    ) })
  ] });
}

// src/components/auth/forms/forgot-password-form.tsx

function ForgotPasswordForm({
  className,
  classNames,
  isSubmitting,
  localization,
  setIsSubmitting
}) {
  const isHydrated = _chunkZE6BT3OYcjs.useIsHydrated.call(void 0, );
  const { captchaRef, getCaptchaHeaders } = useCaptcha({ localization });
  const {
    authClient,
    basePath,
    baseURL,
    components: {
      Button,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input
    },
    localization: contextLocalization,
    navigate,
    toast,
    viewPaths
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const formSchema = z13.object({
    email: z13.string().min(1, {
      message: `${localization.EMAIL} ${localization.IS_REQUIRED}`
    }).email({
      message: `${localization.EMAIL} ${localization.IS_INVALID}`
    })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      email: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting;
  _react.useEffect.call(void 0, () => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting);
  }, [form.formState.isSubmitting, setIsSubmitting]);
  async function forgotPassword({ email }) {
    try {
      const fetchOptions = {
        throw: true,
        headers: await getCaptchaHeaders("/forget-password")
      };
      await authClient.requestPasswordReset({
        email,
        redirectTo: `${baseURL}${basePath}/${viewPaths.RESET_PASSWORD}`,
        fetchOptions
      });
      toast({
        variant: "success",
        message: localization.FORGOT_PASSWORD_EMAIL
      });
      navigate(
        `${basePath}/${viewPaths.SIGN_IN}${window.location.search}`
      );
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "form",
    {
      onSubmit: form.handleSubmit(forgotPassword),
      noValidate: isHydrated,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.EMAIL }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  type: "email",
                  placeholder: localization.EMAIL_PLACEHOLDER,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Captcha,
          {
            ref: captchaRef,
            localization,
            action: "/forget-password"
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "w-full",
              classNames == null ? void 0 : classNames.button,
              classNames == null ? void 0 : classNames.primaryButton
            ),
            children: isSubmitting ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : localization.FORGOT_PASSWORD_ACTION
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/magic-link-form.tsx






function MagicLinkForm({
  className,
  classNames,
  callbackURL: callbackURLProp,
  isSubmitting,
  localization,
  redirectTo: redirectToProp,
  setIsSubmitting
}) {
  const isHydrated = _chunkZE6BT3OYcjs.useIsHydrated.call(void 0, );
  const { captchaRef, getCaptchaHeaders } = useCaptcha({ localization });
  const {
    authClient,
    basePath,
    baseURL,
    components: {
      Button,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input
    },
    persistClient,
    localization: contextLocalization,
    redirectTo: contextRedirectTo,
    viewPaths,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const getRedirectTo = _react.useCallback.call(void 0, 
    () => redirectToProp || _chunkQB6CPTMTcjs.getSearchParam.call(void 0, "redirectTo") || contextRedirectTo,
    [redirectToProp, contextRedirectTo]
  );
  const getCallbackURL = _react.useCallback.call(void 0, 
    () => `${baseURL}${callbackURLProp || (persistClient ? `${basePath}/${viewPaths.CALLBACK}?redirectTo=${getRedirectTo()}` : getRedirectTo())}`,
    [
      callbackURLProp,
      persistClient,
      basePath,
      viewPaths,
      baseURL,
      getRedirectTo
    ]
  );
  const formSchema = z14.object({
    email: z14.string().min(1, {
      message: `${localization.EMAIL} ${localization.IS_REQUIRED}`
    }).email({
      message: `${localization.EMAIL} ${localization.IS_INVALID}`
    })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      email: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting;
  _react.useEffect.call(void 0, () => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting);
  }, [form.formState.isSubmitting, setIsSubmitting]);
  async function sendMagicLink({ email }) {
    try {
      const fetchOptions = {
        throw: true,
        headers: await getCaptchaHeaders("/sign-in/magic-link")
      };
      await authClient.signIn.magicLink({
        email,
        callbackURL: getCallbackURL(),
        fetchOptions
      });
      toast({
        variant: "success",
        message: localization.MAGIC_LINK_EMAIL
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "form",
    {
      onSubmit: form.handleSubmit(sendMagicLink),
      noValidate: isHydrated,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.EMAIL }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  type: "email",
                  placeholder: localization.EMAIL_PLACEHOLDER,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Captcha,
          {
            ref: captchaRef,
            localization,
            action: "/sign-in/magic-link"
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "w-full",
              classNames == null ? void 0 : classNames.button,
              classNames == null ? void 0 : classNames.primaryButton
            ),
            children: isSubmitting ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : localization.MAGIC_LINK_ACTION
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/recover-account-form.tsx






function RecoverAccountForm({
  className,
  classNames,
  isSubmitting,
  localization,
  redirectTo,
  setIsSubmitting
}) {
  const {
    authClient,
    components: {
      Button,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input
    },
    localization: contextLocalization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { onSuccess, isPending: transitionPending } = useOnSuccessTransition({
    redirectTo
  });
  const formSchema = z15.object({
    code: z15.string().min(1, { message: localization.BACKUP_CODE_REQUIRED })
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      code: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting || transitionPending;
  _react.useEffect.call(void 0, () => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting || transitionPending);
  }, [form.formState.isSubmitting, transitionPending, setIsSubmitting]);
  async function verifyBackupCode({ code }) {
    try {
      await authClient.twoFactor.verifyBackupCode({
        code,
        fetchOptions: { throw: true }
      });
      await onSuccess();
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      form.reset();
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "form",
    {
      onSubmit: form.handleSubmit(verifyBackupCode),
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "code",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.BACKUP_CODE }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Input,
                {
                  placeholder: localization.BACKUP_CODE_PLACEHOLDER,
                  autoComplete: "off",
                  className: classNames == null ? void 0 : classNames.input,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              classNames == null ? void 0 : classNames.button,
              classNames == null ? void 0 : classNames.primaryButton
            ),
            children: isSubmitting ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : localization.RECOVER_ACCOUNT_ACTION
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/reset-password-form.tsx






function ResetPasswordForm({
  className,
  classNames,
  localization,
  passwordValidation
}) {
  const tokenChecked = _react.useRef.call(void 0, false);
  const {
    authClient,
    basePath,
    components: {
      Button,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage
    },
    credentials,
    localization: contextLocalization,
    viewPaths,
    navigate,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const confirmPasswordEnabled = credentials == null ? void 0 : credentials.confirmPassword;
  const contextPasswordValidation = credentials == null ? void 0 : credentials.passwordValidation;
  localization = { ...contextLocalization, ...localization };
  passwordValidation = { ...contextPasswordValidation, ...passwordValidation };
  const formSchema = z16.object({
    newPassword: _chunkQB6CPTMTcjs.getPasswordSchema.call(void 0, passwordValidation, {
      PASSWORD_REQUIRED: localization.NEW_PASSWORD_REQUIRED,
      PASSWORD_TOO_SHORT: localization.PASSWORD_TOO_SHORT,
      PASSWORD_TOO_LONG: localization.PASSWORD_TOO_LONG,
      INVALID_PASSWORD: localization.INVALID_PASSWORD
    }),
    confirmPassword: confirmPasswordEnabled ? _chunkQB6CPTMTcjs.getPasswordSchema.call(void 0, passwordValidation, {
      PASSWORD_REQUIRED: localization.CONFIRM_PASSWORD_REQUIRED,
      PASSWORD_TOO_SHORT: localization.PASSWORD_TOO_SHORT,
      PASSWORD_TOO_LONG: localization.PASSWORD_TOO_LONG,
      INVALID_PASSWORD: localization.INVALID_PASSWORD
    }) : z16.string().optional()
  }).refine(
    (data) => !confirmPasswordEnabled || data.newPassword === data.confirmPassword,
    {
      message: localization.PASSWORDS_DO_NOT_MATCH,
      path: ["confirmPassword"]
    }
  );
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: ""
    }
  });
  const isSubmitting = form.formState.isSubmitting;
  _react.useEffect.call(void 0, () => {
    if (tokenChecked.current) return;
    tokenChecked.current = true;
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get("token");
    if (!token || token === "INVALID_TOKEN") {
      navigate(
        `${basePath}/${viewPaths.SIGN_IN}${window.location.search}`
      );
      toast({ variant: "error", message: localization.INVALID_TOKEN });
    }
  }, [basePath, navigate, toast, viewPaths, localization]);
  async function resetPassword({ newPassword }) {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const token = searchParams.get("token");
      await authClient.resetPassword({
        newPassword,
        token,
        fetchOptions: { throw: true }
      });
      toast({
        variant: "success",
        message: localization.RESET_PASSWORD_SUCCESS
      });
      navigate(
        `${basePath}/${viewPaths.SIGN_IN}${window.location.search}`
      );
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      form.reset();
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "form",
    {
      onSubmit: form.handleSubmit(resetPassword),
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "newPassword",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.NEW_PASSWORD }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                PasswordInput,
                {
                  autoComplete: "new-password",
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.NEW_PASSWORD_PLACEHOLDER,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        confirmPasswordEnabled && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "confirmPassword",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.CONFIRM_PASSWORD }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                PasswordInput,
                {
                  autoComplete: "new-password",
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.CONFIRM_PASSWORD_PLACEHOLDER,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "w-full",
              classNames == null ? void 0 : classNames.button,
              classNames == null ? void 0 : classNames.primaryButton
            ),
            children: isSubmitting ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : localization.RESET_PASSWORD_ACTION
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/sign-in-form.tsx






function SignInForm({
  className,
  classNames,
  isSubmitting,
  localization,
  redirectTo,
  setIsSubmitting,
  passwordValidation
}) {
  const isHydrated = _chunkZE6BT3OYcjs.useIsHydrated.call(void 0, );
  const { captchaRef, getCaptchaHeaders } = useCaptcha({ localization });
  const {
    authClient,
    basePath,
    components: {
      Button,
      Checkbox,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input
    },
    credentials,
    localization: contextLocalization,
    viewPaths,
    navigate,
    toast,
    Link
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const rememberMeEnabled = credentials == null ? void 0 : credentials.rememberMe;
  const usernameEnabled = credentials == null ? void 0 : credentials.username;
  const contextPasswordValidation = credentials == null ? void 0 : credentials.passwordValidation;
  localization = { ...contextLocalization, ...localization };
  passwordValidation = { ...contextPasswordValidation, ...passwordValidation };
  const { onSuccess, isPending: transitionPending } = useOnSuccessTransition({
    redirectTo
  });
  const formSchema = z17.object({
    email: usernameEnabled ? z17.string().min(1, {
      message: `${localization.USERNAME} ${localization.IS_REQUIRED}`
    }) : z17.string().min(1, {
      message: `${localization.EMAIL} ${localization.IS_REQUIRED}`
    }).email({
      message: `${localization.EMAIL} ${localization.IS_INVALID}`
    }),
    password: _chunkQB6CPTMTcjs.getPasswordSchema.call(void 0, passwordValidation, localization),
    rememberMe: z17.boolean().optional()
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: !rememberMeEnabled
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting || transitionPending;
  _react.useEffect.call(void 0, () => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting || transitionPending);
  }, [form.formState.isSubmitting, transitionPending, setIsSubmitting]);
  async function signIn({
    email,
    password,
    rememberMe
  }) {
    try {
      let response = {};
      if (usernameEnabled && !_chunkQB6CPTMTcjs.isValidEmail.call(void 0, email)) {
        const fetchOptions = {
          throw: true,
          headers: await getCaptchaHeaders("/sign-in/username")
        };
        response = await authClient.signIn.username({
          username: email,
          password,
          rememberMe,
          fetchOptions
        });
      } else {
        const fetchOptions = {
          throw: true,
          headers: await getCaptchaHeaders("/sign-in/email")
        };
        response = await authClient.signIn.email({
          email,
          password,
          rememberMe,
          fetchOptions
        });
      }
      if (response.twoFactorRedirect) {
        navigate(
          `${basePath}/${viewPaths.TWO_FACTOR}${window.location.search}`
        );
      } else {
        await onSuccess();
      }
    } catch (error) {
      form.resetField("password");
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "form",
    {
      onSubmit: form.handleSubmit(signIn),
      noValidate: isHydrated,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: usernameEnabled ? localization.USERNAME : localization.EMAIL }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Input,
                {
                  autoComplete: usernameEnabled ? "username" : "email",
                  className: classNames == null ? void 0 : classNames.input,
                  type: usernameEnabled ? "text" : "email",
                  placeholder: usernameEnabled ? localization.SIGN_IN_USERNAME_PLACEHOLDER : localization.EMAIL_PLACEHOLDER,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "password",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.PASSWORD }),
                (credentials == null ? void 0 : credentials.forgotPassword) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Link,
                  {
                    className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                      "text-sm hover:underline",
                      classNames == null ? void 0 : classNames.forgotPasswordLink
                    ),
                    href: `${basePath}/${viewPaths.FORGOT_PASSWORD}${isHydrated ? window.location.search : ""}`,
                    children: localization.FORGOT_PASSWORD_LINK
                  }
                )
              ] }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                PasswordInput,
                {
                  autoComplete: "current-password",
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.PASSWORD_PLACEHOLDER,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        rememberMeEnabled && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "rememberMe",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { className: "flex", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Checkbox,
                {
                  checked: field.value,
                  onCheckedChange: field.onChange,
                  disabled: isSubmitting
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { children: localization.REMEMBER_ME })
            ] })
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Captcha,
          {
            ref: captchaRef,
            localization,
            action: "/sign-in/email"
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "w-full",
              classNames == null ? void 0 : classNames.button,
              classNames == null ? void 0 : classNames.primaryButton
            ),
            children: isSubmitting ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : localization.SIGN_IN_ACTION
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/sign-up-form.tsx







function SignUpForm({
  className,
  classNames,
  callbackURL,
  isSubmitting,
  localization,
  redirectTo,
  setIsSubmitting,
  passwordValidation
}) {
  const isHydrated = _chunkZE6BT3OYcjs.useIsHydrated.call(void 0, );
  const { captchaRef, getCaptchaHeaders } = useCaptcha({ localization });
  const {
    additionalFields,
    authClient,
    basePath,
    baseURL,
    components: {
      Button,
      Checkbox,
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input
    },
    credentials,
    emailVerification,
    localization: contextLocalization,
    nameRequired,
    persistClient,
    redirectTo: contextRedirectTo,
    signUp: signUpOptions,
    viewPaths,
    navigate,
    toast,
    avatar
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const confirmPasswordEnabled = credentials == null ? void 0 : credentials.confirmPassword;
  const usernameEnabled = credentials == null ? void 0 : credentials.username;
  const contextPasswordValidation = credentials == null ? void 0 : credentials.passwordValidation;
  const signUpFields = signUpOptions == null ? void 0 : signUpOptions.fields;
  localization = { ...contextLocalization, ...localization };
  passwordValidation = { ...contextPasswordValidation, ...passwordValidation };
  const fileInputRef = _react.useRef.call(void 0, null);
  const [avatarImage, setAvatarImage] = _react.useState.call(void 0, null);
  const [uploadingAvatar, setUploadingAvatar] = _react.useState.call(void 0, false);
  const getRedirectTo = _react.useCallback.call(void 0, 
    () => redirectTo || _chunkQB6CPTMTcjs.getSearchParam.call(void 0, "redirectTo") || contextRedirectTo,
    [redirectTo, contextRedirectTo]
  );
  const getCallbackURL = _react.useCallback.call(void 0, 
    () => `${baseURL}${callbackURL || (persistClient ? `${basePath}/${viewPaths.CALLBACK}?redirectTo=${getRedirectTo()}` : getRedirectTo())}`,
    [
      callbackURL,
      persistClient,
      basePath,
      viewPaths,
      baseURL,
      getRedirectTo
    ]
  );
  const { onSuccess, isPending: transitionPending } = useOnSuccessTransition({
    redirectTo
  });
  const schemaFields = {
    email: z18.string().min(1, {
      message: `${localization.EMAIL} ${localization.IS_REQUIRED}`
    }).email({
      message: `${localization.EMAIL} ${localization.IS_INVALID}`
    }),
    password: _chunkQB6CPTMTcjs.getPasswordSchema.call(void 0, passwordValidation, localization)
  };
  if (confirmPasswordEnabled) {
    schemaFields.confirmPassword = _chunkQB6CPTMTcjs.getPasswordSchema.call(void 0, passwordValidation, {
      PASSWORD_REQUIRED: localization.CONFIRM_PASSWORD_REQUIRED,
      PASSWORD_TOO_SHORT: localization.PASSWORD_TOO_SHORT,
      PASSWORD_TOO_LONG: localization.PASSWORD_TOO_LONG,
      INVALID_PASSWORD: localization.INVALID_PASSWORD
    });
  }
  if (signUpFields == null ? void 0 : signUpFields.includes("name")) {
    schemaFields.name = nameRequired ? z18.string().min(1, {
      message: `${localization.NAME} ${localization.IS_REQUIRED}`
    }) : z18.string().optional();
  }
  if (usernameEnabled) {
    schemaFields.username = z18.string().min(1, {
      message: `${localization.USERNAME} ${localization.IS_REQUIRED}`
    });
  }
  if ((signUpFields == null ? void 0 : signUpFields.includes("image")) && avatar) {
    schemaFields.image = z18.string().optional();
  }
  if (signUpFields) {
    for (const field of signUpFields) {
      if (field === "name") continue;
      if (field === "image") continue;
      const additionalField = additionalFields == null ? void 0 : additionalFields[field];
      if (!additionalField) continue;
      let fieldSchema;
      if (additionalField.type === "number") {
        fieldSchema = additionalField.required ? z18.preprocess(
          (val) => !val ? void 0 : Number(val),
          z18.number({
            required_error: `${additionalField.label} ${localization.IS_REQUIRED}`,
            invalid_type_error: `${additionalField.label} ${localization.IS_INVALID}`
          })
        ) : z18.coerce.number({
          invalid_type_error: `${additionalField.label} ${localization.IS_INVALID}`
        }).optional();
      } else if (additionalField.type === "boolean") {
        fieldSchema = additionalField.required ? z18.coerce.boolean({
          required_error: `${additionalField.label} ${localization.IS_REQUIRED}`,
          invalid_type_error: `${additionalField.label} ${localization.IS_INVALID}`
        }).refine((val) => val === true, {
          message: `${additionalField.label} ${localization.IS_REQUIRED}`
        }) : z18.coerce.boolean({
          invalid_type_error: `${additionalField.label} ${localization.IS_INVALID}`
        }).optional();
      } else {
        fieldSchema = additionalField.required ? z18.string().min(
          1,
          `${additionalField.label} ${localization.IS_REQUIRED}`
        ) : z18.string().optional();
      }
      schemaFields[field] = fieldSchema;
    }
  }
  const formSchema = z18.object(schemaFields).refine(
    (data) => {
      if (!confirmPasswordEnabled) return true;
      return data.password === data.confirmPassword;
    },
    {
      message: localization.PASSWORDS_DO_NOT_MATCH,
      path: ["confirmPassword"]
    }
  );
  const defaultValues = {
    email: "",
    password: "",
    ...confirmPasswordEnabled && { confirmPassword: "" },
    ...(signUpFields == null ? void 0 : signUpFields.includes("name")) ? { name: "" } : {},
    ...usernameEnabled ? { username: "" } : {},
    ...(signUpFields == null ? void 0 : signUpFields.includes("image")) && avatar ? { image: "" } : {}
  };
  if (signUpFields) {
    for (const field of signUpFields) {
      if (field === "name") continue;
      if (field === "image") continue;
      const additionalField = additionalFields == null ? void 0 : additionalFields[field];
      if (!additionalField) continue;
      defaultValues[field] = additionalField.type === "boolean" ? false : "";
    }
  }
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting || transitionPending;
  _react.useEffect.call(void 0, () => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting || transitionPending);
  }, [form.formState.isSubmitting, transitionPending, setIsSubmitting]);
  const handleAvatarChange = async (file) => {
    if (!avatar) return;
    setUploadingAvatar(true);
    try {
      const resizedFile = await resizeAndCropImage(
        file,
        crypto.randomUUID(),
        avatar.size,
        avatar.extension
      );
      let image;
      if (avatar.upload) {
        image = await avatar.upload(resizedFile);
      } else {
        image = await fileToBase64(resizedFile);
      }
      if (image) {
        setAvatarImage(image);
        form.setValue("image", image);
      } else {
        setAvatarImage(null);
        form.setValue("image", "");
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
    setUploadingAvatar(false);
  };
  const handleDeleteAvatar = () => {
    setAvatarImage(null);
    form.setValue("image", "");
  };
  const openFileDialog = () => {
    var _a;
    return (_a = fileInputRef.current) == null ? void 0 : _a.click();
  };
  async function signUp({
    email,
    password,
    name,
    username,
    confirmPassword,
    image,
    ...additionalFieldValues
  }) {
    try {
      for (const [field, value] of Object.entries(
        additionalFieldValues
      )) {
        const additionalField = additionalFields == null ? void 0 : additionalFields[field];
        if (!(additionalField == null ? void 0 : additionalField.validate)) continue;
        if (typeof value === "string" && !await additionalField.validate(value)) {
          form.setError(field, {
            message: `${additionalField.label} ${localization.IS_INVALID}`
          });
          return;
        }
      }
      const fetchOptions = {
        throw: true,
        headers: await getCaptchaHeaders("/sign-up/email")
      };
      const data = await authClient.signUp.email({
        email,
        password,
        name: name || "",
        ...username !== void 0 && { username },
        ...image !== void 0 && { image },
        ...additionalFieldValues,
        callbackURL: getCallbackURL(),
        fetchOptions
      });
      if ("token" in data && data.token) {
        await onSuccess();
      } else {
        navigate(
          `${basePath}/${viewPaths.SIGN_IN}${window.location.search}`
        );
        toast({
          variant: "success",
          message: localization.SIGN_UP_EMAIL
        });
      }
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      form.resetField("password");
      form.resetField("confirmPassword");
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "form",
    {
      onSubmit: form.handleSubmit(signUp),
      noValidate: isHydrated,
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        (signUpFields == null ? void 0 : signUpFields.includes("image")) && avatar && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "input",
            {
              ref: fileInputRef,
              accept: "image/*",
              disabled: uploadingAvatar,
              hidden: true,
              type: "file",
              onChange: (e) => {
                var _a;
                const file = (_a = e.target.files) == null ? void 0 : _a.item(0);
                if (file) handleAvatarChange(file);
                e.target.value = "";
              }
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            FormField,
            {
              control: form.control,
              name: "image",
              render: () => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { children: localization.AVATAR }),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenu, { children: [
                    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      Button,
                      {
                        className: "size-fit rounded-full",
                        size: "icon",
                        variant: "ghost",
                        type: "button",
                        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                          UserAvatar,
                          {
                            isPending: uploadingAvatar,
                            className: "size-16",
                            user: avatarImage ? {
                              name: form.watch(
                                "name"
                              ) || "",
                              email: form.watch(
                                "email"
                              ),
                              image: avatarImage
                            } : null,
                            localization
                          }
                        )
                      }
                    ) }),
                    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                      DropdownMenuContent,
                      {
                        align: "start",
                        onCloseAutoFocus: (e) => e.preventDefault(),
                        children: [
                          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                            DropdownMenuItem,
                            {
                              onClick: openFileDialog,
                              disabled: uploadingAvatar,
                              children: [
                                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.UploadCloudIcon, {}),
                                localization.UPLOAD_AVATAR
                              ]
                            }
                          ),
                          avatarImage && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                            DropdownMenuItem,
                            {
                              onClick: handleDeleteAvatar,
                              disabled: uploadingAvatar,
                              variant: "destructive",
                              children: [
                                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Trash2Icon, {}),
                                localization.DELETE_AVATAR
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      onClick: openFileDialog,
                      disabled: uploadingAvatar,
                      children: [
                        uploadingAvatar && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                        localization.UPLOAD
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, {})
              ] })
            }
          )
        ] }),
        (signUpFields == null ? void 0 : signUpFields.includes("name")) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "name",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.NAME }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.NAME_PLACEHOLDER,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        usernameEnabled && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "username",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.USERNAME }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.USERNAME_PLACEHOLDER,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.EMAIL }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  type: "email",
                  placeholder: localization.EMAIL_PLACEHOLDER,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "password",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.PASSWORD }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                PasswordInput,
                {
                  autoComplete: "new-password",
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.PASSWORD_PLACEHOLDER,
                  disabled: isSubmitting,
                  enableToggle: true,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        confirmPasswordEnabled && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          FormField,
          {
            control: form.control,
            name: "confirmPassword",
            render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.CONFIRM_PASSWORD }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                PasswordInput,
                {
                  autoComplete: "new-password",
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.CONFIRM_PASSWORD_PLACEHOLDER,
                  disabled: isSubmitting,
                  enableToggle: true,
                  ...field
                }
              ) }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        signUpFields == null ? void 0 : signUpFields.filter((field) => field !== "name" && field !== "image").map((field) => {
          const additionalField = additionalFields == null ? void 0 : additionalFields[field];
          if (!additionalField) {
            console.error(`Additional field ${field} not found`);
            return null;
          }
          return additionalField.type === "boolean" ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            FormField,
            {
              control: form.control,
              name: field,
              render: ({ field: formField }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { className: "flex", children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Checkbox,
                  {
                    checked: formField.value,
                    onCheckedChange: formField.onChange,
                    disabled: isSubmitting
                  }
                ) }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  FormLabel,
                  {
                    className: classNames == null ? void 0 : classNames.label,
                    children: additionalField.label
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  FormMessage,
                  {
                    className: classNames == null ? void 0 : classNames.error
                  }
                )
              ] })
            },
            field
          ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            FormField,
            {
              control: form.control,
              name: field,
              render: ({ field: formField }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  FormLabel,
                  {
                    className: classNames == null ? void 0 : classNames.label,
                    children: additionalField.label
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Input,
                  {
                    className: classNames == null ? void 0 : classNames.input,
                    type: additionalField.type === "number" ? "number" : "text",
                    placeholder: additionalField.placeholder || (typeof additionalField.label === "string" ? additionalField.label : ""),
                    disabled: isSubmitting,
                    ...formField
                  }
                ) }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  FormMessage,
                  {
                    className: classNames == null ? void 0 : classNames.error
                  }
                )
              ] })
            },
            field
          );
        }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Captcha,
          {
            ref: captchaRef,
            localization,
            action: "/sign-up/email"
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "w-full",
              classNames == null ? void 0 : classNames.button,
              classNames == null ? void 0 : classNames.primaryButton
            ),
            children: isSubmitting ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : localization.SIGN_UP_ACTION
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/two-factor-form.tsx




var _reactqrcode = require('react-qr-code'); var _reactqrcode2 = _interopRequireDefault(_reactqrcode);


function TwoFactorForm({
  className,
  classNames,
  isSubmitting,
  localization,
  otpSeparators = 0,
  redirectTo,
  setIsSubmitting
}) {
  var _a;
  const isHydrated = _chunkZE6BT3OYcjs.useIsHydrated.call(void 0, );
  const totpURI = isHydrated ? _chunkQB6CPTMTcjs.getSearchParam.call(void 0, "totpURI") : null;
  const initialSendRef = _react.useRef.call(void 0, false);
  const {
    authClient,
    basePath,
    components: {
      Button,
      Checkbox,
      Form: Form2,
      FormControl,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      InputOTP,
      Label
    },
    hooks: { useSession },
    localization: contextLocalization,
    twoFactor,
    viewPaths,
    toast,
    Link
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { onSuccess, isPending: transitionPending } = useOnSuccessTransition({
    redirectTo
  });
  const { data: sessionData } = useSession();
  const isTwoFactorEnabled = (_a = sessionData == null ? void 0 : sessionData.user) == null ? void 0 : _a.twoFactorEnabled;
  const [method, setMethod] = _react.useState.call(void 0, 
    (twoFactor == null ? void 0 : twoFactor.length) === 1 ? twoFactor[0] : null
  );
  const [isSendingOtp, setIsSendingOtp] = _react.useState.call(void 0, false);
  const [cooldownSeconds, setCooldownSeconds] = _react.useState.call(void 0, 0);
  const formSchema = z19.object({
    code: z19.string().min(1, {
      message: `${localization.ONE_TIME_PASSWORD} ${localization.IS_REQUIRED}`
    }).min(6, {
      message: `${localization.ONE_TIME_PASSWORD} ${localization.IS_INVALID}`
    }),
    trustDevice: z19.boolean().optional()
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod.zodResolver.call(void 0, formSchema),
    defaultValues: {
      code: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting || transitionPending;
  _react.useEffect.call(void 0, () => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting || transitionPending);
  }, [form.formState.isSubmitting, transitionPending, setIsSubmitting]);
  _react.useEffect.call(void 0, () => {
    if (method === "otp" && cooldownSeconds <= 0 && !initialSendRef.current) {
      initialSendRef.current = true;
      sendOtp();
    }
  }, [method]);
  _react.useEffect.call(void 0, () => {
    if (cooldownSeconds <= 0) return;
    const timer = setTimeout(() => {
      setCooldownSeconds((prev) => prev - 1);
    }, 1e3);
    return () => clearTimeout(timer);
  }, [cooldownSeconds]);
  const sendOtp = async () => {
    if (isSendingOtp || cooldownSeconds > 0) return;
    try {
      setIsSendingOtp(true);
      await authClient.twoFactor.sendOtp({
        fetchOptions: { throw: true }
      });
      setCooldownSeconds(60);
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      if (error.error.code === "INVALID_TWO_FACTOR_COOKIE") {
        history.back();
      }
    }
    initialSendRef.current = false;
    setIsSendingOtp(false);
  };
  async function verifyCode({
    code,
    trustDevice
  }) {
    try {
      const verifyMethod = method === "totp" ? authClient.twoFactor.verifyTotp : authClient.twoFactor.verifyOtp;
      await verifyMethod({
        code,
        trustDevice,
        fetchOptions: { throw: true }
      });
      await onSuccess();
      if (sessionData && !isTwoFactorEnabled) {
        toast({
          variant: "success",
          message: localization == null ? void 0 : localization.TWO_FACTOR_ENABLED
        });
      }
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      form.reset();
    }
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Form2, { ...form, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "form",
    {
      onSubmit: form.handleSubmit(verifyCode),
      className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        (twoFactor == null ? void 0 : twoFactor.includes("totp")) && totpURI && method === "totp" && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "space-y-3", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Label, { className: classNames == null ? void 0 : classNames.label, children: localization.TWO_FACTOR_TOTP_LABEL }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            _reactqrcode2.default,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "border shadow-xs",
                classNames == null ? void 0 : classNames.qrCode
              ),
              value: totpURI
            }
          )
        ] }),
        method !== null && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            FormField,
            {
              control: form.control,
              name: "code",
              render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { children: [
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    FormLabel,
                    {
                      className: classNames == null ? void 0 : classNames.label,
                      children: localization.ONE_TIME_PASSWORD
                    }
                  ),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    Link,
                    {
                      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                        "text-sm hover:underline",
                        classNames == null ? void 0 : classNames.forgotPasswordLink
                      ),
                      href: `${basePath}/${viewPaths.RECOVER_ACCOUNT}${isHydrated ? window.location.search : ""}`,
                      children: localization.FORGOT_AUTHENTICATOR
                    }
                  )
                ] }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  InputOTP,
                  {
                    ...field,
                    maxLength: 6,
                    onChange: (value) => {
                      field.onChange(value);
                      if (value.length === 6) {
                        form.handleSubmit(
                          verifyCode
                        )();
                      }
                    },
                    containerClassName: classNames == null ? void 0 : classNames.otpInputContainer,
                    className: classNames == null ? void 0 : classNames.otpInput,
                    disabled: isSubmitting,
                    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      OTPInputGroup,
                      {
                        otpSeparators
                      }
                    )
                  }
                ) }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  FormMessage,
                  {
                    className: classNames == null ? void 0 : classNames.error
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            FormField,
            {
              control: form.control,
              name: "trustDevice",
              render: ({ field }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FormItem, { className: "flex", children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormControl, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  Checkbox,
                  {
                    checked: field.value,
                    onCheckedChange: field.onChange,
                    disabled: isSubmitting,
                    className: classNames == null ? void 0 : classNames.checkbox
                  }
                ) }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.TRUST_DEVICE })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "grid gap-4", children: [
          method !== null && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            Button,
            {
              type: "submit",
              disabled: isSubmitting,
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.primaryButton
              ),
              children: [
                isSubmitting && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }),
                localization.TWO_FACTOR_ACTION
              ]
            }
          ),
          method === "otp" && (twoFactor == null ? void 0 : twoFactor.includes("otp")) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: sendOtp,
              disabled: cooldownSeconds > 0 || isSendingOtp || isSubmitting,
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.outlineButton
              ),
              children: [
                isSendingOtp ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.SendIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.RESEND_CODE,
                cooldownSeconds > 0 && ` (${cooldownSeconds})`
              ]
            }
          ),
          method !== "otp" && (twoFactor == null ? void 0 : twoFactor.includes("otp")) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            Button,
            {
              type: "button",
              variant: "secondary",
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.secondaryButton
              ),
              onClick: () => setMethod("otp"),
              disabled: isSubmitting,
              children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.SendIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.SEND_VERIFICATION_CODE
              ]
            }
          ),
          method !== "totp" && (twoFactor == null ? void 0 : twoFactor.includes("totp")) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            Button,
            {
              type: "button",
              variant: "secondary",
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.secondaryButton
              ),
              onClick: () => setMethod("totp"),
              disabled: isSubmitting,
              children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.QrCodeIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.CONTINUE_WITH_AUTHENTICATOR
              ]
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/auth/sign-out.tsx



function SignOut() {
  const signingOut = _react.useRef.call(void 0, false);
  const { authClient, basePath, viewPaths } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const { onSuccess } = useOnSuccessTransition({
    redirectTo: `${basePath}/${viewPaths.SIGN_IN}`
  });
  _react.useEffect.call(void 0, () => {
    if (signingOut.current) return;
    signingOut.current = true;
    authClient.signOut().finally(onSuccess);
  }, [authClient, onSuccess]);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" });
}

// src/components/auth/auth-form.tsx

function AuthForm({
  className,
  classNames,
  callbackURL,
  isSubmitting,
  localization,
  pathname,
  redirectTo,
  view,
  otpSeparators = 0,
  setIsSubmitting
}) {
  const {
    basePath,
    credentials,
    localization: contextLocalization,
    magicLink,
    emailOTP,
    signUp,
    twoFactor: twoFactorEnabled,
    viewPaths,
    replace
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const signUpEnabled = !!signUp;
  localization = { ...contextLocalization, ...localization };
  const path = pathname == null ? void 0 : pathname.split("/").pop();
  _react.useEffect.call(void 0, () => {
    if (path && !_chunkQB6CPTMTcjs.getAuthViewByPath.call(void 0, viewPaths, path)) {
      console.error(`Invalid auth view: ${path}`);
      replace(`${basePath}/${viewPaths.SIGN_IN}${window.location.search}`);
    }
  }, [path, viewPaths, basePath, replace]);
  view = view || _chunkQB6CPTMTcjs.getAuthViewByPath.call(void 0, viewPaths, path) || "SIGN_IN";
  _react.useEffect.call(void 0, () => {
    let isInvalidView = false;
    if (view === "MAGIC_LINK" && (!magicLink || !credentials && !emailOTP)) {
      isInvalidView = true;
    }
    if (view === "EMAIL_OTP" && (!emailOTP || !credentials && !magicLink)) {
      isInvalidView = true;
    }
    if (view === "SIGN_UP" && !signUpEnabled) {
      isInvalidView = true;
    }
    if (!credentials && [
      "SIGN_UP",
      "FORGOT_PASSWORD",
      "RESET_PASSWORD",
      "TWO_FACTOR",
      "RECOVER_ACCOUNT"
    ].includes(view)) {
      isInvalidView = true;
    }
    if (["TWO_FACTOR", "RECOVER_ACCOUNT"].includes(view) && !twoFactorEnabled) {
      isInvalidView = true;
    }
    if (isInvalidView) {
      replace(`${basePath}/${viewPaths.SIGN_IN}${window.location.search}`);
    }
  }, [
    basePath,
    view,
    viewPaths,
    credentials,
    replace,
    emailOTP,
    signUpEnabled,
    magicLink,
    twoFactorEnabled
  ]);
  if (view === "SIGN_OUT") return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SignOut, {});
  if (view === "CALLBACK") return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, AuthCallback, { redirectTo });
  if (view === "SIGN_IN") {
    return credentials ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SignInForm,
      {
        className,
        classNames,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    ) : magicLink ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      MagicLinkForm,
      {
        className,
        classNames,
        callbackURL,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    ) : emailOTP ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      EmailOTPForm,
      {
        className,
        classNames,
        callbackURL,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    ) : null;
  }
  if (view === "TWO_FACTOR") {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      TwoFactorForm,
      {
        className,
        classNames,
        localization,
        otpSeparators,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
  if (view === "RECOVER_ACCOUNT") {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      RecoverAccountForm,
      {
        className,
        classNames,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
  if (view === "MAGIC_LINK") {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      MagicLinkForm,
      {
        className,
        classNames,
        callbackURL,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
  if (view === "EMAIL_OTP") {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      EmailOTPForm,
      {
        className,
        classNames,
        callbackURL,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
  if (view === "FORGOT_PASSWORD") {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      ForgotPasswordForm,
      {
        className,
        classNames,
        localization,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
  if (view === "RESET_PASSWORD") {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      ResetPasswordForm,
      {
        className,
        classNames,
        localization
      }
    );
  }
  if (view === "SIGN_UP") {
    return signUpEnabled && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SignUpForm,
      {
        className,
        classNames,
        callbackURL,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
}

// src/components/auth/email-otp-button.tsx



function EmailOTPButton({
  classNames,
  isSubmitting,
  localization,
  view
}) {
  var _a, _b, _c, _d;
  const {
    components: { Button },
    viewPaths,
    navigate,
    basePath
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Button,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "w-full",
        (_a = classNames == null ? void 0 : classNames.form) == null ? void 0 : _a.button,
        (_b = classNames == null ? void 0 : classNames.form) == null ? void 0 : _b.secondaryButton
      ),
      disabled: isSubmitting,
      type: "button",
      variant: "secondary",
      onClick: () => navigate(
        `${basePath}/${view === "EMAIL_OTP" ? viewPaths.SIGN_IN : viewPaths.EMAIL_OTP}${window.location.search}`
      ),
      children: [
        view === "EMAIL_OTP" ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.LockIcon, { className: (_c = classNames == null ? void 0 : classNames.form) == null ? void 0 : _c.icon }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.MailIcon, { className: (_d = classNames == null ? void 0 : classNames.form) == null ? void 0 : _d.icon }),
        localization.SIGN_IN_WITH,
        " ",
        view === "EMAIL_OTP" ? localization.PASSWORD : localization.EMAIL_OTP
      ]
    }
  );
}

// src/components/auth/magic-link-button.tsx



function MagicLinkButton({
  classNames,
  isSubmitting,
  localization,
  view
}) {
  var _a, _b, _c, _d;
  const {
    components: { Button },
    viewPaths,
    navigate,
    basePath,
    credentials
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Button,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "w-full",
        (_a = classNames == null ? void 0 : classNames.form) == null ? void 0 : _a.button,
        (_b = classNames == null ? void 0 : classNames.form) == null ? void 0 : _b.secondaryButton
      ),
      disabled: isSubmitting,
      type: "button",
      variant: "secondary",
      onClick: () => navigate(
        `${basePath}/${view === "MAGIC_LINK" || !credentials ? viewPaths.SIGN_IN : viewPaths.MAGIC_LINK}${window.location.search}`
      ),
      children: [
        view === "MAGIC_LINK" ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.LockIcon, { className: (_c = classNames == null ? void 0 : classNames.form) == null ? void 0 : _c.icon }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.MailIcon, { className: (_d = classNames == null ? void 0 : classNames.form) == null ? void 0 : _d.icon }),
        localization.SIGN_IN_WITH,
        " ",
        view === "MAGIC_LINK" ? localization.PASSWORD : localization.MAGIC_LINK
      ]
    }
  );
}

// src/components/auth/one-tap.tsx

function OneTap({ localization, redirectTo }) {
  const {
    authClient,
    localization: contextLocalization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const oneTapFetched = _react.useRef.call(void 0, false);
  localization = _react.useMemo.call(void 0, 
    () => ({ ...contextLocalization, ...localization }),
    [contextLocalization, localization]
  );
  const { onSuccess } = useOnSuccessTransition({ redirectTo });
  _react.useEffect.call(void 0, () => {
    if (oneTapFetched.current) return;
    oneTapFetched.current = true;
    try {
      authClient.oneTap({
        fetchOptions: {
          throw: true,
          onSuccess
        }
      });
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
    }
  }, [authClient, localization, onSuccess, toast]);
  return null;
}

// src/components/auth/passkey-button.tsx



function PasskeyButton({
  classNames,
  isSubmitting,
  localization,
  redirectTo,
  setIsSubmitting
}) {
  var _a, _b;
  const {
    authClient,
    components: { Button },
    localization: contextLocalization,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { onSuccess } = useOnSuccessTransition({ redirectTo });
  const signInPassKey = async () => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(true);
    try {
      const response = await authClient.signIn.passkey({
        fetchOptions: { throw: true }
      });
      if (response == null ? void 0 : response.error) {
        toast({
          variant: "error",
          message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, {
            error: response.error,
            localization
          })
        });
        setIsSubmitting == null ? void 0 : setIsSubmitting(false);
      } else {
        onSuccess();
      }
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      setIsSubmitting == null ? void 0 : setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Button,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "w-full",
        (_a = classNames == null ? void 0 : classNames.form) == null ? void 0 : _a.button,
        (_b = classNames == null ? void 0 : classNames.form) == null ? void 0 : _b.secondaryButton
      ),
      disabled: isSubmitting,
      formNoValidate: true,
      name: "passkey",
      value: "true",
      variant: "secondary",
      onClick: signInPassKey,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.FingerprintIcon, {}),
        localization.SIGN_IN_WITH,
        " ",
        localization.PASSKEY
      ]
    }
  );
}

// src/components/auth/provider-button.tsx


function ProviderButton({
  className,
  classNames,
  callbackURL: callbackURLProp,
  isSubmitting,
  localization,
  other,
  provider,
  redirectTo: redirectToProp,
  socialLayout,
  setIsSubmitting
}) {
  var _a, _b, _c, _d;
  const {
    authClient,
    basePath,
    baseURL,
    components: { Button },
    persistClient,
    redirectTo: contextRedirectTo,
    viewPaths,
    social,
    genericOAuth,
    toast
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const getRedirectTo = _react.useCallback.call(void 0, 
    () => redirectToProp || _chunkQB6CPTMTcjs.getSearchParam.call(void 0, "redirectTo") || contextRedirectTo,
    [redirectToProp, contextRedirectTo]
  );
  const getCallbackURL = _react.useCallback.call(void 0, 
    () => `${baseURL}${callbackURLProp || (persistClient ? `${basePath}/${viewPaths.CALLBACK}?redirectTo=${getRedirectTo()}` : getRedirectTo())}`,
    [
      callbackURLProp,
      persistClient,
      basePath,
      viewPaths,
      baseURL,
      getRedirectTo
    ]
  );
  const doSignInSocial = async () => {
    setIsSubmitting(true);
    try {
      if (other) {
        const oauth2Params = {
          providerId: provider.provider,
          callbackURL: getCallbackURL(),
          fetchOptions: { throw: true }
        };
        if (genericOAuth == null ? void 0 : genericOAuth.signIn) {
          await genericOAuth.signIn(oauth2Params);
          setTimeout(() => {
            setIsSubmitting(false);
          }, 1e4);
        } else {
          await authClient.signIn.oauth2(oauth2Params);
        }
      } else {
        const socialParams = {
          provider: provider.provider,
          callbackURL: getCallbackURL(),
          fetchOptions: { throw: true }
        };
        if (social == null ? void 0 : social.signIn) {
          await social.signIn(socialParams);
          setTimeout(() => {
            setIsSubmitting(false);
          }, 1e4);
        } else {
          await authClient.signIn.social(socialParams);
        }
      }
    } catch (error) {
      toast({
        variant: "error",
        message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
      });
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    Button,
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        socialLayout === "vertical" ? "w-full" : "grow",
        className,
        (_a = classNames == null ? void 0 : classNames.form) == null ? void 0 : _a.button,
        (_b = classNames == null ? void 0 : classNames.form) == null ? void 0 : _b.outlineButton,
        (_c = classNames == null ? void 0 : classNames.form) == null ? void 0 : _c.providerButton
      ),
      disabled: isSubmitting,
      variant: "outline",
      onClick: doSignInSocial,
      children: [
        provider.icon && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, provider.icon, { className: (_d = classNames == null ? void 0 : classNames.form) == null ? void 0 : _d.icon }),
        socialLayout === "grid" && provider.name,
        socialLayout === "vertical" && `${localization.SIGN_IN_WITH} ${provider.name}`
      ]
    }
  );
}

// src/components/auth/auth-card.tsx

function AuthCard({
  className,
  classNames,
  callbackURL,
  cardHeader,
  localization,
  pathname,
  redirectTo,
  socialLayout = "auto",
  view,
  otpSeparators = 0
}) {
  var _a, _b, _c, _d, _e, _f;
  const isHydrated = _chunkZE6BT3OYcjs.useIsHydrated.call(void 0, );
  const {
    basePath,
    components: {
      Button,
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
      Separator
    },
    credentials,
    localization: contextLocalization,
    magicLink,
    emailOTP,
    oneTap,
    passkey,
    settings,
    signUp,
    social,
    genericOAuth,
    viewPaths,
    replace,
    Link
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  if (socialLayout === "auto") {
    socialLayout = !credentials ? "vertical" : (social == null ? void 0 : social.providers) && social.providers.length > 2 ? "horizontal" : "vertical";
  }
  const path = pathname == null ? void 0 : pathname.split("/").pop();
  view = view || _chunkQB6CPTMTcjs.getAuthViewByPath.call(void 0, viewPaths, path) || "SIGN_IN";
  const [isSubmitting, setIsSubmitting] = _react.useState.call(void 0, false);
  _react.useEffect.call(void 0, () => {
    const handlePageHide = () => {
      setIsSubmitting(false);
    };
    window.addEventListener("pagehide", handlePageHide);
    return () => {
      setIsSubmitting(false);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, []);
  _react.useEffect.call(void 0, () => {
    if (view === "SETTINGS" && (settings == null ? void 0 : settings.url)) replace(settings.url);
    if (view === "SETTINGS" && !settings) replace(redirectTo || "/");
    if ((settings == null ? void 0 : settings.basePath) && settingsViews.includes(view)) {
      const viewPath = viewPaths[view];
      const redirectPath = `${settings.basePath}/${viewPath}`;
      replace(redirectPath);
    }
  }, [replace, settings, view, redirectTo, viewPaths]);
  if (view === "CALLBACK") return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, AuthCallback, { redirectTo });
  if (view === "SIGN_OUT") return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SignOut, {});
  if (view === "ACCEPT_INVITATION")
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      AcceptInvitationCard,
      {
        className,
        classNames,
        localization
      }
    );
  if (settingsViews.includes(view))
    return !settings || settings.url ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Loader2, { className: "animate-spin" }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      SettingsCards,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, className),
        classNames: classNames == null ? void 0 : classNames.settings,
        localization,
        view
      }
    );
  const description = !credentials && !magicLink && !emailOTP ? localization.DISABLED_CREDENTIALS_DESCRIPTION : localization[`${view}_DESCRIPTION`];
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Card, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "w-full max-w-sm", className, classNames == null ? void 0 : classNames.base), children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CardHeader, { className: classNames == null ? void 0 : classNames.header, children: cardHeader ? cardHeader : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        CardTitle,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
            "text-lg md:text-xl",
            classNames == null ? void 0 : classNames.title
          ),
          children: localization[view]
        }
      ),
      description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        CardDescription,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
            "text-xs md:text-sm",
            classNames == null ? void 0 : classNames.description
          ),
          children: description
        }
      )
    ] }) }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, CardContent, { className: _chunkQB6CPTMTcjs.cn.call(void 0, "grid gap-6", classNames == null ? void 0 : classNames.content), children: [
      oneTap && ["SIGN_IN", "SIGN_UP", "MAGIC_LINK", "EMAIL_OTP"].includes(
        view
      ) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        OneTap,
        {
          localization,
          redirectTo
        }
      ),
      (credentials || magicLink || emailOTP) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "grid gap-4", children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          AuthForm,
          {
            classNames: classNames == null ? void 0 : classNames.form,
            callbackURL,
            isSubmitting,
            localization,
            otpSeparators,
            pathname,
            redirectTo,
            setIsSubmitting
          }
        ),
        magicLink && (credentials && [
          "FORGOT_PASSWORD",
          "SIGN_UP",
          "SIGN_IN",
          "MAGIC_LINK",
          "EMAIL_OTP"
        ].includes(view) || emailOTP && view === "EMAIL_OTP") && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          MagicLinkButton,
          {
            classNames,
            localization,
            view,
            isSubmitting
          }
        ),
        emailOTP && (credentials && [
          "FORGOT_PASSWORD",
          "SIGN_UP",
          "SIGN_IN",
          "MAGIC_LINK",
          "EMAIL_OTP"
        ].includes(view) || magicLink && ["SIGN_IN", "MAGIC_LINK"].includes(
          view
        )) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          EmailOTPButton,
          {
            classNames,
            localization,
            view,
            isSubmitting
          }
        )
      ] }),
      view !== "RESET_PASSWORD" && (((_a = social == null ? void 0 : social.providers) == null ? void 0 : _a.length) || ((_b = genericOAuth == null ? void 0 : genericOAuth.providers) == null ? void 0 : _b.length) || view === "SIGN_IN" && passkey) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
        (credentials || magicLink || emailOTP) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          "div",
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "flex items-center gap-2",
              classNames == null ? void 0 : classNames.continueWith
            ),
            children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Separator,
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "!w-auto grow",
                    classNames == null ? void 0 : classNames.separator
                  )
                }
              ),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "flex-shrink-0 text-muted-foreground text-sm", children: localization.OR_CONTINUE_WITH }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Separator,
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "!w-auto grow",
                    classNames == null ? void 0 : classNames.separator
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "grid gap-4", children: [
          (((_c = social == null ? void 0 : social.providers) == null ? void 0 : _c.length) || ((_d = genericOAuth == null ? void 0 : genericOAuth.providers) == null ? void 0 : _d.length)) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            "div",
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "flex w-full items-center justify-between gap-4",
                socialLayout === "horizontal" && "flex-wrap",
                socialLayout === "vertical" && "flex-col",
                socialLayout === "grid" && "grid grid-cols-2"
              ),
              children: [
                (_e = social == null ? void 0 : social.providers) == null ? void 0 : _e.map((provider) => {
                  const socialProvider = socialProviders.find(
                    (socialProvider2) => socialProvider2.provider === provider
                  );
                  if (!socialProvider) return null;
                  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    ProviderButton,
                    {
                      classNames,
                      callbackURL,
                      isSubmitting,
                      localization,
                      provider: socialProvider,
                      redirectTo,
                      setIsSubmitting,
                      socialLayout
                    },
                    provider
                  );
                }),
                (_f = genericOAuth == null ? void 0 : genericOAuth.providers) == null ? void 0 : _f.map(
                  (provider) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    ProviderButton,
                    {
                      classNames,
                      callbackURL,
                      isSubmitting,
                      localization,
                      provider,
                      redirectTo,
                      setIsSubmitting,
                      socialLayout,
                      other: true
                    },
                    provider.provider
                  )
                )
              ]
            }
          ),
          passkey && [
            "SIGN_IN",
            "MAGIC_LINK",
            "EMAIL_OTP",
            "RECOVER_ACCOUNT",
            "TWO_FACTOR",
            "FORGOT_PASSWORD"
          ].includes(view) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            PasskeyButton,
            {
              classNames,
              isSubmitting,
              localization,
              redirectTo,
              setIsSubmitting
            }
          )
        ] })
      ] })
    ] }),
    credentials && signUp && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      CardFooter,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "justify-center gap-1.5 text-muted-foreground text-sm",
          classNames == null ? void 0 : classNames.footer
        ),
        children: [
          view === "SIGN_IN" || view === "MAGIC_LINK" || view === "EMAIL_OTP" ? localization.DONT_HAVE_AN_ACCOUNT : view === "SIGN_UP" ? localization.ALREADY_HAVE_AN_ACCOUNT : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ArrowLeftIcon, { className: "size-3" }),
          view === "SIGN_IN" || view === "MAGIC_LINK" || view === "EMAIL_OTP" || view === "SIGN_UP" ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Link,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "text-foreground underline",
                classNames == null ? void 0 : classNames.footerLink
              ),
              href: `${basePath}/${viewPaths[view === "SIGN_IN" || view === "MAGIC_LINK" || view === "EMAIL_OTP" ? "SIGN_UP" : "SIGN_IN"]}${isHydrated ? window.location.search : ""}`,
              children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Button,
                {
                  variant: "link",
                  size: "sm",
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "px-0 text-foreground underline",
                    classNames == null ? void 0 : classNames.footerLink
                  ),
                  children: view === "SIGN_IN" || view === "MAGIC_LINK" || view === "EMAIL_OTP" ? localization.SIGN_UP : localization.SIGN_IN
                }
              )
            }
          ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            Button,
            {
              variant: "link",
              size: "sm",
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                "px-0 text-foreground underline",
                classNames == null ? void 0 : classNames.footerLink
              ),
              onClick: () => window.history.back(),
              children: localization.GO_BACK
            }
          )
        ]
      }
    )
  ] });
}

// src/components/auth-loading.tsx

function AuthLoading({ children }) {
  const {
    hooks: { useSession }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const { isPending } = useSession();
  return isPending ? children : null;
}

// src/components/organization/organization-switcher.tsx














// src/components/organization/personal-account-view.tsx


function PersonalAccountView({
  className,
  classNames,
  isPending,
  size,
  user,
  localization: propLocalization
}) {
  const {
    components: { Skeleton },
    localization: contextLocalization
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = _react.useMemo.call(void 0, 
    () => ({ ...contextLocalization, ...propLocalization }),
    [contextLocalization, propLocalization]
  );
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "div",
    {
      className: _chunkQB6CPTMTcjs.cn.call(void 0, 
        "flex items-center gap-2",
        className,
        classNames == null ? void 0 : classNames.base
      ),
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          UserAvatar,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, size !== "sm" && "my-0.5"),
            classNames: classNames == null ? void 0 : classNames.avatar,
            isPending,
            localization,
            size,
            user
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          "div",
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "grid flex-1 text-left leading-tight",
              classNames == null ? void 0 : classNames.content
            ),
            children: isPending ? /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Skeleton,
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "max-w-full",
                    size === "lg" ? "h-4.5 w-32" : "h-3.5 w-24",
                    classNames == null ? void 0 : classNames.title,
                    classNames == null ? void 0 : classNames.skeleton
                  )
                }
              ),
              size !== "sm" && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                Skeleton,
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "mt-1.5 max-w-full",
                    size === "lg" ? "h-3.5 w-40" : "h-3 w-32",
                    classNames == null ? void 0 : classNames.subtitle,
                    classNames == null ? void 0 : classNames.skeleton
                  )
                }
              )
            ] }) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                "span",
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "truncate font-semibold",
                    size === "lg" ? "text-base" : "text-sm",
                    classNames == null ? void 0 : classNames.title
                  ),
                  children: (user == null ? void 0 : user.displayUsername) || (user == null ? void 0 : user.username) || (user == null ? void 0 : user.displayName) || (user == null ? void 0 : user.firstName) || (user == null ? void 0 : user.name) || (user == null ? void 0 : user.fullName) || (user == null ? void 0 : user.email) || (localization == null ? void 0 : localization.USER)
                }
              ),
              size !== "sm" && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                "span",
                {
                  className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                    "truncate opacity-70",
                    size === "lg" ? "text-sm" : "text-xs",
                    classNames == null ? void 0 : classNames.subtitle
                  ),
                  children: localization == null ? void 0 : localization.PERSONAL_ACCOUNT
                }
              )
            ] })
          }
        )
      ]
    }
  );
}

// src/components/organization/organization-switcher.tsx

function OrganizationSwitcher({
  className,
  classNames,
  align,
  trigger,
  localization: localizationProp,
  size,
  onSetActive,
  hidePersonal,
  ...props
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  const {
    authClient,
    basePath,
    components: {
      Button,
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      DropdownMenuTrigger
    },
    hooks: { useActiveOrganization, useSession, useListOrganizations },
    localization: contextLocalization,
    settings,
    toast,
    viewPaths,
    Link
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = _react.useMemo.call(void 0, 
    () => ({ ...contextLocalization, ...localizationProp }),
    [contextLocalization, localizationProp]
  );
  const [activeOrganizationPending, setActiveOrganizationPending] = _react.useState.call(void 0, false);
  const [isCreateOrgDialogOpen, setIsCreateOrgDialogOpen] = _react.useState.call(void 0, false);
  const [dropdownOpen, setDropdownOpen] = _react.useState.call(void 0, false);
  const { data: sessionData, isPending: sessionPending } = useSession();
  const user = sessionData == null ? void 0 : sessionData.user;
  const { data: organizations } = useListOrganizations();
  const {
    data: activeOrganization,
    isPending: organizationPending,
    refetch: refetchActiveOrganization,
    isRefetching
  } = useActiveOrganization();
  const isPending = sessionPending || activeOrganizationPending || organizationPending;
  _react.useEffect.call(void 0, () => {
    if (isRefetching) return;
    setActiveOrganizationPending(false);
  }, [activeOrganization, isRefetching]);
  const switchOrganization = _react.useCallback.call(void 0, 
    async (organizationId) => {
      if (hidePersonal && organizationId === null) {
        return;
      }
      setActiveOrganizationPending(true);
      try {
        onSetActive == null ? void 0 : onSetActive(organizationId);
        await authClient.organization.setActive({
          organizationId,
          fetchOptions: {
            throw: true
          }
        });
        await (refetchActiveOrganization == null ? void 0 : refetchActiveOrganization());
      } catch (error) {
        toast({
          variant: "error",
          message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
        });
        setActiveOrganizationPending(false);
      }
    },
    [
      authClient,
      toast,
      localization,
      onSetActive,
      refetchActiveOrganization,
      hidePersonal
    ]
  );
  const shouldShowPersonal = !hidePersonal && !activeOrganization && !activeOrganizationPending;
  _react.useEffect.call(void 0, () => {
    if (hidePersonal && !activeOrganization && !activeOrganizationPending && organizations && organizations.length > 0 && !sessionPending && !organizationPending) {
      switchOrganization(organizations[0].id);
    }
  }, [
    hidePersonal,
    activeOrganization,
    activeOrganizationPending,
    organizations,
    sessionPending,
    organizationPending,
    switchOrganization
  ]);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenu, { open: dropdownOpen, onOpenChange: setDropdownOpen, children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DropdownMenuTrigger, { asChild: true, children: trigger || (size === "icon" ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        Button,
        {
          size: "icon",
          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
            "size-fit rounded-full",
            className,
            (_a = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _a.base
          ),
          variant: "ghost",
          type: "button",
          ...props,
          children: !sessionData && !isPending || activeOrganizationPending || activeOrganization || (user == null ? void 0 : user.isAnonymous) || hidePersonal ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            OrganizationLogo,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                className,
                classNames == null ? void 0 : classNames.base
              ),
              classNames: (_b = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _b.avatar,
              isPending: isPending || activeOrganizationPending,
              organization: activeOrganization,
              "aria-label": localization.ORGANIZATION,
              localization
            },
            activeOrganization == null ? void 0 : activeOrganization.logo
          ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            UserAvatar,
            {
              className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                className,
                classNames == null ? void 0 : classNames.base
              ),
              classNames: (_c = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _c.avatar,
              isPending,
              user,
              "aria-label": localization.ACCOUNT,
              localization
            },
            user == null ? void 0 : user.image
          )
        }
      ) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
        Button,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
            "!p-2",
            className,
            (_d = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _d.base
          ),
          size,
          ...props,
          children: [
            !sessionData && !isPending || activeOrganizationPending || activeOrganization || (user == null ? void 0 : user.isAnonymous) || hidePersonal ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              OrganizationView,
              {
                classNames: (_e = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _e.organization,
                isPending: isPending || activeOrganizationPending,
                localization,
                organization: activeOrganization,
                size
              }
            ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              PersonalAccountView,
              {
                classNames: (_f = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _f.user,
                isPending,
                localization,
                size,
                user
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronsUpDown, { className: "ml-auto" })
          ]
        }
      )) }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
        DropdownMenuContent,
        {
          className: _chunkQB6CPTMTcjs.cn.call(void 0, 
            "w-[--radix-dropdown-menu-trigger-width] min-w-56 max-w-64",
            (_g = classNames == null ? void 0 : classNames.content) == null ? void 0 : _g.base
          ),
          align,
          onCloseAutoFocus: (e) => e.preventDefault(),
          children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              "div",
              {
                className: _chunkQB6CPTMTcjs.cn.call(void 0, 
                  "flex items-center justify-between gap-2 p-2",
                  (_h = classNames == null ? void 0 : classNames.content) == null ? void 0 : _h.menuItem
                ),
                children: user && !user.isAnonymous || isPending ? /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
                  activeOrganizationPending || activeOrganization || hidePersonal ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    OrganizationView,
                    {
                      classNames: (_i = classNames == null ? void 0 : classNames.content) == null ? void 0 : _i.organization,
                      isPending: isPending || activeOrganizationPending,
                      organization: activeOrganization,
                      localization
                    }
                  ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    PersonalAccountView,
                    {
                      classNames: (_j = classNames == null ? void 0 : classNames.content) == null ? void 0 : _j.user,
                      isPending,
                      localization,
                      user
                    }
                  ),
                  !isPending && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    Link,
                    {
                      href: `${(settings == null ? void 0 : settings.basePath) || basePath}/${activeOrganization ? viewPaths.ORGANIZATION : viewPaths.SETTINGS}`,
                      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                        Button,
                        {
                          size: "icon",
                          variant: "outline",
                          className: "!size-8 ml-auto",
                          onClick: () => setDropdownOpen(false),
                          children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.SettingsIcon, { className: "size-4" })
                        }
                      )
                    }
                  )
                ] }) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "-my-1 text-muted-foreground text-xs", children: localization.ORGANIZATION })
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              DropdownMenuSeparator,
              {
                className: (_k = classNames == null ? void 0 : classNames.content) == null ? void 0 : _k.separator
              }
            ),
            activeOrganization && !hidePersonal && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              DropdownMenuItem,
              {
                onClick: () => switchOrganization(null),
                children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  PersonalAccountView,
                  {
                    classNames: (_l = classNames == null ? void 0 : classNames.content) == null ? void 0 : _l.user,
                    isPending,
                    localization,
                    user
                  }
                )
              }
            ),
            organizations == null ? void 0 : organizations.map(
              (organization) => {
                var _a2;
                return organization.id !== (activeOrganization == null ? void 0 : activeOrganization.id) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  DropdownMenuItem,
                  {
                    onClick: () => switchOrganization(organization.id),
                    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      OrganizationView,
                      {
                        classNames: (_a2 = classNames == null ? void 0 : classNames.content) == null ? void 0 : _a2.organization,
                        isPending,
                        localization,
                        organization
                      }
                    )
                  },
                  organization.id
                );
              }
            ),
            organizations && organizations.length > 0 && (!hidePersonal || organizations.length > 1) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              DropdownMenuSeparator,
              {
                className: (_m = classNames == null ? void 0 : classNames.content) == null ? void 0 : _m.separator
              }
            ),
            !isPending && sessionData && !user.isAnonymous ? /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              DropdownMenuItem,
              {
                className: _chunkQB6CPTMTcjs.cn.call(void 0, (_n = classNames == null ? void 0 : classNames.content) == null ? void 0 : _n.menuItem),
                onClick: () => setIsCreateOrgDialogOpen(true),
                children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.PlusCircleIcon, {}),
                  localization.CREATE_ORGANIZATION
                ]
              }
            ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Link, { href: `${basePath}/${viewPaths.SIGN_IN}`, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              DropdownMenuItem,
              {
                className: _chunkQB6CPTMTcjs.cn.call(void 0, (_o = classNames == null ? void 0 : classNames.content) == null ? void 0 : _o.menuItem),
                children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.LogInIcon, {}),
                  localization.SIGN_IN
                ]
              }
            ) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      CreateOrganizationDialog,
      {
        open: isCreateOrgDialogOpen,
        onOpenChange: setIsCreateOrgDialogOpen,
        localization
      }
    )
  ] });
}

// src/components/redirect-to-sign-in.tsx
function RedirectToSignIn() {
  useAuthenticate({ authView: "SIGN_IN" });
  return null;
}

// src/components/redirect-to-sign-up.tsx
function RedirectToSignUp() {
  useAuthenticate({ authView: "SIGN_UP" });
  return null;
}

// src/components/signed-in.tsx

function SignedIn({ children }) {
  const {
    hooks: { useSession }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const { data } = useSession();
  return data ? children : null;
}

// src/components/signed-out.tsx

function SignedOut({ children }) {
  const {
    hooks: { useSession }
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const { data, isPending } = useSession();
  return !data && !isPending ? children : null;
}

// src/components/user-button.tsx


















function UserButton({
  className,
  classNames,
  align,
  trigger,
  additionalLinks,
  disableDefaultLinks,
  localization: propLocalization,
  size,
  ...props
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  const {
    basePath,
    components: {
      Button,
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuSeparator,
      DropdownMenuItem
    },
    hooks: { useSession, useListDeviceSessions },
    mutators: { setActiveSession },
    localization: contextLocalization,
    multiSession,
    settings,
    signUp,
    toast,
    viewPaths,
    onSessionChange,
    Link
  } = _react.useContext.call(void 0, _chunkZE6BT3OYcjs.AuthUIContext);
  const localization = _react.useMemo.call(void 0, 
    () => ({ ...contextLocalization, ...propLocalization }),
    [contextLocalization, propLocalization]
  );
  let deviceSessions = null;
  let deviceSessionsPending = false;
  if (multiSession) {
    const { data, isPending: isPending2 } = useListDeviceSessions();
    deviceSessions = data;
    deviceSessionsPending = isPending2;
  }
  const { data: sessionData, isPending: sessionPending } = useSession();
  const user = sessionData == null ? void 0 : sessionData.user;
  const [activeSessionPending, setActiveSessionPending] = _react.useState.call(void 0, false);
  const isPending = sessionPending || activeSessionPending;
  const switchAccount = _react.useCallback.call(void 0, 
    async (sessionToken) => {
      setActiveSessionPending(true);
      try {
        await setActiveSession({ sessionToken });
        onSessionChange == null ? void 0 : onSessionChange();
      } catch (error) {
        toast({
          variant: "error",
          message: _chunkQB6CPTMTcjs.getLocalizedError.call(void 0, { error, localization })
        });
        setActiveSessionPending(false);
      }
    },
    [setActiveSession, onSessionChange, toast, localization]
  );
  _react.useEffect.call(void 0, () => {
    if (!multiSession) return;
    setActiveSessionPending(false);
  }, [sessionData, multiSession]);
  const warningLogged = _react.useRef.call(void 0, false);
  _react.useEffect.call(void 0, () => {
    if (size || warningLogged.current) return;
    console.warn(
      "[Better Auth UI] The `size` prop of `UserButton` no longer defaults to `icon`. Please pass `size='icon'` to the `UserButton` component to get the same behaviour as before. This warning will be removed in a future release. It can be suppressed in the meantime by defining the `size` prop."
    );
    warningLogged.current = true;
  }, [size]);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DropdownMenu, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      DropdownMenuTrigger,
      {
        asChild: true,
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          size === "icon" && "rounded-full",
          (_a = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _a.base
        ),
        children: trigger || (size === "icon" ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Button,
          {
            size: "icon",
            className: "size-fit rounded-full",
            variant: "ghost",
            children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              UserAvatar,
              {
                isPending,
                className: _chunkQB6CPTMTcjs.cn.call(void 0, className, classNames == null ? void 0 : classNames.base),
                classNames: (_b = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _b.avatar,
                user,
                "aria-label": localization.ACCOUNT,
                localization
              },
              user == null ? void 0 : user.image
            )
          }
        ) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
          Button,
          {
            className: _chunkQB6CPTMTcjs.cn.call(void 0, 
              "!p-2 h-fit",
              className,
              (_c = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _c.base
            ),
            size,
            ...props,
            children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                UserView,
                {
                  size,
                  user: !(user == null ? void 0 : user.isAnonymous) ? user : null,
                  isPending,
                  classNames: (_d = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _d.user,
                  localization
                }
              ),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronsUpDown, { className: "ml-auto" })
            ]
          }
        ))
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      DropdownMenuContent,
      {
        className: _chunkQB6CPTMTcjs.cn.call(void 0, 
          "w-[--radix-dropdown-menu-trigger-width] min-w-56 max-w-64",
          (_e = classNames == null ? void 0 : classNames.content) == null ? void 0 : _e.base
        ),
        align,
        onCloseAutoFocus: (e) => e.preventDefault(),
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: _chunkQB6CPTMTcjs.cn.call(void 0, "p-2", (_f = classNames == null ? void 0 : classNames.content) == null ? void 0 : _f.menuItem), children: user && !user.isAnonymous || isPending ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            UserView,
            {
              user,
              isPending,
              classNames: (_g = classNames == null ? void 0 : classNames.content) == null ? void 0 : _g.user,
              localization
            }
          ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "-my-1 text-muted-foreground text-xs", children: localization.ACCOUNT }) }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            DropdownMenuSeparator,
            {
              className: (_h = classNames == null ? void 0 : classNames.content) == null ? void 0 : _h.separator
            }
          ),
          additionalLinks == null ? void 0 : additionalLinks.map(
            ({ href, icon, label, signedIn }, index) => {
              var _a2;
              return (signedIn === void 0 || signedIn && !!sessionData || !signedIn && !sessionData) && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Link, { href, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                DropdownMenuItem,
                {
                  className: (_a2 = classNames == null ? void 0 : classNames.content) == null ? void 0 : _a2.menuItem,
                  children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
                    icon,
                    label
                  ] })
                }
              ) }, index);
            }
          ),
          !user || user.isAnonymous ? /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Link, { href: `${basePath}/${viewPaths.SIGN_IN}`, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              DropdownMenuItem,
              {
                className: (_i = classNames == null ? void 0 : classNames.content) == null ? void 0 : _i.menuItem,
                children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.LogInIcon, {}),
                  localization.SIGN_IN
                ]
              }
            ) }),
            signUp && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Link, { href: `${basePath}/${viewPaths.SIGN_UP}`, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              DropdownMenuItem,
              {
                className: (_j = classNames == null ? void 0 : classNames.content) == null ? void 0 : _j.menuItem,
                children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.UserRoundPlus, {}),
                  localization.SIGN_UP
                ]
              }
            ) })
          ] }) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
            !disableDefaultLinks && settings && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              Link,
              {
                href: settings.url || `${settings.basePath || basePath}/${viewPaths.SETTINGS}`,
                children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
                  DropdownMenuItem,
                  {
                    className: (_k = classNames == null ? void 0 : classNames.content) == null ? void 0 : _k.menuItem,
                    children: [
                      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.SettingsIcon, {}),
                      localization.SETTINGS
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Link, { href: `${basePath}/${viewPaths.SIGN_OUT}`, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              DropdownMenuItem,
              {
                className: (_l = classNames == null ? void 0 : classNames.content) == null ? void 0 : _l.menuItem,
                children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.LogOutIcon, {}),
                  localization.SIGN_OUT
                ]
              }
            ) })
          ] }),
          user && multiSession && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              DropdownMenuSeparator,
              {
                className: (_m = classNames == null ? void 0 : classNames.content) == null ? void 0 : _m.separator
              }
            ),
            !deviceSessions && deviceSessionsPending && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                DropdownMenuItem,
                {
                  disabled: true,
                  className: (_n = classNames == null ? void 0 : classNames.content) == null ? void 0 : _n.menuItem,
                  children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                    UserView,
                    {
                      isPending: true,
                      classNames: (_o = classNames == null ? void 0 : classNames.content) == null ? void 0 : _o.user
                    }
                  )
                }
              ),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                DropdownMenuSeparator,
                {
                  className: (_p = classNames == null ? void 0 : classNames.content) == null ? void 0 : _p.separator
                }
              )
            ] }),
            deviceSessions == null ? void 0 : deviceSessions.filter(
              (sessionData2) => sessionData2.user.id !== (user == null ? void 0 : user.id)
            ).map(({ session, user: user2 }) => {
              var _a2, _b2, _c2;
              return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _react.Fragment, { children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  DropdownMenuItem,
                  {
                    className: (_a2 = classNames == null ? void 0 : classNames.content) == null ? void 0 : _a2.menuItem,
                    onClick: () => switchAccount(session.token),
                    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                      UserView,
                      {
                        user: user2,
                        classNames: (_b2 = classNames == null ? void 0 : classNames.content) == null ? void 0 : _b2.user
                      }
                    )
                  }
                ),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
                  DropdownMenuSeparator,
                  {
                    className: (_c2 = classNames == null ? void 0 : classNames.content) == null ? void 0 : _c2.separator
                  }
                )
              ] }, session.id);
            }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Link, { href: `${basePath}/${viewPaths.SIGN_IN}`, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
              DropdownMenuItem,
              {
                className: (_q = classNames == null ? void 0 : classNames.content) == null ? void 0 : _q.menuItem,
                children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.PlusCircleIcon, {}),
                  localization.ADD_ACCOUNT
                ]
              }
            ) })
          ] })
        ]
      }
    )
  ] });
}















































































exports.APIKeysCard = APIKeysCard; exports.AcceptInvitationCard = AcceptInvitationCard; exports.AccountSettingsCards = AccountSettingsCards; exports.AccountsCard = AccountsCard; exports.AppleIcon = AppleIcon; exports.AuthCallback = AuthCallback; exports.AuthCard = AuthCard; exports.AuthForm = AuthForm; exports.AuthLoading = AuthLoading; exports.AuthUIContext = _chunkZE6BT3OYcjs.AuthUIContext; exports.AuthUIProvider = _chunkZE6BT3OYcjs.AuthUIProvider; exports.ChangeEmailCard = ChangeEmailCard; exports.ChangePasswordCard = ChangePasswordCard; exports.CreateOrganizationDialog = CreateOrganizationDialog; exports.DeleteAccountCard = DeleteAccountCard; exports.DeleteOrganizationCard = DeleteOrganizationCard; exports.DiscordIcon = DiscordIcon; exports.DropboxIcon = DropboxIcon; exports.EmailTemplate = _chunkJOLFGV3Ucjs.EmailTemplate; exports.FacebookIcon = FacebookIcon; exports.ForgotPasswordForm = ForgotPasswordForm; exports.GitHubIcon = GitHubIcon; exports.GitLabIcon = GitLabIcon; exports.GoogleIcon = GoogleIcon; exports.KickIcon = KickIcon; exports.LinkedInIcon = LinkedInIcon; exports.MagicLinkForm = MagicLinkForm; exports.MicrosoftIcon = MicrosoftIcon; exports.OrganizationInvitationsCard = OrganizationInvitationsCard; exports.OrganizationLogo = OrganizationLogo; exports.OrganizationLogoCard = OrganizationLogoCard; exports.OrganizationMembersCard = OrganizationMembersCard; exports.OrganizationNameCard = OrganizationNameCard; exports.OrganizationSettingsCards = OrganizationSettingsCards; exports.OrganizationSlugCard = OrganizationSlugCard; exports.OrganizationSwitcher = OrganizationSwitcher; exports.OrganizationView = OrganizationView; exports.OrganizationsCard = OrganizationsCard; exports.PasskeysCard = PasskeysCard; exports.PasswordInput = PasswordInput; exports.ProvidersCard = ProvidersCard; exports.RecoverAccountForm = RecoverAccountForm; exports.RedditIcon = RedditIcon; exports.RedirectToSignIn = RedirectToSignIn; exports.RedirectToSignUp = RedirectToSignUp; exports.ResetPasswordForm = ResetPasswordForm; exports.RobloxIcon = RobloxIcon; exports.SecuritySettingsCards = SecuritySettingsCards; exports.SessionsCard = SessionsCard; exports.SettingsCard = SettingsCard; exports.SettingsCards = SettingsCards; exports.SignInForm = SignInForm; exports.SignOut = SignOut; exports.SignUpForm = SignUpForm; exports.SignedIn = SignedIn; exports.SignedOut = SignedOut; exports.SpotifyIcon = SpotifyIcon; exports.TikTokIcon = TikTokIcon; exports.TwitchIcon = TwitchIcon; exports.TwoFactorCard = TwoFactorCard; exports.TwoFactorForm = TwoFactorForm; exports.UpdateAvatarCard = UpdateAvatarCard; exports.UpdateFieldCard = UpdateFieldCard; exports.UpdateNameCard = UpdateNameCard; exports.UpdateUsernameCard = UpdateUsernameCard; exports.UserAvatar = UserAvatar; exports.UserButton = UserButton; exports.UserView = UserView; exports.VKIcon = VKIcon; exports.XIcon = XIcon; exports.ZoomIcon = ZoomIcon; exports.authLocalization = _chunkZE6BT3OYcjs.authLocalization; exports.authViewPaths = _chunkQB6CPTMTcjs.authViewPaths; exports.defaultComponents = _chunkZE6BT3OYcjs.defaultComponents; exports.settingsViews = settingsViews; exports.socialProviders = socialProviders; exports.useAuthData = _chunkZE6BT3OYcjs.useAuthData; exports.useAuthenticate = useAuthenticate;
