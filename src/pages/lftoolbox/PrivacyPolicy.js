import React from "react";
import Layout from "components/layouts/Standard.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default ({ headingText = "LFToolbox Privacy Policy" }) => {
  return (
    <AnimationRevealPage>
      <Layout>
        <Container>
          <ContentWithPaddingXl>
            <HeadingRow>
              <Heading>{headingText}</Heading>
            </HeadingRow>
            <Text>
              <p>Last updated: 27 July, 2023</p>

              <h1>Privacy Policy for LFToolbox</h1>

              <h2>MadStoneDev Privacy Policy</h2>
              <p>
                Your privacy is important to us. It is MadStoneDev's policy to
                respect your privacy and comply with any applicable law and
                regulation regarding any personal information we may collect
                about you, including via our app, LFToolbox, and its associated
                services.
              </p>
              <p>
                Personal information is any information about you which can be
                used to identify you. This includes information about you as a
                person (such as name, address, and date of birth), your devices,
                payment details, and even information about how you use an app
                or online service.
              </p>
              <p>
                In the event our app contains links to third-party sites and
                services, please be aware that those sites and services have
                their own privacy policies. After following a link to any
                third-party content, you should read their posted privacy policy
                information about how they collect and use personal information.
                This Privacy Policy does not apply to any of your activities
                after you leave our app.
              </p>
              <p>This policy is effective as of 27 July 2023.</p>
              <p>Last updated: 27 July 2023</p>
              <h3>Information We Collect</h3>
              <p>
                Information we collect falls into one of two categories:
                'voluntarily provided' information and 'automatically collected'
                information.
              </p>
              <p>
                'Voluntarily provided' information refers to any information you
                knowingly and actively provide us when using our app and its
                associated services.
              </p>
              <p>
                'Automatically collected' information refers to any information
                automatically sent by your device in the course of accessing our
                app and its associated services.
              </p>
              <h3>Log Data</h3>
              <p>
                When you access our servers via our app, we may automatically
                log the standard data provided by your device. It may include
                your device's Internet Protocol (IP) address, your device type
                and version, your activity within the app, time and date, and
                other details about your usage.
              </p>
              <p>
                Additionally, when you encounter certain errors while using the
                app, we automatically collect data about the error and the
                circumstances surrounding its occurrence. This data may include
                technical details about your device, what you were trying to do
                when the error happened, and other technical information
                relating to the problem. You may or may not receive notice of
                such errors, even in the moment they occur, that they have
                occurred, or what the nature of the error is.
              </p>
              <p>
                Please be aware that while this information may not be
                personally identifying by itself, it may be possible to combine
                it with other data to personally identify individual persons.
              </p>
              <h3>Personal Information</h3>
              <p>
                We may ask for personal information — for example, when you
                submit content to us or when you contact us — which may include
                one or more of the following:
              </p>
              <ul>
                <li>Name</li>
                <li>Email</li>
                <li>Social media profiles</li>
                <li>Phone/mobile number</li>
              </ul>
              <h3>User-Generated Content</h3>
              <p>
                We consider 'user-generated content' to be materials (text,
                image and/or video content) voluntarily supplied to us by our
                users for the purpose of publication on our platform, website or
                re-publishing on our social media channels. All user-generated
                content is associated with the account or email address used to
                submit the materials.
              </p>
              <p>
                Please be aware that any content you submit for the purpose of
                publication will be public after posting (and subsequent review
                or vetting process). Once published it may be accessible to
                third parties not covered under this privacy policy.
              </p>
              <h3>
                Legitimate Reasons for Processing Your Personal Information
              </h3>
              <p>
                We only collect and use your personal information when we have a
                legitimate reason for doing so. In which instance we only
                collect personal information that is reasonably necessary to
                provide our services to you.
              </p>
              <h3>Collection and Use of Information</h3>
              <p>
                We may collect personal information from you when you do any of
                the following on our website:
              </p>
              <ul>
                <li>Register for an account</li>
                <li>
                  Sign up to receive updates from us via email or social media
                  channels
                </li>
                <li>
                  Use a mobile device or web browser to access our content
                </li>
                <li>
                  Contact us via email, social media, or on any similar
                  technologies
                </li>
                <li>When you mention us on social media</li>
              </ul>
              <p>
                We may collect, hold, use and disclose information for the
                following purposes, and personal information will not be further
                processed in a manner that is incompatible with these purposes:
              </p>
              <ul>
                <li>
                  to provide you with our app and platform's core features and
                  services
                </li>
                <li>
                  to enable you to customise or personalise your experience of
                  our website
                </li>
                <li>to contact and communicate with you</li>
                <li>
                  for analytics, market research, and business development,
                  including to operate and improve our app, associated
                  applications, and associated social media platforms
                </li>
                <li>
                  to enable you to access and use our app, associated platforms,
                  and associated social media channels
                </li>
                <li>
                  for security and fraud prevention, and to ensure that our
                  sites and apps are safe, secure, and used in line with our
                  terms of use
                </li>
                <li>
                  for technical assessment, including to operate and improve our
                  app, associated applications, and associated social media
                  platforms
                </li>
              </ul>
              <p>
                We may combine voluntarily provided and automatically collected
                personal information with general information or research data
                we receive from other trusted sources. For example, If you
                consent to us accessing your social media profiles, we may
                combine information sourced from those profiles with information
                received from you directly to provide you with an enhanced
                experience of our app and services.
              </p>
              <h4>Security of Your Personal Information</h4>
              <p>
                When we collect and process personal information, and while we
                retain this information, we will protect it within commercially
                acceptable means to prevent loss and theft, as well as
                unauthorised access, disclosure, copying, use or modification.
              </p>
              <p>
                Although we will do our best to protect the personal information
                you provide to us, we advise that no method of electronic
                transmission or storage is 100% secure and no one can guarantee
                absolute data security.
              </p>
              <p>
                You are responsible for selecting any password and its overall
                security strength, ensuring the security of your own information
                within the bounds of our services. For example, ensuring any
                passwords associated with accessing your personal information
                and accounts are secure and confidential.
              </p>
              <h4>How Long We Keep Your Personal Information</h4>
              <p>
                We keep your personal information only for as long as we need
                to. This time period may depend on what we are using your
                information for, in accordance with this privacy policy. For
                example, if you have provided us with personal information as
                part of creating an account with us, we may retain this
                information for the duration your account exists on our system.
                If your personal information is no longer required for this
                purpose, we will delete it or make it anonymous by removing all
                details that identify you.
              </p>
              <p>
                However, if necessary, we may retain your personal information
                for our compliance with a legal, accounting, or reporting
                obligation or for archiving purposes in the public interest,
                scientific, or historical research purposes or statistical
                purposes.
              </p>
              <h3>Children’s Privacy</h3>
              <p>
                We do not aim any of our products or services directly at
                children under the age of 13 and we do not knowingly collect
                personal information about children under 13.
              </p>
              <h3>Disclosure of Personal Information to Third Parties</h3>
              <p>We may disclose personal information to:</p>
              <ul>
                <li>a parent, subsidiary or affiliate of our company</li>
                <li>
                  third-party service providers for the purpose of enabling them
                  to provide their services including (without limitation) IT
                  service providers, data storage, hosting and server providers,
                  ad networks, analytics, error loggers, debt collectors,
                  maintenance or problem-solving providers, marketing providers,
                  professional advisors, and payment systems operators{" "}
                </li>
                <li>our employees, contractors, and/or related entities </li>
                <li>our existing or potential agents or business partners </li>
                <li>
                  credit reporting agencies, courts, tribunals, and regulatory
                  authorities, in the event you fail to pay for goods or
                  services we have provided to you
                </li>
                <li>
                  courts, tribunals, regulatory authorities, and law enforcement
                  officers, as required by law, in connection with any actual or
                  prospective legal proceedings, or in order to establish,
                  exercise, or defend our legal rights
                </li>
                <li>
                  third parties, including agents or sub-contractors who assist
                  us in providing information, products, services, or direct
                  marketing to you
                </li>
                <li>third parties to collect and process data</li>
                <li>
                  an entity that buys, or to which we transfer all or
                  substantially all of our assets and business
                </li>
              </ul>
              <p>Third parties we currently use include:</p>
              <ul>
                <li>Google Analytics</li>
                <li>Mailerlite</li>
                <li>Paypal</li>
                <li>Stripe</li>
                <li>Google Payments</li>
                <li>Apple Pay</li>
              </ul>
              <h3>International Transfers of Personal Information</h3>
              <p>
                The personal information we collect is stored and/or processed
                in United States, or where we or our partners, affiliates, and
                third-party providers maintain facilities.
              </p>
              <p>
                The countries to which we store, process, or transfer your
                personal information may not have the same data protection laws
                as the country in which you initially provided the information.
                If we transfer your personal information to third parties in
                other countries: (i) we will perform those transfers in
                accordance with the requirements of applicable law; and (ii) we
                will protect the transferred personal information in accordance
                with this privacy policy.
              </p>
              <h3>Your Rights and Controlling Your Personal Information</h3>
              <p>
                <strong>Your choice:</strong> By providing personal information
                to us, you understand we will collect, hold, use, and disclose
                your personal information in accordance with this privacy
                policy. You do not have to provide personal information to us,
                however, if you do not, it may affect your use of our app or the
                products and/or services offered on or through it.
              </p>
              <p>
                <strong>Information from third parties:</strong> If we receive
                personal information about you from a third party, we will
                protect it as set out in this privacy policy. If you are a third
                party providing personal information about somebody else, you
                represent and warrant that you have such person’s consent to
                provide the personal information to us.
              </p>
              <p>
                <strong>Marketing permission:</strong> If you have previously
                agreed to us using your personal information for direct
                marketing purposes, you may change your mind at any time by
                contacting us using the details below.
              </p>
              <p>
                <strong>Access:</strong> You may request details of the personal
                information that we hold about you.
              </p>
              <p>
                <strong>Correction:</strong> If you believe that any information
                we hold about you is inaccurate, out of date, incomplete,
                irrelevant, or misleading, please contact us using the details
                provided in this privacy policy. We will take reasonable steps
                to correct any information found to be inaccurate, incomplete,
                misleading, or out of date.
              </p>
              <p>
                <strong>Non-discrimination:</strong> We will not discriminate
                against you for exercising any of your rights over your personal
                information. Unless your personal information is required to
                provide you with a particular service or offer (for example
                serving particular content to your device), we will not deny you
                goods or services and/or charge you different prices or rates
                for goods or services, including through granting discounts or
                other benefits, or imposing penalties, or provide you with a
                different level or quality of goods or services.
              </p>
              <p>
                <strong>Downloading of Personal Information:</strong> We provide
                a means for you to download the personal information you have
                shared through our app. Please contact us for more information.
              </p>
              <p>
                <strong>Notification of data breaches:</strong> We will comply
                with laws applicable to us in respect of any data breach.
              </p>
              <p>
                <strong>Complaints:</strong> If you believe that we have
                breached a relevant data protection law and wish to make a
                complaint, please contact us using the details below and provide
                us with full details of the alleged breach. We will promptly
                investigate your complaint and respond to you, in writing,
                setting out the outcome of our investigation and the steps we
                will take to deal with your complaint. You also have the right
                to contact a regulatory body or data protection authority in
                relation to your complaint.
              </p>
              <p>
                <strong>Unsubscribe:</strong> To unsubscribe from our email
                database or opt-out of communications (including marketing
                communications), please contact us using the details provided in
                this privacy policy, or opt-out using the opt-out facilities
                provided in the communication. We may need to request specific
                information from you to help us confirm your identity.
              </p>
              <h3>Use of Cookies</h3>
              <p>
                Our privacy policy covers the use of cookies between your device
                and our servers. A cookie is a small piece of data that an app
                may store on your device, typically containing a unique
                identifier that allows the app servers to recognise your device
                when you use the app; information about your account, session
                and/or device; additional data that serves the purpose of the
                cookie; and any self-maintenance information about the cookie
                itself.
              </p>
              <p>
                We use cookies to give your device access to core features of
                our app, to track app usage and performance on your device, to
                tailor your experience of our app based on your preferences, and
                to serve advertising to your device. Any communication of cookie
                data between your device and our servers occurs within a secure
                environment.
              </p>
              <p>Please refer to our Cookie Policy for more information.</p>
              <h3>Business Transfers</h3>
              <p>
                If we or our assets are acquired, or in the unlikely event that
                we go out of business or enter bankruptcy, we would include
                data, including your personal information, among the assets
                transferred to any parties who acquire us. You acknowledge that
                such transfers may occur, and that any parties who acquire us
                may, to the extent permitted by applicable law, continue to use
                your personal information according to this policy, which they
                will be required to assume as it is the basis for any ownership
                or use rights we have over such information.
              </p>
              <h3>Limits of Our Policy</h3>
              <p>
                Our app may link to external sites that are not operated by us.
                Please be aware that we have no control over the content and
                policies of those sites, and cannot accept responsibility or
                liability for their respective privacy practices.
              </p>
              <h3>Changes to This Policy</h3>
              <p>
                At our discretion, we may change our privacy policy to reflect
                updates to our business processes, current acceptable practices,
                or legislative or regulatory changes. If we decide to change
                this privacy policy, we will post the changes here and on our
                website.
              </p>
              <p>
                If the changes are significant, or if required by applicable
                law, we will contact you (based on your selected preferences for
                communications from us) and all our registered users with the
                new details and links to the updated or changed policy.
              </p>
              <p>
                If required by law, we will get your permission or give you the
                opportunity to opt in to or opt out of, as applicable, any new
                uses of your personal information.
              </p>
              <h3>
                Additional Disclosures for Australian Privacy Act Compliance
                (AU)
              </h3>
              <h4>International Transfers of Personal Information</h4>
              <p>
                Where the disclosure of your personal information is solely
                subject to Australian privacy laws, you acknowledge that some
                third parties may not be regulated by the Privacy Act and the
                Australian Privacy Principles in the Privacy Act. You
                acknowledge that if any such third party engages in any act or
                practice that contravenes the Australian Privacy Principles, it
                would not be accountable under the Privacy Act, and you will not
                be able to seek redress under the Privacy Act.
              </p>
              <h3>Contact Us</h3>
              <p>
                For any questions or concerns regarding your privacy, you may
                contact us using the following details:
              </p>
              <p>
                Madstone Dev
                <br />
                https://madstone.dev/contact
              </p>
            </Text>
          </ContentWithPaddingXl>
        </Container>
      </Layout>
    </AnimationRevealPage>
  );
};
