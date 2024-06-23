import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Resume</h1>
        </div>  
        <div className="max-w-3xl">
          <h2 className={title({ color: "donnie", size: "sm", pad: "bottom", })}>Career Summary</h2>
          <p className="pb-4">A Marketing/Tech (MarTech) professional with expertise in digital marketing and design. Forward-thinker with a demonstrated track record for building high-functioning teams with dynamic (and profitable) outcomes. A leader with a penchant for developing people. Strives to build strong and collaborative cultures while improving efficiencies. Noted for establishing processes through realistic goal setting, strategic development of people and systems, as well as creative, empathetic leadership. Comfortable working in fast-paced environments with meticulous detail. Stellar abilities in innovative problem solving, including identification of issues and formulating solutions.</p>
          
          <h2 className={title({ color: "donnie", size: "sm", })}>Key Skills</h2>
          <ul className="list-disc list-inside leading-relaxed pb-4">
            <li className="-indent-4 pl-4"><strong>Process Development:</strong> A detail-oriented professional who understands how operations impact efficiency and profits.</li>
            <li className="-indent-4 pl-4"><strong>Leadership:</strong> A leader who is willing to lead through service, clear communication, and collaboration.</li>
            <li className="-indent-4 pl-4"><strong>Solutions Mindset:</strong> Creative problem-solver who strategically seeks outside-the-box solutions.</li>
            <li className="-indent-4 pl-4"><strong>Collaborative:</strong> Innovator who uses available resources in order to bring the best options and opportunities to the table.</li>
            <li className="-indent-4 pl-4"><strong>Personal Accountability:</strong> A driven determination to embrace and accept responsibility for any assigned challenge.</li>
            <li className="-indent-4 pl-4"><strong>Coaching & Team Development:</strong> Strategically mentor and coach individuals, and develop plans designed to highlight individuals&apos; unique needs to both challenge and grow them personally and professionally.</li>
          </ul>

          <h2 className={title({ color: "donnie", size: "sm", })}>Professional Skills</h2>
          <ul className="list-disc list-inside leading-relaxed pb-4">
            <li className="-indent-4 pl-4">Agile Project Management</li>
            <li className="-indent-4 pl-4">Program Management</li>
            <li className="-indent-4 pl-4">Case Studies</li>
            <li className="-indent-4 pl-4">Web Development</li>
            <li className="-indent-4 pl-4">UI/UX Design</li>
            <li className="-indent-4 pl-4">SEO/SEM Optimization</li>
            <li className="-indent-4 pl-4">WCAG Compliance</li>
            <li className="-indent-4 pl-4">A/B Testing & Experimentation</li>
            <li className="-indent-4 pl-4">Website Performance Monitoring</li>
            <li className="-indent-4 pl-4">eCommerce Optimization</li>
          </ul>

          <h2 className={title({ color: "donnie", size: "sm", })}>Professional Experience</h2><br/>
          <h3 className={title({ color: "mikey", size: "xs", })}>Wildfire, LLC (Winston-Salem, NC) (2012 &ndash; Present)</h3>
          <h4 className="font-bold">Chief Digital Officer (2021 &ndash; Present)</h4>
          <ul className="list-disc list-inside leading-relaxed pb-4">
            <li className="-indent-4 pl-4">Consistently exceed digital marketing revenue goals year over year, with 64% growth in 2022; 52% in 2023; and 33% projected growth in 2024.</li>
            <li className="-indent-4 pl-4">Lead, coach, and develop 21+ digital marketers/developers/strategists to produce digital web solutions with innovative technology.</li>
            <li className="-indent-4 pl-4">Research, develop, and maintain relationships with major website hosting platforms (e.g., website hosting, SEO and WCAG compliance, CRM, and SaaS providers), ensuring the service providers offer solutions that best fit the clients&apos; needs and ensuring efficient project management.</li>
            <li className="-indent-4 pl-4">Cross-collaborate with traditional marketing teams to ensure brand continuity.</li>
            <li className="-indent-4 pl-4">Maintain continual expertise in technology support, including AI, accessibility, privacy, compliance, etc.</li>
          </ul>

          <h4 className="font-bold">Interactive Technical Lead (2016 &ndash; 2021)</h4>
          <ul className="list-disc list-inside leading-relaxed pb-4">
            <li className="-indent-4 pl-4">Primary solutions architect, taking a holistic approach to all technical, marketing, and operational functions of a client in order to identify opportunities for new software, tools, enhancements, and upgrades.</li>
            <li className="-indent-4 pl-4">Coordinated sprint planning for the team while leading the day-to-day operations of the web team (3 developers and 1 technical support representative).</li>
            <li className="-indent-4 pl-4">Managed coding and project management; developed project roadmaps and identified technical requirements to gain web development efficiency.</li>
          </ul>

          <h4 className="font-bold">Web Application Developer:  Senior Full Stack WordPress Developer (2012 &ndash; 2016)</h4>
          <ul className="list-disc list-inside leading-relaxed pb-4">
            <li className="-indent-4 pl-4">Successfully identified inefficiencies and created a streamlined approach to manage consistent processes for website development and technology initiatives.</li>
            <li className="-indent-4 pl-4">Utilized HTML/CSS/SCSS/JS/PHP to design and develop 100+ websites utilizing expertise in the WordPress system, including the integration of plug-ins (Gravity Forms, YOAST, All Import/Export Pro, WordFence, and WooCommerce).</li>
          </ul>

          <h3 className={title({ color: "mikey", size: "xs", })}>Freelance</h3>
          <h4 className="font-bold">Designer & Developer (Winston-Salem, NC) (2010 &ndash; 2012)</h4>
          <ul className="list-disc list-inside leading-relaxed pb-4">
            <li className="-indent-4 pl-4">Self-Employed Graphic / Web Designer & Developer</li>
            <li className="-indent-4 pl-4">Freelance contractor for website development, focused on aesthetics and technology enhancements to meet the needs of respective clients / marketing campaigns.</li>
          </ul>

          <h3 className={title({ color: "mikey", size: "xs", })}>Shelor, Inc. (Blacksburg, VA) (2004 &ndash; 2010)</h3>
          <h4 className="font-bold">Graphic Design Manager / Lead Designer / Director of Design</h4>
          <ul className="list-disc list-inside leading-relaxed pb-4">
            <li className="-indent-4 pl-4">Led a team providing graphic design support for various clients, including logos, signage, print collateral, and brand design.</li>
            <li className="-indent-4 pl-4">Built websites and designed social media campaigns to complement clients&rsquo; brand and strategic marketing campaigns.</li>
          </ul>

          <h2 className={title({ color: "donnie", size: "sm", })}>Education</h2>
          <p><strong>Virginia Tech</strong> (Blacksburg, VA)</p>
          <p className="pb-4">Bachelor of Arts, Graphic Design</p>

          <h2 className={title({ color: "donnie", size: "sm", })}>Certifications</h2>
          <ul className="list-disc list-inside leading-relaxed pb-4">
            <li className="-indent-4 pl-4">Certified Team Leader and Member of the American Association of Advertising Agencies (4As)</li>
            <li className="-indent-4 pl-4">GenAI Certification for Advertising (4As)</li>
          </ul>

          <h2 className={title({ color: "donnie", size: "sm", })}>Technology Skills</h2>
          <ul className="list-disc list-inside leading-relaxed pb-4">
            <li className="-indent-4 pl-4">WordPress</li>
            <li className="-indent-4 pl-4">Shopify</li>
            <li className="-indent-4 pl-4">HubSpot</li>
            <li className="-indent-4 pl-4">Klayvio</li>
            <li className="-indent-4 pl-4">FIGMA</li>
            <li className="-indent-4 pl-4">Photoshop</li>
            <li className="-indent-4 pl-4">HTML/CSS/JS</li>
            <li className="-indent-4 pl-4">PHP</li>
            <li className="-indent-4 pl-4">GIT</li>
            <li className="-indent-4 pl-4">Pantheon</li>
            <li className="-indent-4 pl-4">AWS</li>
            <li className="-indent-4 pl-4">BrightEdge</li>
            <li className="-indent-4 pl-4">SEMRush</li>
            <li className="-indent-4 pl-4">Google Analytics/GA4</li>
            <li className="-indent-4 pl-4">Google Tag Manager</li>
            <li className="-indent-4 pl-4">Looker Studio</li>
          </ul>
        </div>
      </section>
    </DefaultLayout>
  );
}