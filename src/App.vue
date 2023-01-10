<template>
  <div id="app">
    <header>
    </header>
    <router-view/>
    <div class="footer-links">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-4 col-lg-4 footer-links__address">
            <p>CompareCompanies<br>
              A18, The Embankment Business Park,<br>Vale Rd, Heaton Mersey, Stockport SK4 3GN</p>
          </div>
          <div class="col-xs-12 col-md-4 col-lg-4 footer-links__email">
            <a href="mailto:customercare@comparecompanies.co.uk">customercare@comparecompanies.co.uk</a>
          </div>
          <div class="col-xs-12 col-md-4 col-lg-4 footer-links__links">
            <a href="https://comparecompanies.co.uk/about-us.php" class="footer-links__links-anchor">About Us</a>
            <a href="https://comparecompanies.co.uk/contact-us.php" class="footer-links__links-anchor">Contact Us</a>
            <a href="https://comparecompanies.co.uk/privacy-policy.php" class="footer-links__links-anchor">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-8 col-lg-8 fCopy">
            <span>Leads 2 Trade Limited Copyright &copy;{{ moment(new Date()).format('YYYY') }} - All Rights Reserved | Registered in England - Company No: 5987279 <br> VAT No: GB 896 828154 | Registered Office: A18, The Embankment Business Park, Vale Rd, Stockport SK4 3GN</span>
          </div>
          <div class="col-sm-4 col-md-4 col-lg-4 fRight">
            <ul class="fSocialicons">
              <li>
                <a href="" class="footer-cc-link"></a>
              </li>
              <li>
                <a href="https://www.facebook.com/comparecompanies" target="_blank" rel="noopener" class="footer-facebook-link"></a>
              </li>
              <li><a href="https://twitter.com/comparecompanys" target="_blank" rel="noopener" class="footer-twitter-link"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #28292A;
}
.advise {
  font-size: 13px;
  line-height: 18px;
  color: #686b6e;
}

.logo_image {
  max-height: 480px;
  max-width: 480px;
}
.primary-button {
  display: inline-block;
  height: 54px;
  padding: 0 20px;
  margin: 0;
  background: #95C717;
  border: none;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  text-transform: lowercase;
  color: white;
  line-height: 54px;
  letter-spacing: 0.05em;
  -moz-transition: all 0.1s ease-in;
  -webkit-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
}

.primary-button:active,
.primary-button:hover {
  background: #B3D624;
  color: white;
  text-decoration: none;
}

.primary-button:visited {
  text-decoration: none;
}

.primary-button:disabled {
  background: #F5F5F5;
  color: #B8BDC2;
  border: 1px solid #D8D8D8;
  text-decoration: none;
}

.secondary-button {
  height: 54px;
  padding: 0 20px;
  margin: 0;
  background: #326CB9;
  border: none;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  text-transform: lowercase;
  color: white;
  line-height: 54px;
  letter-spacing: 0.05em;
  -moz-transition: all 0.1s ease-in;
  -webkit-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
}
@media only screen and (max-width: 576px) {
  .primary-button {
    width: 100%;
  }
  .secondary-button {
    width: 100%;
  }
}

.secondary-button:active,
.secondary-button:focus,
.secondary-button:hover {
  background: #70AEFF;
  color: white;
  text-decoration: none;
}

.secondary-button:visited {
  text-decoration: none;
}

.hLogoFull {
  display: block;
  float: left;
  width: 293px;
  height: 75px;
  padding: 0;
  margin: 20px 0 4px;
  background-image: url(./assets/logo-full.svg);
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
}

.hLogoIcon {
  display: block;
  float: left;
  width: 69px;
  height: 54px;
  padding: 0;
  margin: 20px 0 4px;
  background-image: url(./assets/logo.svg);
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
}

.hTitle {
  display: block;
  width: 194px;
  height: 36px;
  margin: 20px 0 0 76px;
  background-image: url(./assets/compare-logo-text.svg);
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
}

.hTitleEnd {
  font-size: 20px;
  font-weight: 400;
  margin-left: 76px;
  line-height: 32px;
}

.hTitle a {
  display: block;
  width: 194px;
  height: 36px;
  color: #1d71b8;
  text-decoration: none;
}

.hProductTitle {
  margin-left: 76px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.27px;
  text-transform: uppercase;
}

.hSubtitle {
  clear: both;
  float: left;
  color: #686b6e;
  font-size: 16px;
}

.hCallus {
  display: block;
  margin-top: 12px;
  margin-bottom: 0;
}

.hCallus li {
  list-style-type: none;
  display: block;
}

.hCallus li:last-of-type {
  border-right: none;
  padding: 0 0 8px 40px;
}

.hCallus li .hCallusInner {
  display: inline-block;
  margin: 0 auto;
  text-align: center;
}

.hCallus li .icon {
  width: 37px;
  height: 40px;
  float: left;
  background-image: url(./assets/sprite.png);
  background-repeat: no-repeat;
  background-size: 37px 118px;
}

.hCallus li .icon.iconTime {
  background-position: 0 -44px;
}

.hCallus li .icon.iconPhone {
  background-position: 0 0;
}

.hCallus li span {
  display: block;
  margin-left: 45px;
  color: #1d71b8;
  font-size: 21px;
  font-weight: 700;
  text-align: left;
}

.hCallus li strong {
  color: #28292A;
  font-size: 15px;
}

.hCallus li a {
  display: block;
  margin-left: 45px;
  color: #28292A;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  line-height: 36px;
  font-weight: 700;
  text-align: left;
  text-decoration: none;
}

.hCallus li a:hover {
  color: #1d71b8;
}

.header_top {
  padding: 21px 0;
  background: #fff;
}

.header_logo a {
  display: block;
}

.header_right {
  text-align: right;
  padding: 10px 0 0 0;
}

.header_right ul {
  margin: 0;
  padding: 0;
}

.header_right ul li {
  display: inline-block;
  border-right: 2px solid #c7c7c7;
  padding: 0 17px;
  vertical-align: middle;
}

.header_right ul li:last-child {
  border-right: 0;
}

.header_clock_img {
  width: 37px;
  text-align: left;
  margin-top: 2px;
}

.header_clock_text {
  text-align: left;
}

.header_clock_text strong {
  display: block;
  color: #1d71b8;
  font-size: 18px;
  line-height: 15px;
  font-weight: 400;
}

.header_clock_text span {
  display: block;
  color: #4a4a4a;
  font-size: 14px;
  line-height: 15px;
}

.header_cell_img {
  width: 27px;
  text-align: left;
}

.header_cell_text {
  text-align: right;
}

.header_cell_text a {
  display: block;
  color: #4a4a4a;
  font-size: 16px;
  font-weight: 600;
}

.footer-details {
  padding: 26px 0 0;
  font-size: 14px;
  font-weight: 300;
  color: white;
  background: #152a3a;
}

.footer-details__widget-name {
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.85px;
  line-height: 22px;
  color: white;
  margin: 0 15px 15px;
  padding-bottom: 4px;
  border-bottom: 1px solid #234C82;
}

.footer-details__content {
  margin: 0 15px 15px;
}

.footer-details__content .line {
  margin: 4px auto;
  padding-left: 40px;
}

.footer-links {
  padding: 26px 0 0;
  font-size: 13px;
  font-weight: 300;
  color: white;
  background: #142B4A;
}
.footer-links a, .footer-links a:active, .footer-links a:visited {
  color: white;
  text-decoration: none;
}
@media only screen and (max-width: 576px) {
  .footer-links a, .footer-links a:active, .footer-links a:visited {
    height: 44px;
    display: block;
  }
}
@media only screen and (min-width: 768px) {
  .footer-links a, .footer-links a:active, .footer-links a:visited {
    display: inline-block;
    height: 44px;
    align-self: flex-end;
    padding: 12px 10px 0;
  }
}
@media only screen and (min-width: 992px) {
  .footer-links a, .footer-links a:active, .footer-links a:visited {
    display: inline;
    height: auto;
    align-self: auto;
    padding: 0;
  }
}
.footer-links a:hover, .footer-links a:focus {
  color: #70AEFF;
  text-decoration: underline;
}
.footer-links .footer-links__channel-name {
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.85px;
  line-height: 22px;
  color: white;
  margin: 0 15px 15px;
  padding-bottom: 4px;
  border-bottom: 1px solid #234C82;
}
.footer-links .footer-links__nav li {
  list-style-type: none;
}
.footer-links .footer-links__nav li li a, .footer-links .footer-links__nav li li a:active, .footer-links .footer-links__nav li li a:visited,
.footer-links .footer-links__nav li .post.blog-list li a, .footer-links .footer-links__nav li .post.blog-list li a:active, .footer-links .footer-links__nav li .post.blog-list li a:visited {
  color: #70AEFF;
}
.footer-links li a:hover, .footer-links li a:focus,
.footer-links .post.blog-list li a:hover, .footer-links .post.blog-list li a:focus {
  color: #95C717;
  text-decoration: underline;
}
.footer-links .footer-links__address {
  display: flex;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.75px;
  color: white;
}
@media only screen and (max-width: 576px) {
  .footer-links .footer-links__address {
    text-align: center;
  }
}
.footer-links .footer-links__address p {
  align-self: flex-end;
}
@media only screen and (max-width: 576px) {
  .footer-links .footer-links__address p {
    width: 100%;
  }
}
@media only screen and (min-width: 768px) {
  .footer-links .footer-links__address p {
    line-height: 24px;
  }
}
@media only screen and (min-width: 992px) {
  .footer-links .footer-links__address p {
    line-height: normal;
  }
}
.footer-links .footer-links__email {
  display: flex;
  font-weight: 300;
  letter-spacing: 0.75px;
}
@media only screen and (max-width: 576px) {
  .footer-links .footer-links__email {
    display: block;
    text-align: center;
  }
}
.footer-links .footer-links__email a {
  height: 44px;
  align-self: flex-end;
  padding: 12px 10px 0;
}
.footer-links .footer-links__links {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.75px;
}
.footer-links .footer-links__links-anchor {
  width: 33%;
  height: 44px;
  display: block;
  float: left;
  padding: 12px 0 0 10px !important;
}
.footer-links .footer-links__links-supplier-anchor {
  height: 44px;
  display: block;
  padding: 12px 0 0 10px;
  font-weight: 400;
}

.footer {
  padding: 15px 0;
  font-size: 12px;
  font-weight: 300;
  color: #f5f5f5;
  background: #234C82;
}
.footer a, .footer a:active, .footer a:focus, .footer a:hover, .footer a:visited {
  color: white;
}
.footer ul {
  margin: 0;
  padding: 0;
  text-align: right;
}
.footer ul li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.fCopy span {
  display: table-cell;
  height: 53px;
  vertical-align: middle;
}

.fSocialicons li {
  float: right;
}

.fSocialicons li a {
  display: block;
  text-align: center;
}

.footer_top_add img {
  width: 100%;
  height: 100%;
}

.footer_top p {
  text-align: center;
  color: #292929;
  font-size: 22px;
  line-height: 33px;
  margin: 0;
}

.footer_top p strong {
  font-size: 26px;
  display: block;
}

.footer_bottom {
  background: #3b3b3b;
  padding: 20px 0;
}

.footer_bottom_inn {
  text-align: center;
}

.footer_bottom_inn p {
  margin: 0;
  color: #d2d2d2;
  font-size: 15px;
  font-weight: 500;
}

.footer_bottom_inn ul {
  margin: 0;
  padding: 0;
}

.footer_bottom_inn ul li {
  display: inline-block;
  border-right: 1px solid #d2d2d2;
  line-height: 14px;
  margin: 0;
  padding: 0 12px;
}

.footer_bottom_inn ul li:last-child {
  border-right: 0;
}

.footer_bottom_inn ul li a {
  color: #d2d2d2;
  font-size: 15px;
  font-weight: 500;
}

.footer-twitter-link, .footer-facebook-link {
  display: block;
  width: 44px;
  height: 53px;
  margin-right: 5px;
}

.footer-twitter-link {
  background-image: url(./assets/twitter-icon.svg);
  background-size: 36px 36px;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0.5;
}

.footer-facebook-link {
  background-image: url(./assets/facebook-icon.svg);
  background-size: 36px 36px;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0.5;
}

.footer-twitter-link:hover, .footer-facebook-link:hover {
  opacity: 0.8;
}

.footer-cc-link {
  display: block;
  width: 211px;
  height: 53px;
  margin-left: 20px;
  background-image: url(./assets/cc-logo-white.svg);
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  opacity: 0.4;
}

.footer-cc-link:hover {
  opacity: 0.8;
}
</style>
