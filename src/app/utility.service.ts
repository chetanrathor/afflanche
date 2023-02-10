import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {
blogList = [
  {
      "title": "NodeJS",
      "subHeading": "ode.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js is a back-end JavaScript runtime environment. Node.js runs on the V8 JavaScript Engine and executes JavaScript code outside a web browser.",
      "description": `Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The functionality of running scripts server-side produces dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.

      Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[7]
      
      The Node.js distributed development project was previously governed by the Node.js Foundation,[8] and has now merged with the JS Foundation to form the OpenJS Foundation. OpenJS Foundation is facilitated by the Linux Foundation's Collaborative Projects program.[9]
      
      Corporate users of Node.js software include GoDaddy,[10] Groupon,[11] IBM,[12] LinkedIn,[13][14] Microsoft,[15][16] Netflix,[17] PayPal,[18][19] SAP,[20] Walmart,[21] Yahoo!,[22] and Amazon Web Services.[23]
      Node.js was written initially by Ryan Dahl in 2009,[24] about thirteen years after the introduction of the first server-side JavaScript environment, Netscape's LiveWire Pro Web.[25] The initial release supported only Linux and Mac OS X. Its development and maintenance was led by Dahl and later sponsored by Joyent.[26]

      Dahl criticized the limited possibilities of the most popular web server in 2009, Apache HTTP Server, to handle a lot of concurrent connections (up to 10,000 and more) and the most common way of creating code (sequential programming), when code either blocked the entire process or implied multiple execution stacks in the case of simultaneous connections.[27]

      Dahl demonstrated the project at the inaugural European JSConf on November 8, 2009.[28][29][30] Node.js combined Google's V8 JavaScript engine, an event loop, and a low-level I/O API.[31]

      In January 2010, a package manager was introduced for the Node.js environment called npm.[32] The package manager makes it easier for programmers to publish and share source code of Node.js packages and is designed to simplify installation, updating, and uninstallation of packages.[31]

      In June 2011, Microsoft and Joyent implemented a native Windows version of Node.js.[33] The first Node.js build supporting Windows was released in July 2011.

          In January 2012, Dahl stepped aside, promoting coworker and npm creator Isaac Schlueter to manage the project.[34] In January 2014, Schlueter announced that Timothy J. Fontaine would lead the project.[35]

          In December 2014, Fedor Indutny started io.js, a fork of Node.js. Due to the internal conflict over Joyent's governance, io.js was created as an open governance alternative with a separate technical committee.[36][37] Unlike Node.js,[38] the authors planned to keep io.js up-to-date with the latest releases of the Google V8 JavaScript engine.[39]

          In February 2015, the intent to form a neutral Node.js Foundation was announced. By June 2015, the Node.js and io.js communities voted to work together under the Node.js Foundation.[40]

          In September 2015, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.[41] This merge brought V8 ES6 features into Node.js and a long-term support release cycle.[42] As of 2016, the io.js website recommends that developers switch back to Node.js and that no further releases of io.js are planned due to the merge.[43]

          In 2019, the JS Foundation and Node.js Foundation merged to form the OpenJS Foundation.

          In September 2022, Node.js 18.9.0 was released.[44]
          Node.js allows the creation of Web servers and networking tools using JavaScript and a collection of "modules" that handle various core functionalities.[28][31][45][46][47] Modules are provided for file system I/O, networking (DNS, HTTP, TCP, TLS/SSL, or UDP), binary data (buffers), cryptography functions, data streams, and other core functions.[31][46][48] Node.js's modules use an API designed to reduce the complexity of writing server applications.[31][46]

          JavaScript is the only language that Node.js supports natively, but many compile-to-JS languages are available.[49] As a result, Node.js applications can be written in CoffeeScript,[50] Dart, TypeScript, ClojureScript and others.

          Node.js is primarily used to build network programs such as Web servers.[45] The most significant difference between Node.js and PHP is that most functions in PHP block until completion (commands execute only after previous commands finish), while Node.js functions are non-blocking (commands execute concurrently or even in parallel,[51][52] and use callbacks to signal completion or failure).[45]

          Node.js is officially supported on Linux, macOS and Microsoft Windows 8.1 and Server 2012 (and later),[3] with tier 2 support for SmartOS and IBM AIX and experimental support for FreeBSD. OpenBSD also works, and LTS versions available for IBM i (AS/400).[53] The provided source code may also be built on similar operating systems to those officially supported or be modified by third parties to support others such as NonStop OS[54] and Unix servers.
          Node.js brings event-driven programming to web servers, enabling development of fast web servers in JavaScript.[31] Developers can create scalable servers without using threading, by using a simplified model of event-driven programming that uses callbacks to signal the completion of a task.[31] Node.js connects the ease of a scripting language (JavaScript) with the power of Unix network programming.[31]

          Node.js was built on top of Google's V8 JavaScript engine since it was open-sourced under the BSD license. It is proficient with internet fundamentals such as HTTP, DNS, and TCP.[28] JavaScript was also a well-known language, making Node.js accessible to the web development community.[28]
          There are thousands of open-source libraries for Node.js, most of them hosted on the npm website. There are multiple developer conferences and events that support the Node.js community, including NodeConf, Node Interactive, and Node Summit as well as a number of regional events.

          The open-source community has developed web frameworks to accelerate the development of applications. Such frameworks include Connect, Express.js, Socket.IO, Feathers.js, Koa.js, Hapi.js, Sails.js, Meteor, Derby, and many others.[31][55] Various packages have also been created for interfacing with other languages or runtime environments such as Microsoft .NET.[56]

          Modern desktop IDEs provide editing and debugging features specifically for Node.js applications. Such IDEs include Atom, Brackets, JetBrains WebStorm,[57][58] Microsoft Visual Studio (with Node.js Tools for Visual Studio,[59] or TypeScript with Node definitions,[60][61][62][63]) NetBeans,[64] Nodeclipse Enide Studio[65] (Eclipse-based), and Visual Studio Code.[66][67] Certain online web-based IDEs also support Node.js, such as Codeanywhere, Codenvy, Cloud9 IDE, Koding, and the visual flow editor in Node-RED.

          Node.js is supported across a number of cloud-hosting platforms like Jelastic, Google Cloud Platform, AWS Elastic Beanstalk, Joyent and others.`
              },
              {
                  "title": "Springboot",
                  "subHeading": `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.`,
                 "description": `Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
              
                  HTML elements are the building blocks of HTML pages.With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items.HTML elements are delineated by tags, written using angle brackets.Tags such as<img /> and < input /> directly introduce content into the page.Other tags such as <p> surround and provide information about document text and may include other tags as sub - elements.Browsers do not display the HTML tags but use them to interpret the content of the page.

                  HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages.The inclusion of CSS defines the look and layout of content.The World Wide Web Consortium(W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[2] A form of HTML, known as HTML5, is used to display video and audio, primarily using the < canvas > element, in collaboration with javascript.
              In 1980, physicist Tim Berners - Lee, a contractor at CERN, proposed and prototyped ENQUIRE, a system for CERN researchers to use and share documents.In 1989, Berners - Lee wrote a memo proposing an Internet - based hypertext system.[3] Berners - Lee specified HTML and wrote the browser and server software in late 1990. That year, Berners - Lee and CERN data systems engineer Robert Cailliau collaborated on a joint request for funding, but the project was not formally adopted by CERN.In his personal notes[4] from 1990 he listed[5] "some of the many areas in which hypertext is used" and put an encyclopedia first.
              
          The first publicly available description of HTML was a document called "HTML Tags", first mentioned on the Internet by Tim Berners - Lee in late 1991.[6][7] It describes 18 elements comprising the initial, relatively simple design of HTML.Except for the hyperlink tag, these were strongly influenced by SGMLguid, an in -house Standard Generalized Markup Language(SGML) - based documentation format at CERN.Eleven of these elements still exist in HTML 4.[8]
              
          HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are found in the 1988 ISO technical report TR 9537 Techniques for using SGML, which in turn covers the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system: these formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with also the separation of structure and markup; HTML has been progressively moved in this direction with CSS.
              
          Berners - Lee considered HTML to be an application of SGML.It was formally defined as such by the Internet Engineering Task Force(IETF) with the mid - 1993 publication of the first proposal for an HTML specification, the "Hypertext Markup Language (HTML)" Internet Draft by Berners - Lee and Dan Connolly, which included an SGML Document type definition to define the grammar.[9][10] The draft expired after six months, but was notable for its acknowledgment of the NCSA Mosaic browser's custom tag for embedding in-line images, reflecting the IETF's philosophy of basing standards on successful prototypes.Similarly, Dave Raggett's competing Internet-Draft, "HTML+ (Hypertext Markup Format)", from late 1993, suggested standardizing already-implemented features like tables and fill-out forms.[11]
              
          After the HTML and HTML + drafts expired in early 1994, the IETF created an HTML Working Group, which in 1995 completed "HTML 2.0", the first HTML specification intended to be treated as a standard against which future implementations should be based.[12]
              
          Further development under the auspices of the IETF was stalled by competing interests.Since 1996, the HTML specifications have been maintained, with input from commercial software vendors, by the World Wide Web Consortium(W3C).[13] However, in 2000, HTML also became an international standard(ISO / IEC 15445: 2000).HTML 4.01 was published in late 1999, with further errata published through 2001. In 2004, development began on HTML5 in the Web Hypertext Application Technology Working Group(WHATWG), which became a joint deliverable with the W3C in 2008, and was completed and standardized on 28 October 2014.[14]
          HTML 2
          November 24, 1995
          HTML 2.0 was published as RFC 1866. Supplemental RFCs added capabilities:
          November 25, 1995: RFC 1867(form - based file upload)
          May 1996: RFC 1942(tables)
          August 1996: RFC 1980(client - side image maps)
          January 1997: RFC 2070(internationalization)
          HTML 3
          January 14, 1997
          HTML 3.2[15] was published as a W3C Recommendation.It was the first version developed and standardized exclusively by the W3C, as the IETF had closed its HTML Working Group on September 12, 1996.[16]
          Initially code - named "Wilbur", [17] HTML 3.2 dropped math formulas entirely, reconciled overlap among various proprietary extensions and adopted most of Netscape's visual markup tags. Netscape's blink element and Microsoft's marquee element were omitted due to a mutual agreement between the two companies.[13] A markup for mathematical formulas similar to that in HTML was not standardized until 14 months later in MathML.
          HTML 4
          December 18, 1997
          HTML 4.0[18] was published as a W3C Recommendation.It offers three variations:
          Strict, in which deprecated elements are forbidden
          Transitional, in which deprecated elements are allowed
          Frameset, in which mostly only frame related elements are allowed.
          Initially code - named "Cougar", [17] HTML 4.0 adopted many browser - specific element types and attributes, but at the same time sought to phase out Netscape's visual markup features by marking them as deprecated in favor of style sheets. HTML 4 is an SGML application conforming to ISO 8879 – SGML.[19]
          April 24, 1998
          HTML 4.0[20] was reissued with minor edits without incrementing the version number.
              December 24, 1999
          HTML 4.01[21] was published as a W3C Recommendation.It offers the same three variations as HTML 4.0 and its last errata were published on May 12, 2001.
          May 2000
          ISO / IEC 15445: 2000[22][23]("ISO HTML", based on HTML 4.01 Strict) was published as an ISO / IEC international standard.In the ISO this standard falls in the domain of the ISO / IEC JTC 1 / SC 34(ISO / IEC Joint Technical Committee 1, Subcommittee 34 – Document description and processing languages).[22]
          After HTML 4.01, there was no new version of HTML for many years as the development of the parallel, XML - based language XHTML occupied the W3C's HTML Working Group through the early and mid-2000s.
          HTML 5
          Main article: HTML5
          October 28, 2014
          HTML5[24] was published as a W3C Recommendation.[25]
          November 1, 2016
          HTML 5.1[26] was published as a W3C Recommendation.[27][28]
          December 14, 2017
          HTML 5.2[29] was published as a W3C Recommendation.[30][31]
          HTML draft version timeline
          October 1991
          HTML Tags, [6] an informal CERN document listing 18 HTML tags, was first mentioned in public.
              June 1992
          First informal draft of the HTML DTD, [32] with seven[33][34][35] subsequent revisions(July 15, August 6, August 18, November 17, November 19, November 20, November 22)
          November 1992
          HTML DTD 1.1(the first with a version number, based on RCS revisions, which start with 1.1 rather than 1.0), an informal draft[35]
          June 1993
          Hypertext Markup Language[36] was published by the IETF IIIR Working Group as an Internet Draft(a rough proposal for a standard).It was replaced by a second version[37] one month later.
              November 1993
          HTML + was published by the IETF as an Internet Draft and was a competing proposal to the Hypertext Markup Language draft.It expired in July 1994.[38]
          November 1994
          First draft(revision 00) of HTML 2.0 published by IETF itself[39](called as "HTML 2.0" from revision 02[40]), that finally led to the publication of RFC 1866 in November 1995.[41]
          April 1995(authored March 1995)
          HTML 3.0[42] was proposed as a standard to the IETF, but the proposal expired five months later(28 September 1995)[43] without further action.It included many of the capabilities that were in Raggett's HTML+ proposal, such as support for tables, text flow around figures, and the display of complex mathematical formulas.[43]
          W3C began development of its own Arena browser as a test bed for HTML 3 and Cascading Style Sheets, [44][45][46] but HTML 3.0 did not succeed for several reasons.The draft was considered very large at 150 pages and the pace of browser development, as well as the number of interested parties, had outstripped the resources of the IETF.[13] Browser vendors, including Microsoft and Netscape at the time, chose to implement different subsets of HTML 3's draft features as well as to introduce their own extensions to it.[13] (see Browser wars). These included extensions to control stylistic aspects of documents, contrary to the "belief [of the academic engineering community] that such things as text color, background texture, font size, and font face were definitely outside the scope of a language when their only intent was to specify how a document would be organized."[13] Dave Raggett, who has been a W3C Fellow for many years, has commented for example: "To a certain extent, Microsoft built its business on the Web by extending HTML features."[13]
          Official HTML5 logo
          Logo of HTML5
          January 2008
          HTML5 was published as a Working Draft by the W3C.[47]
          Although its syntax closely resembles that of SGML, HTML5 has abandoned any attempt to be an SGML application and has explicitly defined its own "html" serialization, in addition to an alternative XML - based XHTML5 serialization.[48]
          2011 HTML5 – Last Call
          On 14 February 2011, the W3C extended the charter of its HTML Working Group with clear milestones for HTML5.In May 2011, the working group advanced HTML5 to "Last Call", an invitation to communities inside and outside W3C to confirm the technical soundness of the specification.The W3C developed a comprehensive test suite to achieve broad interoperability for the full specification by 2014, which was the target date for recommendation.[49] In January 2011, the WHATWG renamed its "HTML5" living standard to "HTML".The W3C nevertheless continues its project to release HTML5.[50]
          2012 HTML5 – Candidate Recommendation
          In July 2012, WHATWG and W3C decided on a degree of separation.W3C will continue the HTML5 specification work, focusing on a single definitive standard, which is considered a "snapshot" by WHATWG.The WHATWG organization will continue its work with HTML5 as a "Living Standard".The concept of a living standard is that it is never complete and is always being updated and improved.New features can be added but functionality will not be removed.[51]
          In December 2012, W3C designated HTML5 as a Candidate Recommendation.[52] The criterion for advancement to W3C Recommendation is "two 100% complete and fully interoperable implementations".[53]
          2014 HTML5 – Proposed Recommendation and Recommendation
          In September 2014, W3C moved HTML5 to Proposed Recommendation.[54]
          On 28 October 2014, HTML5 was released as a stable W3C Recommendation, [55] meaning the specification process is complete.[56]`
              },
          {
              "title": "BubbleIo",
                  "subHeading": `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.`,
                     "description": `Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
          
                  HTML elements are the building blocks of HTML pages.With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items.HTML elements are delineated by tags, written using angle brackets.Tags such as <img /> and < input /> directly introduce content into the page.Other tags such as <p> surround and provide information about document text and may include other tags as sub - elements.Browsers do not display the HTML tags but use them to interpret the content of the page.

                  HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages.The inclusion of CSS defines the look and layout of content.The World Wide Web Consortium(W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[2] A form of HTML, known as HTML5, is used to display video and audio, primarily using the < canvas > element, in collaboration with javascript.
                  In 1980, physicist Tim Berners - Lee, a contractor at CERN, proposed and prototyped ENQUIRE, a system for CERN researchers to use and share documents.In 1989, Berners - Lee wrote a memo proposing an Internet - based hypertext system.[3] Berners - Lee specified HTML and wrote the browser and server software in late 1990. That year, Berners - Lee and CERN data systems engineer Robert Cailliau collaborated on a joint request for funding, but the project was not formally adopted by CERN.In his personal notes[4] from 1990 he listed[5] "some of the many areas in which hypertext is used" and put an encyclopedia first.
          
          The first publicly available description of HTML was a document called "HTML Tags", first mentioned on the Internet by Tim Berners - Lee in late 1991.[6][7] It describes 18 elements comprising the initial, relatively simple design of HTML.Except for the hyperlink tag, these were strongly influenced by SGMLguid, an in -house Standard Generalized Markup Language(SGML) - based documentation format at CERN.Eleven of these elements still exist in HTML 4.[8]
          
          HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are found in the 1988 ISO technical report TR 9537 Techniques for using SGML, which in turn covers the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system: these formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with also the separation of structure and markup; HTML has been progressively moved in this direction with CSS.
          
              Berners - Lee considered HTML to be an application of SGML.It was formally defined as such by the Internet Engineering Task Force(IETF) with the mid - 1993 publication of the first proposal for an HTML specification, the "Hypertext Markup Language (HTML)" Internet Draft by Berners - Lee and Dan Connolly, which included an SGML Document type definition to define the grammar.[9][10] The draft expired after six months, but was notable for its acknowledgment of the NCSA Mosaic browser's custom tag for embedding in-line images, reflecting the IETF's philosophy of basing standards on successful prototypes.Similarly, Dave Raggett's competing Internet-Draft, "HTML+ (Hypertext Markup Format)", from late 1993, suggested standardizing already-implemented features like tables and fill-out forms.[11]
          
          After the HTML and HTML + drafts expired in early 1994, the IETF created an HTML Working Group, which in 1995 completed "HTML 2.0", the first HTML specification intended to be treated as a standard against which future implementations should be based.[12]
          
          Further development under the auspices of the IETF was stalled by competing interests.Since 1996, the HTML specifications have been maintained, with input from commercial software vendors, by the World Wide Web Consortium(W3C).[13] However, in 2000, HTML also became an international standard(ISO / IEC 15445: 2000).HTML 4.01 was published in late 1999, with further errata published through 2001. In 2004, development began on HTML5 in the Web Hypertext Application Technology Working Group(WHATWG), which became a joint deliverable with the W3C in 2008, and was completed and standardized on 28 October 2014.[14]
          HTML 2
          November 24, 1995
          HTML 2.0 was published as RFC 1866. Supplemental RFCs added capabilities:
          November 25, 1995: RFC 1867(form - based file upload)
          May 1996: RFC 1942(tables)
          August 1996: RFC 1980(client - side image maps)
          January 1997: RFC 2070(internationalization)
          HTML 3
          January 14, 1997
          HTML 3.2[15] was published as a W3C Recommendation.It was the first version developed and standardized exclusively by the W3C, as the IETF had closed its HTML Working Group on September 12, 1996.[16]
          Initially code - named "Wilbur", [17] HTML 3.2 dropped math formulas entirely, reconciled overlap among various proprietary extensions and adopted most of Netscape's visual markup tags. Netscape's blink element and Microsoft's marquee element were omitted due to a mutual agreement between the two companies.[13] A markup for mathematical formulas similar to that in HTML was not standardized until 14 months later in MathML.
          HTML 4
          December 18, 1997
          HTML 4.0[18] was published as a W3C Recommendation.It offers three variations:
              Strict, in which deprecated elements are forbidden
              Transitional, in which deprecated elements are allowed
              Frameset, in which mostly only frame related elements are allowed.
          Initially code - named "Cougar", [17] HTML 4.0 adopted many browser - specific element types and attributes, but at the same time sought to phase out Netscape's visual markup features by marking them as deprecated in favor of style sheets. HTML 4 is an SGML application conforming to ISO 8879 – SGML.[19]
          April 24, 1998
          HTML 4.0[20] was reissued with minor edits without incrementing the version number.
                  December 24, 1999
          HTML 4.01[21] was published as a W3C Recommendation.It offers the same three variations as HTML 4.0 and its last errata were published on May 12, 2001.
          May 2000
              ISO / IEC 15445: 2000[22][23]("ISO HTML", based on HTML 4.01 Strict) was published as an ISO / IEC international standard.In the ISO this standard falls in the domain of the ISO / IEC JTC 1 / SC 34(ISO / IEC Joint Technical Committee 1, Subcommittee 34 – Document description and processing languages).[22]
          After HTML 4.01, there was no new version of HTML for many years as the development of the parallel, XML - based language XHTML occupied the W3C's HTML Working Group through the early and mid-2000s.
          HTML 5
          Main article: HTML5
          October 28, 2014
              HTML5[24] was published as a W3C Recommendation.[25]
          November 1, 2016
          HTML 5.1[26] was published as a W3C Recommendation.[27][28]
          December 14, 2017
          HTML 5.2[29] was published as a W3C Recommendation.[30][31]
          HTML draft version timeline
          October 1991
          HTML Tags, [6] an informal CERN document listing 18 HTML tags, was first mentioned in public.
                  June 1992
          First informal draft of the HTML DTD, [32] with seven[33][34][35] subsequent revisions(July 15, August 6, August 18, November 17, November 19, November 20, November 22)
          November 1992
          HTML DTD 1.1(the first with a version number, based on RCS revisions, which start with 1.1 rather than 1.0), an informal draft[35]
          June 1993
          Hypertext Markup Language[36] was published by the IETF IIIR Working Group as an Internet Draft(a rough proposal for a standard).It was replaced by a second version[37] one month later.
                  November 1993
              HTML + was published by the IETF as an Internet Draft and was a competing proposal to the Hypertext Markup Language draft.It expired in July 1994.[38]
          November 1994
          First draft(revision 00) of HTML 2.0 published by IETF itself[39](called as "HTML 2.0" from revision 02[40]), that finally led to the publication of RFC 1866 in November 1995.[41]
          April 1995(authored March 1995)
          HTML 3.0[42] was proposed as a standard to the IETF, but the proposal expired five months later(28 September 1995)[43] without further action.It included many of the capabilities that were in Raggett's HTML+ proposal, such as support for tables, text flow around figures, and the display of complex mathematical formulas.[43]
          W3C began development of its own Arena browser as a test bed for HTML 3 and Cascading Style Sheets, [44][45][46] but HTML 3.0 did not succeed for several reasons.The draft was considered very large at 150 pages and the pace of browser development, as well as the number of interested parties, had outstripped the resources of the IETF.[13] Browser vendors, including Microsoft and Netscape at the time, chose to implement different subsets of HTML 3's draft features as well as to introduce their own extensions to it.[13] (see Browser wars). These included extensions to control stylistic aspects of documents, contrary to the "belief [of the academic engineering community] that such things as text color, background texture, font size, and font face were definitely outside the scope of a language when their only intent was to specify how a document would be organized."[13] Dave Raggett, who has been a W3C Fellow for many years, has commented for example: "To a certain extent, Microsoft built its business on the Web by extending HTML features."[13]
          Official HTML5 logo
          Logo of HTML5
          January 2008
          HTML5 was published as a Working Draft by the W3C.[47]
          Although its syntax closely resembles that of SGML, HTML5 has abandoned any attempt to be an SGML application and has explicitly defined its own "html" serialization, in addition to an alternative XML - based XHTML5 serialization.[48]
              2011 HTML5 – Last Call
          On 14 February 2011, the W3C extended the charter of its HTML Working Group with clear milestones for HTML5.In May 2011, the working group advanced HTML5 to "Last Call", an invitation to communities inside and outside W3C to confirm the technical soundness of the specification.The W3C developed a comprehensive test suite to achieve broad interoperability for the full specification by 2014, which was the target date for recommendation.[49] In January 2011, the WHATWG renamed its "HTML5" living standard to "HTML".The W3C nevertheless continues its project to release HTML5.[50]
              2012 HTML5 – Candidate Recommendation
          In July 2012, WHATWG and W3C decided on a degree of separation.W3C will continue the HTML5 specification work, focusing on a single definitive standard, which is considered a "snapshot" by WHATWG.The WHATWG organization will continue its work with HTML5 as a "Living Standard".The concept of a living standard is that it is never complete and is always being updated and improved.New features can be added but functionality will not be removed.[51]
          In December 2012, W3C designated HTML5 as a Candidate Recommendation.[52] The criterion for advancement to W3C Recommendation is "two 100% complete and fully interoperable implementations".[53]
              2014 HTML5 – Proposed Recommendation and Recommendation
          In September 2014, W3C moved HTML5 to Proposed Recommendation.[54]
          On 28 October 2014, HTML5 was released as a stable W3C Recommendation, [55] meaning the specification process is complete.[56]`
          },
          {
              "title": "RestAPI",
                  "subHeading": `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.`,
                     "description": `Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
          
                  HTML elements are the building blocks of HTML pages.With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items.HTML elements are delineated by tags, written using angle brackets.Tags such as <img /> and < input /> directly introduce content into the page.Other tags such as <p> surround and provide information about document text and may include other tags as sub - elements.Browsers do not display the HTML tags but use them to interpret the content of the page.

                  HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages.The inclusion of CSS defines the look and layout of content.The World Wide Web Consortium(W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[2] A form of HTML, known as HTML5, is used to display video and audio, primarily using the < canvas > element, in collaboration with javascript.
                  In 1980, physicist Tim Berners - Lee, a contractor at CERN, proposed and prototyped ENQUIRE, a system for CERN researchers to use and share documents.In 1989, Berners - Lee wrote a memo proposing an Internet - based hypertext system.[3] Berners - Lee specified HTML and wrote the browser and server software in late 1990. That year, Berners - Lee and CERN data systems engineer Robert Cailliau collaborated on a joint request for funding, but the project was not formally adopted by CERN.In his personal notes[4] from 1990 he listed[5] "some of the many areas in which hypertext is used" and put an encyclopedia first.
          
          The first publicly available description of HTML was a document called "HTML Tags", first mentioned on the Internet by Tim Berners - Lee in late 1991.[6][7] It describes 18 elements comprising the initial, relatively simple design of HTML.Except for the hyperlink tag, these were strongly influenced by SGMLguid, an in -house Standard Generalized Markup Language(SGML) - based documentation format at CERN.Eleven of these elements still exist in HTML 4.[8]
          
          HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are found in the 1988 ISO technical report TR 9537 Techniques for using SGML, which in turn covers the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system: these formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with also the separation of structure and markup; HTML has been progressively moved in this direction with CSS.
          
              Berners - Lee considered HTML to be an application of SGML.It was formally defined as such by the Internet Engineering Task Force(IETF) with the mid - 1993 publication of the first proposal for an HTML specification, the "Hypertext Markup Language (HTML)" Internet Draft by Berners - Lee and Dan Connolly, which included an SGML Document type definition to define the grammar.[9][10] The draft expired after six months, but was notable for its acknowledgment of the NCSA Mosaic browser's custom tag for embedding in-line images, reflecting the IETF's philosophy of basing standards on successful prototypes.Similarly, Dave Raggett's competing Internet-Draft, "HTML+ (Hypertext Markup Format)", from late 1993, suggested standardizing already-implemented features like tables and fill-out forms.[11]
          
          After the HTML and HTML + drafts expired in early 1994, the IETF created an HTML Working Group, which in 1995 completed "HTML 2.0", the first HTML specification intended to be treated as a standard against which future implementations should be based.[12]
          
          Further development under the auspices of the IETF was stalled by competing interests.Since 1996, the HTML specifications have been maintained, with input from commercial software vendors, by the World Wide Web Consortium(W3C).[13] However, in 2000, HTML also became an international standard(ISO / IEC 15445: 2000).HTML 4.01 was published in late 1999, with further errata published through 2001. In 2004, development began on HTML5 in the Web Hypertext Application Technology Working Group(WHATWG), which became a joint deliverable with the W3C in 2008, and was completed and standardized on 28 October 2014.[14]
          HTML 2
          November 24, 1995
          HTML 2.0 was published as RFC 1866. Supplemental RFCs added capabilities:
          November 25, 1995: RFC 1867(form - based file upload)
          May 1996: RFC 1942(tables)
          August 1996: RFC 1980(client - side image maps)
          January 1997: RFC 2070(internationalization)
          HTML 3
          January 14, 1997
          HTML 3.2[15] was published as a W3C Recommendation.It was the first version developed and standardized exclusively by the W3C, as the IETF had closed its HTML Working Group on September 12, 1996.[16]
          Initially code - named "Wilbur", [17] HTML 3.2 dropped math formulas entirely, reconciled overlap among various proprietary extensions and adopted most of Netscape's visual markup tags. Netscape's blink element and Microsoft's marquee element were omitted due to a mutual agreement between the two companies.[13] A markup for mathematical formulas similar to that in HTML was not standardized until 14 months later in MathML.
          HTML 4
          December 18, 1997
          HTML 4.0[18] was published as a W3C Recommendation.It offers three variations:
              Strict, in which deprecated elements are forbidden
              Transitional, in which deprecated elements are allowed
              Frameset, in which mostly only frame related elements are allowed.
          Initially code - named "Cougar", [17] HTML 4.0 adopted many browser - specific element types and attributes, but at the same time sought to phase out Netscape's visual markup features by marking them as deprecated in favor of style sheets. HTML 4 is an SGML application conforming to ISO 8879 – SGML.[19]
          April 24, 1998
          HTML 4.0[20] was reissued with minor edits without incrementing the version number.
                  December 24, 1999
          HTML 4.01[21] was published as a W3C Recommendation.It offers the same three variations as HTML 4.0 and its last errata were published on May 12, 2001.
          May 2000
              ISO / IEC 15445: 2000[22][23]("ISO HTML", based on HTML 4.01 Strict) was published as an ISO / IEC international standard.In the ISO this standard falls in the domain of the ISO / IEC JTC 1 / SC 34(ISO / IEC Joint Technical Committee 1, Subcommittee 34 – Document description and processing languages).[22]
          After HTML 4.01, there was no new version of HTML for many years as the development of the parallel, XML - based language XHTML occupied the W3C's HTML Working Group through the early and mid-2000s.
          HTML 5
          Main article: HTML5
          October 28, 2014
              HTML5[24] was published as a W3C Recommendation.[25]
          November 1, 2016
          HTML 5.1[26] was published as a W3C Recommendation.[27][28]
          December 14, 2017
          HTML 5.2[29] was published as a W3C Recommendation.[30][31]
          HTML draft version timeline
          October 1991
          HTML Tags, [6] an informal CERN document listing 18 HTML tags, was first mentioned in public.
                  June 1992
          First informal draft of the HTML DTD, [32] with seven[33][34][35] subsequent revisions(July 15, August 6, August 18, November 17, November 19, November 20, November 22)
          November 1992
          HTML DTD 1.1(the first with a version number, based on RCS revisions, which start with 1.1 rather than 1.0), an informal draft[35]
          June 1993
          Hypertext Markup Language[36] was published by the IETF IIIR Working Group as an Internet Draft(a rough proposal for a standard).It was replaced by a second version[37] one month later.
                  November 1993
              HTML + was published by the IETF as an Internet Draft and was a competing proposal to the Hypertext Markup Language draft.It expired in July 1994.[38]
          November 1994
          First draft(revision 00) of HTML 2.0 published by IETF itself[39](called as "HTML 2.0" from revision 02[40]), that finally led to the publication of RFC 1866 in November 1995.[41]
          April 1995(authored March 1995)
          HTML 3.0[42] was proposed as a standard to the IETF, but the proposal expired five months later(28 September 1995)[43] without further action.It included many of the capabilities that were in Raggett's HTML+ proposal, such as support for tables, text flow around figures, and the display of complex mathematical formulas.[43]
          W3C began development of its own Arena browser as a test bed for HTML 3 and Cascading Style Sheets, [44][45][46] but HTML 3.0 did not succeed for several reasons.The draft was considered very large at 150 pages and the pace of browser development, as well as the number of interested parties, had outstripped the resources of the IETF.[13] Browser vendors, including Microsoft and Netscape at the time, chose to implement different subsets of HTML 3's draft features as well as to introduce their own extensions to it.[13] (see Browser wars). These included extensions to control stylistic aspects of documents, contrary to the "belief [of the academic engineering community] that such things as text color, background texture, font size, and font face were definitely outside the scope of a language when their only intent was to specify how a document would be organized."[13] Dave Raggett, who has been a W3C Fellow for many years, has commented for example: "To a certain extent, Microsoft built its business on the Web by extending HTML features."[13]
          Official HTML5 logo
          Logo of HTML5
          January 2008
          HTML5 was published as a Working Draft by the W3C.[47]
          Although its syntax closely resembles that of SGML, HTML5 has abandoned any attempt to be an SGML application and has explicitly defined its own "html" serialization, in addition to an alternative XML - based XHTML5 serialization.[48]
              2011 HTML5 – Last Call
          On 14 February 2011, the W3C extended the charter of its HTML Working Group with clear milestones for HTML5.In May 2011, the working group advanced HTML5 to "Last Call", an invitation to communities inside and outside W3C to confirm the technical soundness of the specification.The W3C developed a comprehensive test suite to achieve broad interoperability for the full specification by 2014, which was the target date for recommendation.[49] In January 2011, the WHATWG renamed its "HTML5" living standard to "HTML".The W3C nevertheless continues its project to release HTML5.[50]
              2012 HTML5 – Candidate Recommendation
          In July 2012, WHATWG and W3C decided on a degree of separation.W3C will continue the HTML5 specification work, focusing on a single definitive standard, which is considered a "snapshot" by WHATWG.The WHATWG organization will continue its work with HTML5 as a "Living Standard".The concept of a living standard is that it is never complete and is always being updated and improved.New features can be added but functionality will not be removed.[51]
          In December 2012, W3C designated HTML5 as a Candidate Recommendation.[52] The criterion for advancement to W3C Recommendation is "two 100% complete and fully interoperable implementations".[53]
              2014 HTML5 – Proposed Recommendation and Recommendation
          In September 2014, W3C moved HTML5 to Proposed Recommendation.[54]
          On 28 October 2014, HTML5 was released as a stable W3C Recommendation, [55] meaning the specification process is complete.[56]`,
          image:`${'./assets/blog1.png'}`
          },
          {
              "title": "GRPHQL",
                  "subHeading": `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.`,
                     "description": `Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
          
                  HTML elements are the building blocks of HTML pages.With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items.HTML elements are delineated by tags, written using angle brackets.Tags such as <img /> and < input /> directly introduce content into the page.Other tags such as <p> surround and provide information about document text and may include other tags as sub - elements.Browsers do not display the HTML tags but use them to interpret the content of the page.

                  HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages.The inclusion of CSS defines the look and layout of content.The World Wide Web Consortium(W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[2] A form of HTML, known as HTML5, is used to display video and audio, primarily using the < canvas > element, in collaboration with javascript.
                  In 1980, physicist Tim Berners - Lee, a contractor at CERN, proposed and prototyped ENQUIRE, a system for CERN researchers to use and share documents.In 1989, Berners - Lee wrote a memo proposing an Internet - based hypertext system.[3] Berners - Lee specified HTML and wrote the browser and server software in late 1990. That year, Berners - Lee and CERN data systems engineer Robert Cailliau collaborated on a joint request for funding, but the project was not formally adopted by CERN.In his personal notes[4] from 1990 he listed[5] "some of the many areas in which hypertext is used" and put an encyclopedia first.
          
          The first publicly available description of HTML was a document called "HTML Tags", first mentioned on the Internet by Tim Berners - Lee in late 1991.[6][7] It describes 18 elements comprising the initial, relatively simple design of HTML.Except for the hyperlink tag, these were strongly influenced by SGMLguid, an in -house Standard Generalized Markup Language(SGML) - based documentation format at CERN.Eleven of these elements still exist in HTML 4.[8]
          
          HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are found in the 1988 ISO technical report TR 9537 Techniques for using SGML, which in turn covers the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system: these formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with also the separation of structure and markup; HTML has been progressively moved in this direction with CSS.
          
              Berners - Lee considered HTML to be an application of SGML.It was formally defined as such by the Internet Engineering Task Force(IETF) with the mid - 1993 publication of the first proposal for an HTML specification, the "Hypertext Markup Language (HTML)" Internet Draft by Berners - Lee and Dan Connolly, which included an SGML Document type definition to define the grammar.[9][10] The draft expired after six months, but was notable for its acknowledgment of the NCSA Mosaic browser's custom tag for embedding in-line images, reflecting the IETF's philosophy of basing standards on successful prototypes.Similarly, Dave Raggett's competing Internet-Draft, "HTML+ (Hypertext Markup Format)", from late 1993, suggested standardizing already-implemented features like tables and fill-out forms.[11]
          
          After the HTML and HTML + drafts expired in early 1994, the IETF created an HTML Working Group, which in 1995 completed "HTML 2.0", the first HTML specification intended to be treated as a standard against which future implementations should be based.[12]
          
          Further development under the auspices of the IETF was stalled by competing interests.Since 1996, the HTML specifications have been maintained, with input from commercial software vendors, by the World Wide Web Consortium(W3C).[13] However, in 2000, HTML also became an international standard(ISO / IEC 15445: 2000).HTML 4.01 was published in late 1999, with further errata published through 2001. In 2004, development began on HTML5 in the Web Hypertext Application Technology Working Group(WHATWG), which became a joint deliverable with the W3C in 2008, and was completed and standardized on 28 October 2014.[14]
          HTML 2
          November 24, 1995
          HTML 2.0 was published as RFC 1866. Supplemental RFCs added capabilities:
          November 25, 1995: RFC 1867(form - based file upload)
          May 1996: RFC 1942(tables)
          August 1996: RFC 1980(client - side image maps)
          January 1997: RFC 2070(internationalization)
          HTML 3
          January 14, 1997
          HTML 3.2[15] was published as a W3C Recommendation.It was the first version developed and standardized exclusively by the W3C, as the IETF had closed its HTML Working Group on September 12, 1996.[16]
          Initially code - named "Wilbur", [17] HTML 3.2 dropped math formulas entirely, reconciled overlap among various proprietary extensions and adopted most of Netscape's visual markup tags. Netscape's blink element and Microsoft's marquee element were omitted due to a mutual agreement between the two companies.[13] A markup for mathematical formulas similar to that in HTML was not standardized until 14 months later in MathML.
          HTML 4
          December 18, 1997
          HTML 4.0[18] was published as a W3C Recommendation.It offers three variations:
              Strict, in which deprecated elements are forbidden
              Transitional, in which deprecated elements are allowed
              Frameset, in which mostly only frame related elements are allowed.
          Initially code - named "Cougar", [17] HTML 4.0 adopted many browser - specific element types and attributes, but at the same time sought to phase out Netscape's visual markup features by marking them as deprecated in favor of style sheets. HTML 4 is an SGML application conforming to ISO 8879 – SGML.[19]
          April 24, 1998
          HTML 4.0[20] was reissued with minor edits without incrementing the version number.
                  December 24, 1999
          HTML 4.01[21] was published as a W3C Recommendation.It offers the same three variations as HTML 4.0 and its last errata were published on May 12, 2001.
          May 2000
              ISO / IEC 15445: 2000[22][23]("ISO HTML", based on HTML 4.01 Strict) was published as an ISO / IEC international standard.In the ISO this standard falls in the domain of the ISO / IEC JTC 1 / SC 34(ISO / IEC Joint Technical Committee 1, Subcommittee 34 – Document description and processing languages).[22]
          After HTML 4.01, there was no new version of HTML for many years as the development of the parallel, XML - based language XHTML occupied the W3C's HTML Working Group through the early and mid-2000s.
          HTML 5
          Main article: HTML5
          October 28, 2014
              HTML5[24] was published as a W3C Recommendation.[25]
          November 1, 2016
          HTML 5.1[26] was published as a W3C Recommendation.[27][28]
          December 14, 2017
          HTML 5.2[29] was published as a W3C Recommendation.[30][31]
          HTML draft version timeline
          October 1991
          HTML Tags, [6] an informal CERN document listing 18 HTML tags, was first mentioned in public.
                  June 1992
          First informal draft of the HTML DTD, [32] with seven[33][34][35] subsequent revisions(July 15, August 6, August 18, November 17, November 19, November 20, November 22)
          November 1992
          HTML DTD 1.1(the first with a version number, based on RCS revisions, which start with 1.1 rather than 1.0), an informal draft[35]
          June 1993
          Hypertext Markup Language[36] was published by the IETF IIIR Working Group as an Internet Draft(a rough proposal for a standard).It was replaced by a second version[37] one month later.
                  November 1993
              HTML + was published by the IETF as an Internet Draft and was a competing proposal to the Hypertext Markup Language draft.It expired in July 1994.[38]
          November 1994
          First draft(revision 00) of HTML 2.0 published by IETF itself[39](called as "HTML 2.0" from revision 02[40]), that finally led to the publication of RFC 1866 in November 1995.[41]
          April 1995(authored March 1995)
          HTML 3.0[42] was proposed as a standard to the IETF, but the proposal expired five months later(28 September 1995)[43] without further action.It included many of the capabilities that were in Raggett's HTML+ proposal, such as support for tables, text flow around figures, and the display of complex mathematical formulas.[43]
          W3C began development of its own Arena browser as a test bed for HTML 3 and Cascading Style Sheets, [44][45][46] but HTML 3.0 did not succeed for several reasons.The draft was considered very large at 150 pages and the pace of browser development, as well as the number of interested parties, had outstripped the resources of the IETF.[13] Browser vendors, including Microsoft and Netscape at the time, chose to implement different subsets of HTML 3's draft features as well as to introduce their own extensions to it.[13] (see Browser wars). These included extensions to control stylistic aspects of documents, contrary to the "belief [of the academic engineering community] that such things as text color, background texture, font size, and font face were definitely outside the scope of a language when their only intent was to specify how a document would be organized."[13] Dave Raggett, who has been a W3C Fellow for many years, has commented for example: "To a certain extent, Microsoft built its business on the Web by extending HTML features."[13]
          Official HTML5 logo
          Logo of HTML5
          January 2008
          HTML5 was published as a Working Draft by the W3C.[47]
          Although its syntax closely resembles that of SGML, HTML5 has abandoned any attempt to be an SGML application and has explicitly defined its own "html" serialization, in addition to an alternative XML - based XHTML5 serialization.[48]
              2011 HTML5 – Last Call
          On 14 February 2011, the W3C extended the charter of its HTML Working Group with clear milestones for HTML5.In May 2011, the working group advanced HTML5 to "Last Call", an invitation to communities inside and outside W3C to confirm the technical soundness of the specification.The W3C developed a comprehensive test suite to achieve broad interoperability for the full specification by 2014, which was the target date for recommendation.[49] In January 2011, the WHATWG renamed its "HTML5" living standard to "HTML".The W3C nevertheless continues its project to release HTML5.[50]
              2012 HTML5 – Candidate Recommendation
          In July 2012, WHATWG and W3C decided on a degree of separation.W3C will continue the HTML5 specification work, focusing on a single definitive standard, which is considered a "snapshot" by WHATWG.The WHATWG organization will continue its work with HTML5 as a "Living Standard".The concept of a living standard is that it is never complete and is always being updated and improved.New features can be added but functionality will not be removed.[51]
          In December 2012, W3C designated HTML5 as a Candidate Recommendation.[52] The criterion for advancement to W3C Recommendation is "two 100% complete and fully interoperable implementations".[53]
              2014 HTML5 – Proposed Recommendation and Recommendation
          In September 2014, W3C moved HTML5 to Proposed Recommendation.[54]
          On 28 October 2014, HTML5 was released as a stable W3C Recommendation, [55] meaning the specification process is complete.[56]`
          },
          {
              "title": "React Redux",
                  "subHeading": `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.`,
                     "description": `Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
          
                  HTML elements are the building blocks of HTML pages.With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items.HTML elements are delineated by tags, written using angle brackets.Tags such as <img /> and < input /> directly introduce content into the page.Other tags such as <p> surround and provide information about document text and may include other tags as sub - elements.Browsers do not display the HTML tags but use them to interpret the content of the page.

                  HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages.The inclusion of CSS defines the look and layout of content.The World Wide Web Consortium(W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[2] A form of HTML, known as HTML5, is used to display video and audio, primarily using the < canvas > element, in collaboration with javascript.
                  In 1980, physicist Tim Berners - Lee, a contractor at CERN, proposed and prototyped ENQUIRE, a system for CERN researchers to use and share documents.In 1989, Berners - Lee wrote a memo proposing an Internet - based hypertext system.[3] Berners - Lee specified HTML and wrote the browser and server software in late 1990. That year, Berners - Lee and CERN data systems engineer Robert Cailliau collaborated on a joint request for funding, but the project was not formally adopted by CERN.In his personal notes[4] from 1990 he listed[5] "some of the many areas in which hypertext is used" and put an encyclopedia first.

          The first publicly available description of HTML was a document called "HTML Tags", first mentioned on the Internet by Tim Berners - Lee in late 1991.[6][7] It describes 18 elements comprising the initial, relatively simple design of HTML.Except for the hyperlink tag, these were strongly influenced by SGMLguid, an in -house Standard Generalized Markup Language(SGML) - based documentation format at CERN.Eleven of these elements still exist in HTML 4.[8]

          HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are found in the 1988 ISO technical report TR 9537 Techniques for using SGML, which in turn covers the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system: these formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with also the separation of structure and markup; HTML has been progressively moved in this direction with CSS.

              Berners - Lee considered HTML to be an application of SGML.It was formally defined as such by the Internet Engineering Task Force(IETF) with the mid - 1993 publication of the first proposal for an HTML specification, the "Hypertext Markup Language (HTML)" Internet Draft by Berners - Lee and Dan Connolly, which included an SGML Document type definition to define the grammar.[9][10] The draft expired after six months, but was notable for its acknowledgment of the NCSA Mosaic browser's custom tag for embedding in-line images, reflecting the IETF's philosophy of basing standards on successful prototypes.Similarly, Dave Raggett's competing Internet-Draft, "HTML+ (Hypertext Markup Format)", from late 1993, suggested standardizing already-implemented features like tables and fill-out forms.[11]

          After the HTML and HTML + drafts expired in early 1994, the IETF created an HTML Working Group, which in 1995 completed "HTML 2.0", the first HTML specification intended to be treated as a standard against which future implementations should be based.[12]

          Further development under the auspices of the IETF was stalled by competing interests.Since 1996, the HTML specifications have been maintained, with input from commercial software vendors, by the World Wide Web Consortium(W3C).[13] However, in 2000, HTML also became an international standard(ISO / IEC 15445: 2000).HTML 4.01 was published in late 1999, with further errata published through 2001. In 2004, development began on HTML5 in the Web Hypertext Application Technology Working Group(WHATWG), which became a joint deliverable with the W3C in 2008, and was completed and standardized on 28 October 2014.[14]
          HTML 2
          November 24, 1995
          HTML 2.0 was published as RFC 1866. Supplemental RFCs added capabilities:
          November 25, 1995: RFC 1867(form - based file upload)
          May 1996: RFC 1942(tables)
          August 1996: RFC 1980(client - side image maps)
          January 1997: RFC 2070(internationalization)
          HTML 3
          January 14, 1997
          HTML 3.2[15] was published as a W3C Recommendation.It was the first version developed and standardized exclusively by the W3C, as the IETF had closed its HTML Working Group on September 12, 1996.[16]
          Initially code - named "Wilbur", [17] HTML 3.2 dropped math formulas entirely, reconciled overlap among various proprietary extensions and adopted most of Netscape's visual markup tags. Netscape's blink element and Microsoft's marquee element were omitted due to a mutual agreement between the two companies.[13] A markup for mathematical formulas similar to that in HTML was not standardized until 14 months later in MathML.
          HTML 4
          December 18, 1997
          HTML 4.0[18] was published as a W3C Recommendation.It offers three variations:
              Strict, in which deprecated elements are forbidden
              Transitional, in which deprecated elements are allowed
              Frameset, in which mostly only frame related elements are allowed.
          Initially code - named "Cougar", [17] HTML 4.0 adopted many browser - specific element types and attributes, but at the same time sought to phase out Netscape's visual markup features by marking them as deprecated in favor of style sheets. HTML 4 is an SGML application conforming to ISO 8879 – SGML.[19]
          April 24, 1998
          HTML 4.0[20] was reissued with minor edits without incrementing the version number.
                  December 24, 1999
          HTML 4.01[21] was published as a W3C Recommendation.It offers the same three variations as HTML 4.0 and its last errata were published on May 12, 2001.
          May 2000
              ISO / IEC 15445: 2000[22][23]("ISO HTML", based on HTML 4.01 Strict) was published as an ISO / IEC international standard.In the ISO this standard falls in the domain of the ISO / IEC JTC 1 / SC 34(ISO / IEC Joint Technical Committee 1, Subcommittee 34 – Document description and processing languages).[22]
          After HTML 4.01, there was no new version of HTML for many years as the development of the parallel, XML - based language XHTML occupied the W3C's HTML Working Group through the early and mid-2000s.
          HTML 5
          Main article: HTML5
          October 28, 2014
              HTML5[24] was published as a W3C Recommendation.[25]
          November 1, 2016
          HTML 5.1[26] was published as a W3C Recommendation.[27][28]
          December 14, 2017
          HTML 5.2[29] was published as a W3C Recommendation.[30][31]
          HTML draft version timeline
          October 1991
          HTML Tags, [6] an informal CERN document listing 18 HTML tags, was first mentioned in public.
                  June 1992
          First informal draft of the HTML DTD, [32] with seven[33][34][35] subsequent revisions(July 15, August 6, August 18, November 17, November 19, November 20, November 22)
          November 1992
          HTML DTD 1.1(the first with a version number, based on RCS revisions, which start with 1.1 rather than 1.0), an informal draft[35]
          June 1993
          Hypertext Markup Language[36] was published by the IETF IIIR Working Group as an Internet Draft(a rough proposal for a standard).It was replaced by a second version[37] one month later.
                  November 1993
              HTML + was published by the IETF as an Internet Draft and was a competing proposal to the Hypertext Markup Language draft.It expired in July 1994.[38]
          November 1994
          First draft(revision 00) of HTML 2.0 published by IETF itself[39](called as "HTML 2.0" from revision 02[40]), that finally led to the publication of RFC 1866 in November 1995.[41]
          April 1995(authored March 1995)
          HTML 3.0[42] was proposed as a standard to the IETF, but the proposal expired five months later(28 September 1995)[43] without further action.It included many of the capabilities that were in Raggett's HTML+ proposal, such as support for tables, text flow around figures, and the display of complex mathematical formulas.[43]
          W3C began development of its own Arena browser as a test bed for HTML 3 and Cascading Style Sheets, [44][45][46] but HTML 3.0 did not succeed for several reasons.The draft was considered very large at 150 pages and the pace of browser development, as well as the number of interested parties, had outstripped the resources of the IETF.[13] Browser vendors, including Microsoft and Netscape at the time, chose to implement different subsets of HTML 3's draft features as well as to introduce their own extensions to it.[13] (see Browser wars). These included extensions to control stylistic aspects of documents, contrary to the "belief [of the academic engineering community] that such things as text color, background texture, font size, and font face were definitely outside the scope of a language when their only intent was to specify how a document would be organized."[13] Dave Raggett, who has been a W3C Fellow for many years, has commented for example: "To a certain extent, Microsoft built its business on the Web by extending HTML features."[13]
          Official HTML5 logo
          Logo of HTML5
          January 2008
          HTML5 was published as a Working Draft by the W3C.[47]
          Although its syntax closely resembles that of SGML, HTML5 has abandoned any attempt to be an SGML application and has explicitly defined its own "html" serialization, in addition to an alternative XML - based XHTML5 serialization.[48]
              2011 HTML5 – Last Call
          On 14 February 2011, the W3C extended the charter of its HTML Working Group with clear milestones for HTML5.In May 2011, the working group advanced HTML5 to "Last Call", an invitation to communities inside and outside W3C to confirm the technical soundness of the specification.The W3C developed a comprehensive test suite to achieve broad interoperability for the full specification by 2014, which was the target date for recommendation.[49] In January 2011, the WHATWG renamed its "HTML5" living standard to "HTML".The W3C nevertheless continues its project to release HTML5.[50]
              2012 HTML5 – Candidate Recommendation
          In July 2012, WHATWG and W3C decided on a degree of separation.W3C will continue the HTML5 specification work, focusing on a single definitive standard, which is considered a "snapshot" by WHATWG.The WHATWG organization will continue its work with HTML5 as a "Living Standard".The concept of a living standard is that it is never complete and is always being updated and improved.New features can be added but functionality will not be removed.[51]
          In December 2012, W3C designated HTML5 as a Candidate Recommendation.[52] The criterion for advancement to W3C Recommendation is "two 100% complete and fully interoperable implementations".[53]
              2014 HTML5 – Proposed Recommendation and Recommendation
          In September 2014, W3C moved HTML5 to Proposed Recommendation.[54]
          On 28 October 2014, HTML5 was released as a stable W3C Recommendation, [55] meaning the specification process is complete.[56]`
          },
          {
              "title": "CSS",
                  "subHeading": `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.`,
                     "description": `Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

                  HTML elements are the building blocks of HTML pages.With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items.HTML elements are delineated by tags, written using angle brackets.Tags such as <img /> and < input /> directly introduce content into the page.Other tags such as <p> surround and provide information about document text and may include other tags as sub - elements.Browsers do not display the HTML tags but use them to interpret the content of the page.

                  HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages.The inclusion of CSS defines the look and layout of content.The World Wide Web Consortium(W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[2] A form of HTML, known as HTML5, is used to display video and audio, primarily using the < canvas > element, in collaboration with javascript.
                  In 1980, physicist Tim Berners - Lee, a contractor at CERN, proposed and prototyped ENQUIRE, a system for CERN researchers to use and share documents.In 1989, Berners - Lee wrote a memo proposing an Internet - based hypertext system.[3] Berners - Lee specified HTML and wrote the browser and server software in late 1990. That year, Berners - Lee and CERN data systems engineer Robert Cailliau collaborated on a joint request for funding, but the project was not formally adopted by CERN.In his personal notes[4] from 1990 he listed[5] "some of the many areas in which hypertext is used" and put an encyclopedia first.

          The first publicly available description of HTML was a document called "HTML Tags", first mentioned on the Internet by Tim Berners - Lee in late 1991.[6][7] It describes 18 elements comprising the initial, relatively simple design of HTML.Except for the hyperlink tag, these were strongly influenced by SGMLguid, an in -house Standard Generalized Markup Language(SGML) - based documentation format at CERN.Eleven of these elements still exist in HTML 4.[8]

          HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are found in the 1988 ISO technical report TR 9537 Techniques for using SGML, which in turn covers the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system: these formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with also the separation of structure and markup; HTML has been progressively moved in this direction with CSS.

              Berners - Lee considered HTML to be an application of SGML.It was formally defined as such by the Internet Engineering Task Force(IETF) with the mid - 1993 publication of the first proposal for an HTML specification, the "Hypertext Markup Language (HTML)" Internet Draft by Berners - Lee and Dan Connolly, which included an SGML Document type definition to define the grammar.[9][10] The draft expired after six months, but was notable for its acknowledgment of the NCSA Mosaic browser's custom tag for embedding in-line images, reflecting the IETF's philosophy of basing standards on successful prototypes.Similarly, Dave Raggett's competing Internet-Draft, "HTML+ (Hypertext Markup Format)", from late 1993, suggested standardizing already-implemented features like tables and fill-out forms.[11]

          After the HTML and HTML + drafts expired in early 1994, the IETF created an HTML Working Group, which in 1995 completed "HTML 2.0", the first HTML specification intended to be treated as a standard against which future implementations should be based.[12]

          Further development under the auspices of the IETF was stalled by competing interests.Since 1996, the HTML specifications have been maintained, with input from commercial software vendors, by the World Wide Web Consortium(W3C).[13] However, in 2000, HTML also became an international standard(ISO / IEC 15445: 2000).HTML 4.01 was published in late 1999, with further errata published through 2001. In 2004, development began on HTML5 in the Web Hypertext Application Technology Working Group(WHATWG), which became a joint deliverable with the W3C in 2008, and was completed and standardized on 28 October 2014.[14]
          HTML 2
          November 24, 1995
          HTML 2.0 was published as RFC 1866. Supplemental RFCs added capabilities:
          November 25, 1995: RFC 1867(form - based file upload)
          May 1996: RFC 1942(tables)
          August 1996: RFC 1980(client - side image maps)
          January 1997: RFC 2070(internationalization)
          HTML 3
          January 14, 1997
          HTML 3.2[15] was published as a W3C Recommendation.It was the first version developed and standardized exclusively by the W3C, as the IETF had closed its HTML Working Group on September 12, 1996.[16]
          Initially code - named "Wilbur", [17] HTML 3.2 dropped math formulas entirely, reconciled overlap among various proprietary extensions and adopted most of Netscape's visual markup tags. Netscape's blink element and Microsoft's marquee element were omitted due to a mutual agreement between the two companies.[13] A markup for mathematical formulas similar to that in HTML was not standardized until 14 months later in MathML.
          HTML 4
          December 18, 1997
          HTML 4.0[18] was published as a W3C Recommendation.It offers three variations:
              Strict, in which deprecated elements are forbidden
              Transitional, in which deprecated elements are allowed
              Frameset, in which mostly only frame related elements are allowed.
          Initially code - named "Cougar", [17] HTML 4.0 adopted many browser - specific element types and attributes, but at the same time sought to phase out Netscape's visual markup features by marking them as deprecated in favor of style sheets. HTML 4 is an SGML application conforming to ISO 8879 – SGML.[19]
          April 24, 1998
          HTML 4.0[20] was reissued with minor edits without incrementing the version number.
                  December 24, 1999
          HTML 4.01[21] was published as a W3C Recommendation.It offers the same three variations as HTML 4.0 and its last errata were published on May 12, 2001.
          May 2000
              ISO / IEC 15445: 2000[22][23]("ISO HTML", based on HTML 4.01 Strict) was published as an ISO / IEC international standard.In the ISO this standard falls in the domain of the ISO / IEC JTC 1 / SC 34(ISO / IEC Joint Technical Committee 1, Subcommittee 34 – Document description and processing languages).[22]
          After HTML 4.01, there was no new version of HTML for many years as the development of the parallel, XML - based language XHTML occupied the W3C's HTML Working Group through the early and mid-2000s.
          HTML 5
          Main article: HTML5
          October 28, 2014
              HTML5[24] was published as a W3C Recommendation.[25]
          November 1, 2016
          HTML 5.1[26] was published as a W3C Recommendation.[27][28]
          December 14, 2017
          HTML 5.2[29] was published as a W3C Recommendation.[30][31]
          HTML draft version timeline
          October 1991
          HTML Tags, [6] an informal CERN document listing 18 HTML tags, was first mentioned in public.
                  June 1992
          First informal draft of the HTML DTD, [32] with seven[33][34][35] subsequent revisions(July 15, August 6, August 18, November 17, November 19, November 20, November 22)
          November 1992
          HTML DTD 1.1(the first with a version number, based on RCS revisions, which start with 1.1 rather than 1.0), an informal draft[35]
          June 1993
          Hypertext Markup Language[36] was published by the IETF IIIR Working Group as an Internet Draft(a rough proposal for a standard).It was replaced by a second version[37] one month later.
                  November 1993
              HTML + was published by the IETF as an Internet Draft and was a competing proposal to the Hypertext Markup Language draft.It expired in July 1994.[38]
          November 1994
          First draft(revision 00) of HTML 2.0 published by IETF itself[39](called as "HTML 2.0" from revision 02[40]), that finally led to the publication of RFC 1866 in November 1995.[41]
          April 1995(authored March 1995)
          HTML 3.0[42] was proposed as a standard to the IETF, but the proposal expired five months later(28 September 1995)[43] without further action.It included many of the capabilities that were in Raggett's HTML+ proposal, such as support for tables, text flow around figures, and the display of complex mathematical formulas.[43]
          W3C began development of its own Arena browser as a test bed for HTML 3 and Cascading Style Sheets, [44][45][46] but HTML 3.0 did not succeed for several reasons.The draft was considered very large at 150 pages and the pace of browser development, as well as the number of interested parties, had outstripped the resources of the IETF.[13] Browser vendors, including Microsoft and Netscape at the time, chose to implement different subsets of HTML 3's draft features as well as to introduce their own extensions to it.[13] (see Browser wars). These included extensions to control stylistic aspects of documents, contrary to the "belief [of the academic engineering community] that such things as text color, background texture, font size, and font face were definitely outside the scope of a language when their only intent was to specify how a document would be organized."[13] Dave Raggett, who has been a W3C Fellow for many years, has commented for example: "To a certain extent, Microsoft built its business on the Web by extending HTML features."[13]
          Official HTML5 logo
          Logo of HTML5
          January 2008
          HTML5 was published as a Working Draft by the W3C.[47]
          Although its syntax closely resembles that of SGML, HTML5 has abandoned any attempt to be an SGML application and has explicitly defined its own "html" serialization, in addition to an alternative XML - based XHTML5 serialization.[48]
              2011 HTML5 – Last Call
          On 14 February 2011, the W3C extended the charter of its HTML Working Group with clear milestones for HTML5.In May 2011, the working group advanced HTML5 to "Last Call", an invitation to communities inside and outside W3C to confirm the technical soundness of the specification.The W3C developed a comprehensive test suite to achieve broad interoperability for the full specification by 2014, which was the target date for recommendation.[49] In January 2011, the WHATWG renamed its "HTML5" living standard to "HTML".The W3C nevertheless continues its project to release HTML5.[50]
              2012 HTML5 – Candidate Recommendation
          In July 2012, WHATWG and W3C decided on a degree of separation.W3C will continue the HTML5 specification work, focusing on a single definitive standard, which is considered a "snapshot" by WHATWG.The WHATWG organization will continue its work with HTML5 as a "Living Standard".The concept of a living standard is that it is never complete and is always being updated and improved.New features can be added but functionality will not be removed.[51]
          In December 2012, W3C designated HTML5 as a Candidate Recommendation.[52] The criterion for advancement to W3C Recommendation is "two 100% complete and fully interoperable implementations".[53]
              2014 HTML5 – Proposed Recommendation and Recommendation
          In September 2014, W3C moved HTML5 to Proposed Recommendation.[54]
          On 28 October 2014, HTML5 was released as a stable W3C Recommendation, [55] meaning the specification process is complete.[56]`
          },
          {
              "title": "Javascript",
                  "subHeading": `The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.`,
                     "description": `Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

                  HTML elements are the building blocks of HTML pages.With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page.HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items.HTML elements are delineated by tags, written using angle brackets.Tags such as <img /> and < input /> directly introduce content into the page.Other tags such as <p> surround and provide information about document text and may include other tags as sub - elements.Browsers do not display the HTML tags but use them to interpret the content of the page.

                  HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages.The inclusion of CSS defines the look and layout of content.The World Wide Web Consortium(W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[2] A form of HTML, known as HTML5, is used to display video and audio, primarily using the < canvas > element, in collaboration with javascript.
                  In 1980, physicist Tim Berners - Lee, a contractor at CERN, proposed and prototyped ENQUIRE, a system for CERN researchers to use and share documents.In 1989, Berners - Lee wrote a memo proposing an Internet - based hypertext system.[3] Berners - Lee specified HTML and wrote the browser and server software in late 1990. That year, Berners - Lee and CERN data systems engineer Robert Cailliau collaborated on a joint request for funding, but the project was not formally adopted by CERN.In his personal notes[4] from 1990 he listed[5] "some of the many areas in which hypertext is used" and put an encyclopedia first.

          The first publicly available description of HTML was a document called "HTML Tags", first mentioned on the Internet by Tim Berners - Lee in late 1991.[6][7] It describes 18 elements comprising the initial, relatively simple design of HTML.Except for the hyperlink tag, these were strongly influenced by SGMLguid, an in -house Standard Generalized Markup Language(SGML) - based documentation format at CERN.Eleven of these elements still exist in HTML 4.[8]

          HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are found in the 1988 ISO technical report TR 9537 Techniques for using SGML, which in turn covers the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system: these formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with also the separation of structure and markup; HTML has been progressively moved in this direction with CSS.

              Berners - Lee considered HTML to be an application of SGML.It was formally defined as such by the Internet Engineering Task Force(IETF) with the mid - 1993 publication of the first proposal for an HTML specification, the "Hypertext Markup Language (HTML)" Internet Draft by Berners - Lee and Dan Connolly, which included an SGML Document type definition to define the grammar.[9][10] The draft expired after six months, but was notable for its acknowledgment of the NCSA Mosaic browser's custom tag for embedding in-line images, reflecting the IETF's philosophy of basing standards on successful prototypes.Similarly, Dave Raggett's competing Internet-Draft, "HTML+ (Hypertext Markup Format)", from late 1993, suggested standardizing already-implemented features like tables and fill-out forms.[11]

          After the HTML and HTML + drafts expired in early 1994, the IETF created an HTML Working Group, which in 1995 completed "HTML 2.0", the first HTML specification intended to be treated as a standard against which future implementations should be based.[12]

          Further development under the auspices of the IETF was stalled by competing interests.Since 1996, the HTML specifications have been maintained, with input from commercial software vendors, by the World Wide Web Consortium(W3C).[13] However, in 2000, HTML also became an international standard(ISO / IEC 15445: 2000).HTML 4.01 was published in late 1999, with further errata published through 2001. In 2004, development began on HTML5 in the Web Hypertext Application Technology Working Group(WHATWG), which became a joint deliverable with the W3C in 2008, and was completed and standardized on 28 October 2014.[14]
          HTML 2
          November 24, 1995
          HTML 2.0 was published as RFC 1866. Supplemental RFCs added capabilities:
          November 25, 1995: RFC 1867(form - based file upload)
          May 1996: RFC 1942(tables)
          August 1996: RFC 1980(client - side image maps)
          January 1997: RFC 2070(internationalization)
          HTML 3
          January 14, 1997
          HTML 3.2[15] was published as a W3C Recommendation.It was the first version developed and standardized exclusively by the W3C, as the IETF had closed its HTML Working Group on September 12, 1996.[16]
          Initially code - named "Wilbur", [17] HTML 3.2 dropped math formulas entirely, reconciled overlap among various proprietary extensions and adopted most of Netscape's visual markup tags. Netscape's blink element and Microsoft's marquee element were omitted due to a mutual agreement between the two companies.[13] A markup for mathematical formulas similar to that in HTML was not standardized until 14 months later in MathML.
          HTML 4
          December 18, 1997
          HTML 4.0[18] was published as a W3C Recommendation.It offers three variations:
              Strict, in which deprecated elements are forbidden
              Transitional, in which deprecated elements are allowed
              Frameset, in which mostly only frame related elements are allowed.
          Initially code - named "Cougar", [17] HTML 4.0 adopted many browser - specific element types and attributes, but at the same time sought to phase out Netscape's visual markup features by marking them as deprecated in favor of style sheets. HTML 4 is an SGML application conforming to ISO 8879 – SGML.[19]
          April 24, 1998
          HTML 4.0[20] was reissued with minor edits without incrementing the version number.
                  December 24, 1999
          HTML 4.01[21] was published as a W3C Recommendation.It offers the same three variations as HTML 4.0 and its last errata were published on May 12, 2001.
          May 2000
              ISO / IEC 15445: 2000[22][23]("ISO HTML", based on HTML 4.01 Strict) was published as an ISO / IEC international standard.In the ISO this standard falls in the domain of the ISO / IEC JTC 1 / SC 34(ISO / IEC Joint Technical Committee 1, Subcommittee 34 – Document description and processing languages).[22]
          After HTML 4.01, there was no new version of HTML for many years as the development of the parallel, XML - based language XHTML occupied the W3C's HTML Working Group through the early and mid-2000s.
          HTML 5
          Main article: HTML5
          October 28, 2014
              HTML5[24] was published as a W3C Recommendation.[25]
          November 1, 2016
          HTML 5.1[26] was published as a W3C Recommendation.[27][28]
          December 14, 2017
          HTML 5.2[29] was published as a W3C Recommendation.[30][31]
          HTML draft version timeline
          October 1991
          HTML Tags, [6] an informal CERN document listing 18 HTML tags, was first mentioned in public.
                  June 1992
          First informal draft of the HTML DTD, [32] with seven[33][34][35] subsequent revisions(July 15, August 6, August 18, November 17, November 19, November 20, November 22)
          November 1992
          HTML DTD 1.1(the first with a version number, based on RCS revisions, which start with 1.1 rather than 1.0), an informal draft[35]
          June 1993
          Hypertext Markup Language[36] was published by the IETF IIIR Working Group as an Internet Draft(a rough proposal for a standard).It was replaced by a second version[37] one month later.
                  November 1993
              HTML + was published by the IETF as an Internet Draft and was a competing proposal to the Hypertext Markup Language draft.It expired in July 1994.[38]
          November 1994
          First draft(revision 00) of HTML 2.0 published by IETF itself[39](called as "HTML 2.0" from revision 02[40]), that finally led to the publication of RFC 1866 in November 1995.[41]
          April 1995(authored March 1995)
          HTML 3.0[42] was proposed as a standard to the IETF, but the proposal expired five months later(28 September 1995)[43] without further action.It included many of the capabilities that were in Raggett's HTML+ proposal, such as support for tables, text flow around figures, and the display of complex mathematical formulas.[43]
          W3C began development of its own Arena browser as a test bed for HTML 3 and Cascading Style Sheets, [44][45][46] but HTML 3.0 did not succeed for several reasons.The draft was considered very large at 150 pages and the pace of browser development, as well as the number of interested parties, had outstripped the resources of the IETF.[13] Browser vendors, including Microsoft and Netscape at the time, chose to implement different subsets of HTML 3's draft features as well as to introduce their own extensions to it.[13] (see Browser wars). These included extensions to control stylistic aspects of documents, contrary to the "belief [of the academic engineering community] that such things as text color, background texture, font size, and font face were definitely outside the scope of a language when their only intent was to specify how a document would be organized."[13] Dave Raggett, who has been a W3C Fellow for many years, has commented for example: "To a certain extent, Microsoft built its business on the Web by extending HTML features."[13]
          Official HTML5 logo
          Logo of HTML5
          January 2008
          HTML5 was published as a Working Draft by the W3C.[47]
          Although its syntax closely resembles that of SGML, HTML5 has abandoned any attempt to be an SGML application and has explicitly defined its own "html" serialization, in addition to an alternative XML - based XHTML5 serialization.[48]
              2011 HTML5 – Last Call
          On 14 February 2011, the W3C extended the charter of its HTML Working Group with clear milestones for HTML5.In May 2011, the working group advanced HTML5 to "Last Call", an invitation to communities inside and outside W3C to confirm the technical soundness of the specification.The W3C developed a comprehensive test suite to achieve broad interoperability for the full specification by 2014, which was the target date for recommendation.[49] In January 2011, the WHATWG renamed its "HTML5" living standard to "HTML".The W3C nevertheless continues its project to release HTML5.[50]
              2012 HTML5 – Candidate Recommendation
          In July 2012, WHATWG and W3C decided on a degree of separation.W3C will continue the HTML5 specification work, focusing on a single definitive standard, which is considered a "snapshot" by WHATWG.The WHATWG organization will continue its work with HTML5 as a "Living Standard".The concept of a living standard is that it is never complete and is always being updated and improved.New features can be added but functionality will not be removed.[51]
          In December 2012, W3C designated HTML5 as a Candidate Recommendation.[52] The criterion for advancement to W3C Recommendation is "two 100% complete and fully interoperable implementations".[53]
              2014 HTML5 – Proposed Recommendation and Recommendation
          In September 2014, W3C moved HTML5 to Proposed Recommendation.[54]
          On 28 October 2014, HTML5 was released as a stable W3C Recommendation, [55] meaning the specification process is complete.[56]`
},
  
]
  constructor() { }
}
