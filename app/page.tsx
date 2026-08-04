"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, Bot, Boxes, Braces, Check, ChevronRight, Cloud,
  Code2, Cpu, Database, Gauge, Github, Layers3, Menu, MessageSquare,
  MousePointer2, Play, Puzzle, ShieldCheck, Sparkles, TerminalSquare,
  Workflow, X
} from "lucide-react";
import { useState } from "react";

const features = [
  { icon: Workflow, title: "Visual Workflow Builder", text: "Create advanced Discord automations with an intuitive node-based canvas." },
  { icon: Sparkles, title: "Camelliera AI", text: "Describe your idea and generate commands, flows, embeds and logic in seconds." },
  { icon: Gauge, title: "Realtime Analytics", text: "Watch usage, latency, guilds and command health from one live dashboard." },
  { icon: Puzzle, title: "Plugin Marketplace", text: "Install moderation, ticket, economy and utility modules with one click." },
  { icon: ShieldCheck, title: "Security by Design", text: "Secrets, role permissions and audit trails are built into every workspace." },
  { icon: Cloud, title: "Instant Deploy", text: "Ship updates quickly with production, preview and development environments." }
];

const steps = [
  ["01", "Connect your bot", "Link a Discord application securely in a few clicks."],
  ["02", "Build your workflow", "Drag nodes, configure actions and preview the result live."],
  ["03", "Deploy globally", "Publish instantly and monitor everything from one dashboard."]
];

function Logo() {
  return (
    <a className="brand" href="#">
      <span className="brandMark"><Sparkles size={17} /></span>
      <span>Camelliera</span>
    </a>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="noise" />
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />

      <header className="navWrap">
        <nav className="nav shell">
          <Logo />
          <div className={`navLinks ${open ? "show" : ""}`}>
            <a href="#products">Products</a>
            <a href="#builder">Builder</a>
            <a href="#marketplace">Marketplace</a>
            <a href="#pricing">Pricing</a>
            <a href="#docs">Docs</a>
          </div>
          <div className="navActions">
            <a className="login" href="#">Sign in</a>
            <a className="button small" href="#builder">Open dashboard <ChevronRight size={16}/></a>
            <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
              {open ? <X/> : <Menu/>}
            </button>
          </div>
        </nav>
      </header>

      <section className="hero shell">
        <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <a className="eyebrow" href="#products">
            <span className="dot" /> Camelliera Cloud is now live <ArrowRight size={14}/>
          </a>
          <h1>Build the future<br/>of <span>Discord.</span></h1>
          <p className="heroText">
            One beautiful platform to create, deploy and scale powerful Discord experiences—without fighting infrastructure.
          </p>
          <div className="heroButtons">
            <a className="button" href="#builder">Start building free <ArrowRight size={17}/></a>
            <a className="button secondary" href="#demo"><Play size={16} fill="currentColor"/> Watch demo</a>
          </div>
          <div className="trust">
            <div className="avatars"><i>A</i><i>M</i><i>K</i><i>+</i></div>
            <span>Built for creators, communities and teams</span>
          </div>
        </motion.div>

        <motion.div className="heroVisual" initial={{opacity:0,scale:.94,y:24}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.8,delay:.12}}>
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="floatCard leftCard">
            <span className="miniIcon purple"><Bot size={17}/></span>
            <div><b>Camelliera Bot</b><small><span className="online"/> Online · 42 ms</small></div>
          </div>
          <div className="floatCard rightCard">
            <span className="miniIcon orange"><Gauge size={17}/></span>
            <div><b>2.4M</b><small>commands this month</small></div>
          </div>
          <div className="appWindow">
            <div className="windowTop">
              <div className="windowDots"><i/><i/><i/></div>
              <span>app.camelliera.dev</span>
              <div/>
            </div>
            <div className="appBody">
              <aside>
                <Logo />
                <div className="sideItem active"><Gauge size={16}/> Overview</div>
                <div className="sideItem"><Bot size={16}/> Bots</div>
                <div className="sideItem"><Workflow size={16}/> Workflows</div>
                <div className="sideItem"><Puzzle size={16}/> Plugins</div>
                <div className="sideItem"><TerminalSquare size={16}/> Logs</div>
                <div className="sideBottom"><div className="avatar">KD</div><span>Khang<br/><small>Owner</small></span></div>
              </aside>
              <div className="dashboard">
                <div className="dashHead"><div><small>Workspace</small><h3>Good evening, Khang</h3></div><button>+ New project</button></div>
                <div className="metricGrid">
                  <div className="metric"><span>Commands</span><b>184.2K</b><small>↗ 18.4%</small></div>
                  <div className="metric"><span>Active guilds</span><b>12,894</b><small>↗ 8.2%</small></div>
                  <div className="metric"><span>API latency</span><b>42 ms</b><small>Excellent</small></div>
                </div>
                <div className="dashGrid">
                  <div className="chartCard">
                    <div className="cardTitle"><span>Command activity</span><small>Last 7 days</small></div>
                    <div className="chart">
                      {[34,52,44,68,58,82,73,90,76,96,84,106].map((h,i)=><i key={i} style={{height:`${h}px`}}/> )}
                    </div>
                    <div className="chartLabels"><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></div>
                  </div>
                  <div className="healthCard">
                    <div className="cardTitle"><span>System health</span><small className="healthy">All systems operational</small></div>
                    {["Gateway","Database","Workers","Webhooks"].map((x,i)=>
                      <div className="health" key={x}><span>{x}</span><div><i style={{width:`${[98,91,95,88][i]}%`}}/></div><b>{[99.9,98.4,99.2,97.8][i]}%</b></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="logoStrip shell">
        <p>POWERING THE NEXT GENERATION OF COMMUNITIES</p>
        <div><span>ORBIT</span><span>PIXELFORGE</span><span>NEXUS</span><span>ARCANA</span><span>MOONLAB</span></div>
      </section>

      <section className="section shell" id="products">
        <div className="sectionIntro">
          <span className="kicker">EVERYTHING IN ONE PLACE</span>
          <h2>From idea to production,<br/><em>without the chaos.</em></h2>
          <p>Powerful tools designed to work together, so you can focus on building experiences your community loves.</p>
        </div>
        <div className="featureGrid">
          {features.map((f,i)=>(
            <motion.article key={f.title} className="featureCard" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}>
              <div className="featureIcon"><f.icon size={21}/></div>
              <h3>{f.title}</h3><p>{f.text}</p>
              <a href="#">Explore feature <ArrowRight size={15}/></a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section shell builderSection" id="builder">
        <div className="builderCopy">
          <span className="kicker">VISUAL BUILDER</span>
          <h2>Complex logic.<br/><em>Beautifully simple.</em></h2>
          <p>Turn ideas into production-ready workflows using a canvas that feels fast, familiar and genuinely fun.</p>
          <ul>
            <li><Check size={16}/> Drag-and-drop nodes</li>
            <li><Check size={16}/> Live preview and testing</li>
            <li><Check size={16}/> Version history and rollback</li>
          </ul>
          <a className="textLink" href="#">Explore the builder <ArrowRight size={16}/></a>
        </div>
        <div className="canvasCard">
          <div className="canvasTop"><span><MousePointer2 size={15}/> Welcome workflow</span><div><button>Test</button><button className="deploy">Deploy</button></div></div>
          <div className="canvas">
            <svg className="lines" viewBox="0 0 700 400"><path d="M150 92 C250 92 230 180 340 180"/><path d="M452 180 C530 180 510 282 590 282"/></svg>
            <div className="node nodeA"><span className="nodeIcon purple"><MessageSquare/></span><div><small>TRIGGER</small><b>Member joined</b><p>When a new user joins</p></div><i/></div>
            <div className="node nodeB"><span className="nodeIcon orange"><Braces/></span><div><small>CONDITION</small><b>Account age</b><p>Older than 7 days</p></div><i/><i/></div>
            <div className="node nodeC"><span className="nodeIcon blue"><ShieldCheck/></span><div><small>ACTION</small><b>Assign role</b><p>Verified Member</p></div><i/></div>
            <div className="zoom">− &nbsp; 72% &nbsp; +</div>
          </div>
        </div>
      </section>

      <section className="section shell statsSection">
        <div className="sectionIntro compact"><span className="kicker">BUILT TO SCALE</span><h2>Fast at ten users.<br/><em>Fearless at ten million.</em></h2></div>
        <div className="bigStats">
          <div><b>99.99<span>%</span></b><p>Platform uptime</p></div>
          <div><b>42<span>ms</span></b><p>Global median latency</p></div>
          <div><b>2.4<span>M+</span></b><p>Commands processed</p></div>
          <div><b>18<span>K+</span></b><p>Active communities</p></div>
        </div>
      </section>

      <section className="section shell process">
        <div className="sectionIntro compact"><span className="kicker">HOW IT WORKS</span><h2>Ship something amazing<br/><em>before your coffee gets cold.</em></h2></div>
        <div className="steps">
          {steps.map(([n,t,d])=><div className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="cta shell">
        <div className="ctaGlow"/>
        <div>
          <span className="kicker">START BUILDING TODAY</span>
          <h2>Your next great community<br/>starts with Camelliera.</h2>
          <p>No credit card. No setup fee. Just a better way to build.</p>
          <div className="heroButtons center">
            <a className="button light" href="#">Create your workspace <ArrowRight size={17}/></a>
            <a className="button ghost" href="#">Talk to our team</a>
          </div>
        </div>
      </section>

      <footer className="footer shell" id="docs">
        <div className="footerTop">
          <div><Logo/><p>Build remarkable Discord experiences<br/>without the infrastructure headache.</p></div>
          <div className="footerLinks">
            <div><b>Product</b><a href="#">Builder</a><a href="#">Cloud</a><a href="#">Analytics</a><a href="#">Marketplace</a></div>
            <div><b>Resources</b><a href="#">Documentation</a><a href="#">API reference</a><a href="#">Status</a><a href="#">Changelog</a></div>
            <div><b>Company</b><a href="#">About</a><a href="#">Careers</a><a href="#">Contact</a><a href="#">Legal</a></div>
          </div>
        </div>
        <div className="footerBottom"><span>© 2026 Camelliera. Crafted for the Discord community.</span><div><Github size={18}/><span>English</span></div></div>
      </footer>
    </main>
  );
}
