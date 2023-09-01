import affImg from "../../images/process.jpg";
import "../../styles/affiliate.css";

function Affiliate() {
  return (
    <div className="container3">
      <h1 className="highlight title tex-center">
        What is affiliate marketing?
      </h1>
      <p className="para">
        <br />
        <br /> You may have come across the term affiliate marketing, or
        performance-based marketing when you have been searching for methods to
        improve your online marketing for your brand and wanted to know more
        about it, or you were searching for ways to increase your revenue as an
        affiliate.
        <br />
        <br />
        With the introduction of the internet, advertisers realised that they
        could increase their revenue by rewarding websites who refer customers
        to your site that go on to buy something from you. In essence, this is
        affiliate marketing or performance-based marketing. An advertiser
        rewards a website a set amount of commission for each customer that the
        site refers who goes on to make a purchase.
        <br />
        <br />
        Increasing revenue is not the only reason to utilise affiliate
        marketing. You can use it to increase traffic, increase your conversion
        rate, create brand awareness and more - it depends on your KPIs, and it
        can help your brand reach your goals.
      </p>
      <br />
      <h3 className="h5">How does it work?</h3>
      <p className="para">
        <br />
        It is essential to know that affiliate marketing is a relationship-based
        channel between three different groups - the advertiser, the publisher,
        and the consumer. The affiliate network plays an important role too.
      </p>
      <h5 className="h5">The Advertiser</h5>
      <p className="para">
        <br />
        If you're an advertiser, it means that you have something to sell
        (either a product or a service), and you want to use affiliate marketing
        to boost your sales. Products can include anything from electronic goods
        through to fashion, and services can consist of flights, or meal
        delivery services.
      </p>
      <h3 className="h5">The Publisher</h3>
      <p className="para">
        The Publisher is the website who advertises a product or service and
        earns a commission when their visitor goes on to the site and makes a
        purchase. There are so many different types of affiliates including
        influencers, bloggers, or loyalty websites and more non-traditional
        affiliates too, including paid search, on-site tech solutions and
        remarketing to name a few. <br />
      </p>
      <h5 className="h5">The Consumer</h5>
      <p className="para">
        <br /> The consumer is the person who buys something from the advertiser
        by clicking on an affiliate link or banner, depending on the website
        that they have visited.
      </p>
      <h3 className="h5">What does the affiliate network do?</h3>
      <p className="para">
        <br />
        The affiliate network is a third party that is responsible for tracking
        transactions and attributing the correct affiliate to the sale. There
        are other benefits to using an affiliate network.
      </p>
      <p className="para">
        <br /> If you're an advertiser or an affiliate:
      </p>
      <ul>
        <li>
          Tracking is done by the affiliate network, which means an advertiser
          doesn't have to build a system themselves and the affiliate doesn't
          need to worry about tracking either because an impartial third party
          does it.
        </li>
        <li>
          Affiliate payments are processed by the affiliate network which takes
          away some of the work from the advertiser, and it makes it easy for
          the affiliate to track successful payments.
        </li>
        <li>They act as a third party in case of disputes</li>
        <li>
          For advertisers, the affiliate network has a big pool of affiliates
          ready to promote their brands
        </li>
      </ul>
      <p className="para">
        <br /> For advertisers, the affiliate network has a vast marketplace of
        affiliates ready to promote their brands.
        <br />
        <br />
        The affiliate network attributes the affiliate to the sale using a link,
        a pixel which gets installed on your website, and a cookie.
      </p>
      <h5 className="h5">The link</h5>
      <p className="para">
        <br />
        The link allows the affiliate network to accredit the correct sales to
        the right affiliate. When an affiliate is logged in and accepted into
        your program, they will have access to any creatives you choose to
        upload or a text link. The link is made up of different components.
      </p>
      <h5 className="h5">The pixel</h5>
      <p className="para">
        <br /> Installing the pixel onto your website ensures that the affiliate
        network is notified whenever a sale is generated via an affiliate. Setup
        usually is pretty straightforward with the tracking code or pixel placed
        on the Thank you page. Your affiliate network provides instructions on
        how to do this and depend on which cart you are using.
        <br />
      </p>
      <h5 className="h5">The cookie</h5>
      <p className="para">
        <br /> Cookies are files stored on your computer, and they hold a small
        amount of data like login information, shopping carts or the language
        you want to view a specific website.
        <br />
        <br />
        You might notice that when you have been browsing a website looking for
        something, (for example, a pair of shoes), then you will start to see
        ads for those shoes when you're browsing the internet. The reason this
        happens is the cookies on your computer. Alternatively, you clicked
        'yes' when you got asked if you wanted the website to remember your
        username and password.
        <br />
        <br />
        A cookie doesn't ever collect any personal information, for example,
        photos or bank information. Only the data set by the website you are on,
        so it varies depending on the site.
        <br />
        <br />
        When you're browsing the internet and go to a website, a search is made
        associated with that site to see if there is already a cookie there.
        <br />
        <br />
        A cookie is created when you visit a new website, and the page has
        finished loading. Some cookies delete automatically after a period of
        inactivity, and some expire.
        <br />
      </p>
      <h3 className="h5">The process</h3>
      <img id="affImg" src={affImg} alt="" />
      <ul>
        <li>
          The affiliate shows their visitor an ad for the advertiser on their
          website, which includes an affiliate link. The ad can be displayed in
          many different ways and can consist of banners, blog posts, or text
          links, depending on the website itself.
        </li>
        <li>
          The consumer clicked on the ad and is taken to the merchant's website
          via a tracking link. This tracking link enables the affiliate network
          to see which affiliate refers the sale so that the correct affiliate
          gets paid.
        </li>
        <li>The customer buys something on the website.</li>
        <li>
          The affiliate network records the purchase and some of the details of
          the transaction.
        </li>
        <li>The advertiser confirms the purchase as a valid sale.</li>
        <li>
          The transaction is credited to the affiliate who referred the sale.
        </li>
        <li>The affiliate is paid for their sale.</li>
      </ul>
      <h3 className="h5">Steps to starting an affiliate program</h3>
      <p className="para">
        <br /> Once an advertiser has signed up to an affiliate network as an
        advertiser, there are a few things they need to do before their program
        is available to the affiliates.
        <br />
      </p>
      <ul>
        <li>
          The most critical step is to install the tracking pixel on the 'thank
          you' page. This enables the affiliate network to see when an affiliate
          has referred a sale and some of the details of the transaction. Then
          it's essential to test the tracking pixel and all of the different
          methods of payment so that the affiliate network can ensure that
          everything is working correctly.
        </li>
        <li>
          Upload your creatives: This includes banners, data feeds, images -
          basically anything you are happy for the affiliates to use for the
          promotion of your brand.
        </li>
        <li>
          Choosing your commission rate: A reasonable commission rate can
          attract affiliates to your program - of course, this depends on your
          margins and what you can afford to give to them. Make sure you have
          some room to move with your commission rate so that you can offer
          affiliates incentives.
        </li>
        <li>
          Writing a good description of your brand is essential for attracting
          the right affiliates to your program. Make sure it includes
          information about your brand so that the members can assess whether
          they would like to work with you.
        </li>
      </ul>
      <p className="para">
        Affiliate marketing can sound daunting at first, but once you break down
        what the technology is and how it works, it's a lot simpler than it
        seems. Affiliate marketing is all about relationships, and the
        connections between the advertiser, the publishers, and the consumers
        are essential facets of this. The affiliate network brings this all
        together with their tracking technology to enable affiliates and
        advertisers to work together effectively to increase revenue.
      </p>
    </div>
  );
}

export default Affiliate;
