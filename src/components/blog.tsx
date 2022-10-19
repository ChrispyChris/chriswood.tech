import React, { ReactElement } from "react";
import BlogPostsListContainer from "./blog_post_aggregator";
import "../sass/blog.scss";

export default function Blog(): ReactElement {
    return (
        <div className="blog__grid">
            <div className="blog__title-wrapper">
            <h1 className="blog__title">Blog Posts</h1>
        </div>

        <div className="blog__blog-wrapper">
            <BlogPostsListContainer />       
        </div>

          <div className="blog__pgp-wrapper">
            <h2 className="blog__pgp-title">My PGP public key:</h2>
              <span className="blog__pgp-key">-----BEGIN PGP PUBLIC KEY BLOCK-----<br /><br />

                mDMEYieoUxYJKwYBBAHaRw8BAQdA5xICq+r9moy81noPwwisjlL2T6zgkJQWRmHS
                Kd5LAzy0KkNocmlzdG9waGVyIFdvb2QgPGNocmlzcHljaHJpczNAZ21haWwuY29t
                PoiWBBMWCgA+AhsBBQkJZgGAAh4BAheAFiEEGRz6VyV4EjC8Hml2T6Px37tzTxgF
                AmInqd4FCwkIBwMFFQoJCAsFFgIDAQAACgkQT6Px37tzTxg/WQD9E5zBIhu+DnVk
                YdU0pGzFo2DUuZrIZdKYYxjIO2NqpMIBAJCajuS1KrriSSghnffFr6YZotgoAzSJ
                FPuEbKqkp+cBuDMEYieqJRYJKwYBBAHaRw8BAQdAQcbY0wZInSrSxiYClJ6W6XMn
                8deP6gz3dPhDf7L+obyI9QQYFgoAJhYhBBkc+lcleBIwvB5pdk+j8d+7c08YBQJi
                J6olAhsCBQkFo5qAAIEJEE+j8d+7c08YdiAEGRYKAB0WIQQu2D52kAKVtUUkmEy7
                SxkDXJQCDQUCYieqJQAKCRC7SxkDXJQCDccFAQC7qlhNwPv2O9pWyFFxSnkRpL4i
                LECgWGPWCreOSUZ1BwEAppxvrqQnGpe3v0ajEWqQ1cDBUqP3zfpcWCiFvL55Yw6Y
                KwD/YvZv6WE3ofiq3gEDrx29perRdBL+iWPwHSX6xXo7We8BALu/vyI7ULJSlPJQ
                afL26MSnaJsagz5Bj0QPEHVoACINuQINBGInqkcBEADWXYZoEirVIBtcvThy3Xfc
                4s0FC/GtJGq9jTMNC2Gw32Opq4rbOG17TPiLVMH5M+EoWM+iwisHu4CtSvLqe6FY
                hgqqOviIAQgKpq/EFQGCpxf+1z5YRDrBWEyZLy9YBZdH3va4+F+u/Y6maDa9qpAN
                1yUVPJQb9QL9ErYk9PIeNq/FIqoCMBferiXW9jV43y2vUDQF60z/xsAK0VCxYrrD
                rRe65VTygeV4yO3lnrIcbUO0KqczKsrfALhixcGzK9Dt5COh0Vn39BAoes8Y1HKF
                344XZ7tB7tRhtXTQl/ateHBHLEsne14YSh95wyY2D4jXRg06u/4XPLxqIlAiuSW6
                a071xtfy4muaOg6qqlh9slCKFivQ8kEvLuIe4c6A/f330wPdUeP14TQhV2+IZJs5
                8ebQ3DNm+3Yx9b2C0BKHZ04/BjvGQoOJaYN5YY64pML4eNg2K9nQc2jTt2QDkLS5
                h4ltnanqVpcXHipD5gdzYKibbFfPLAGzq/2cc+oWQCnyxy0peCb7zhIEzvlFXJxQ
                GCwblGoAOduZY96dor60TfT+J5HkUDpUygpZCN/ikxlsFA1uTcRZjCfJ8cWEJ3Xw
                tXvzH8hpJax6OwOpAYpBDXfMxqcemmmcoyBpt3dU+5nFldUrk3MXji486aGCdyAX
                lcJJTx/K+Z+7pLqrLGXRgwARAQABiH4EGBYKACYWIQQZHPpXJXgSMLweaXZPo/Hf
                u3NPGAUCYieqRwIbDAUJBaOagAAKCRBPo/Hfu3NPGH5IAP9xGg/yU4/DbUNpFZWj
                0Tb+Ghx0DQc5KLi4ZgxHz0lTQwD+MU5mEEwFzPf5MWxnpJXw8Ptp7AgycKYd/EJu
                eqzN9wa4MwRiJ6psFgkrBgEEAdpHDwEBB0BEOqT+tEFgL3gavfjCwoKyHqdL2FDv
                UQ+XzN1rtjti+Ih+BBgWCgAmFiEEGRz6VyV4EjC8Hml2T6Px37tzTxgFAmInqmwC
                GyAFCQWjmoAACgkQT6Px37tzTxitowEApEHrt71mNTtSovnUSCXuYT8zeK2Lyg+0
                7+NgBX4RFWoA/25j6U8kDHAUnxgM9zAw15uKN0FcO00NC0UqkBFCbqIE
                =TW8j<br />
                -----END PGP PUBLIC KEY BLOCK-----
              </span>
          </div>
      </div>
    );
}
