/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import TermsImg from "../../../assets/terms-of-use.png";

const LegalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden md:pt-[64px]">
      {/* HeroSection */}
      <section className="bg-black max-w-7xl mx-auto text-white flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6 gap-2 mt-5">
        <div className="flex-1 flex flex-col justify-center items-start mt-3">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl mb-4">
            Terms of Use
          </h2>

          <div className="flex gap-4 mb-2 text-sm md:text-base">
            <button
              className="bg-transparent border border-white px-2 md:px-5 py-2 rounded font-semibold"
              title="Contact our media team"
            >
              MEDIA CONTACTS
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center md:mt-0">
          <img
            src={TermsImg}
            alt="Rade Basta"
            title="Terms of Use illustration"
            className="rounded-xl md:w-120 md:h-120 object-contain"
          />
        </div>
      </section>
      {/* content section */}
      <section className="bg-white text-black">
        <div className="max-w-6xl mx-auto py-12 px-6 mt-5">
          <p className="mb-2 uppercase font-semibold">
            READ THESE TERMS AND CONDITIONS ("TERMS") CAREFULLY BEFORE USING THE
            SERVICES DESCRIBED HEREIN. BY UTILIZING THE WEBSITE LOCATED AT
            WWW.BLACKROCK.COM ("WEBSITE"), YOU ACKNOWLEDGE THAT YOU HAVE READ
            THESE TERMS AND CONDITIONS AND THAT YOU AGREE TO BE BOUND BY THEM.
            IF YOU DO NOT AGREE TO ALL OF THE TERMS AND CONDITIONS OF THIS
            AGREEMENT, YOU ARE NOT AN AUTHORIZED USER OF THESE SERVICES AND YOU
            SHOULD NOT USE THIS WEBSITE.
          </p>

          <p className="mb-4 uppercase font-semibold">
            BLACKROCK RESERVES THE RIGHT TO CHANGE, MODIFY, ADD OR REMOVE
            PORTIONS OF THESE TERMS AT ANY TIME FOR ANY REASON. WE SUGGEST THAT
            YOU REVIEW THESE TERMS PERIODICALLY FOR CHANGES. SUCH CHANGES SHALL
            BE EFFECTIVE IMMEDIATELY UPON POSTING. YOU ACKNOWLEDGE THAT BY
            ACCESSING OUR WEBSITE AFTER WE HAVE POSTED CHANGES TO THESE TERMS,
            YOU ARE AGREEING TO THESE TERMS AS MODIFIED.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h3>
          <p className="mb-4 font-[500]">
            Nothing contained on this Website constitutes tax, accounting,
            regulatory, legal, insurance or investment advice. Neither the
            information, nor any opinion, contained on this Website constitutes
            a solicitation or offer by BlackRock, Inc. ("BlackRock") or its
            affiliates to buy or sell any securities, futures, options or other
            financial instruments, nor shall any such security be offered or
            sold to any person in any jurisdiction in which such offer,
            solicitation, purchase, or sale would be unlawful under the
            securities laws of such jurisdiction. Decisions based on information
            contained on this Website are the sole responsibility of the
            visitor. In exchange for using this Website, the visitor agrees to
            indemnify and hold BlackRock, its officers, directors, employees,
            affiliates, agents, licensors and suppliers harmless against any and
            all claims, losses, liability, costs and expenses (including but not
            limited to attorneys' fees) arising from your use of this Website,
            from your violation of these Terms or from any decisions that the
            visitor makes based on such information.
          </p>

          <p className="mb-4 font-semibold text-xl">
            The investments and strategies discussed in the Website may not be
            suitable for all investors and are not obligations of BlackRock or
            its affiliates or guaranteed by BlackRock or its affiliates.
            BlackRock makes no representations that the contents are appropriate
            for use in all locations, or that the transactions, securities,
            products, instruments, or services discussed on this site are
            available or appropriate for sale or use in all jurisdictions or
            countries, or by all investors or counterparties. By making
            available information on the Website, BlackRock does not represent
            that any investment vehicle is available or suitable for any
            particular user. All persons and entities accessing the Web Site do
            so on their own initiative and are responsible for compliance with
            applicable local laws and regulations.
          </p>

          <p className="mb-4 font-[500]">
            All investments involve risk and may lose value. The value of your
            investment can go down depending upon market conditions. Fixed
            income investments are subject to risk including interest rate,
            credit, market and issuer risk. Currency exchange rates may cause
            the value of an investment to go up or down. Alternative strategies
            involve higher risks than traditional investments, may not be tax
            efficient, and have higher fees than traditional investments; they
            may also be highly leveraged and engage in speculative investment
            techniques, which magnify the potential for investment loss or gain.
            BEFORE ACQUIRING THE SHARES OF ANY INVESTMENT FUND BY PURCHASE OR
            EXCHANGE, IT IS YOUR RESPONSIBILITY TO READ THE FUND'S PROSPECTUS OR
            OFFERING MATERIALS.
          </p>

          <p className="mb-4 font-[500]">
            This Website is for information purposes only and is not intended to
            be relied upon as a forecast, research or investment advice. The
            information on this Website does not constitute a recommendation,
            offer or solicitation to buy or sell any securities or to adopt any
            investment strategy. Although this material is based upon
            information that BlackRock considers reliable and endeavors to keep
            current, BlackRock does not assure that this material is accurate,
            current or complete, and it should not be relied upon as such. Any
            opinions expressed on this Website may change as subsequent
            conditions vary. Past performance is no guarantee of future results.
          </p>

          <p className="mb-4 font-[500]">
            The information and services provided on this Website are provided
            "AS IS" and without warranties of any kind, either express or
            implied. To the fullest extent permissible pursuant to applicable
            law, BlackRock disclaims all warranties, including, but not limited
            to, any warranty of non-infringement of third-party rights and any
            implied warranties of merchantability and fitness for a particular
            purpose. BlackRock does not warrant, either expressly or impliedly,
            the accuracy or completeness of the information, text, graphics,
            links or other items contained in the Website and does not warrant
            that the functions contained in the Website will be uninterrupted or
            error-free, that defects will be corrected, or that the Website will
            be free of viruses or other harmful components. BlackRock expressly
            disclaims all liability for errors and omissions in the materials on
            the Website and for the use by others of information contained in
            the Website.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Fund and Advisor Disclosures
          </h3>
          <p className="mb-4 font-[500]">
            Investments in a BlackRock product or client account are not bank
            deposits and are not insured or guaranteed by BlackRock, the Federal
            Deposit Insurance Corporation, any other government agency or any
            bank. Although a money market fund seeks to preserve the value of
            your investment at $1.00 per share, it is possible to lose money by
            investing in the fund. Please carefully consider a fund's investment
            objective, risks, charges and expenses before investing. For this
            and other information, call or write to BlackRock for a free
            prospectus or view one online. Read it carefully before you invest
            or send money.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            BlackRock Institutional Trust Company, N.A. ("BTC")
          </h3>
          <p className="mb-4 font-[500]">
            BTC, a national banking association operating as a limited purpose
            trust company, provides fiduciary and trust services, including
            certain commingled investment options designed to help certain types
            of qualified institutional investors. BTC is a wholly-owned
            subsidiary of BlackRock, Inc. BTC's primary regulator is the Office
            of the Comptroller of the Currency, the agency of the US Treasury
            Department that regulates US national banks. Investments in a
            BTC-managed commingled vehicle or client account are not bank
            deposits, are not insured or guaranteed by the Federal Deposit
            Insurance Corporation, any other government agency or any bank, and
            are not guaranteed by BTC, BlackRock or any of their affiliates.
            PLEASE carefully consider a commingled vehicle's investment
            objective, risks, charges and expenses before investing. Although a
            short-term investment fund seeks to maintain a $1.00 unit value, it
            is possible to lose money by investing in such a fund. Commingled
            investment vehicles maintained by BTC are available only to certain
            qualified institutional investors and are not offered to the general
            public; prospectuses are not required and prices are not available
            in local publications. To obtain more information, please contact
            your BTC account manager.
          </p>
          <h2 className="text-2xl font-bold mb-4">SEC Materials</h2>
          <p className="mb-4 font-[500]">
            Certain information provided through this Website has been filed
            with the Securities and Exchange Commission ("SEC") (such materials
            being referred to as "SEC Materials"). The SEC Materials and other
            public disclosures contained in the Website contain forward-looking
            statements within the meaning of the Private Securities Litigation
            Reform Act, with respect to BlackRock's future financial or business
            performance, strategies or expectations. Forward-looking statements
            are typically identified by words or phrases such as "trend,"
            "potential," "opportunity," "pipeline," "believe," "comfortable,"
            "expect," "anticipate," "current," "intention," "estimate,"
            "position," "assume," "outlook," "continue," "remain," "maintain,"
            "sustain," "seek," "achieve," and similar expressions, or future or
            conditional verbs such as "will," "would," "should," "could," "may"
            or similar expressions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
