from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "resume-gaoyuan-shi.pdf"


def p(text, style):
    return Paragraph(text, style)


def bullets(items, style):
    return [p(f"&bull; {item}", style) for item in items]


def section(title, styles):
    return [
        Spacer(1, 7),
        p(title, styles["section"]),
        Spacer(1, 3),
    ]


def entry(title, meta, bullets_list, styles):
    story = [
        Table(
            [[p(f"<b>{title}</b>", styles["body"]), p(meta, styles["right"])]],
            colWidths=[4.25 * inch, 2.15 * inch],
            style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)]),
        )
    ]
    story.extend(bullets(bullets_list, styles["bullet"]))
    return story


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)

    base = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=25,
            alignment=1,
            textColor=colors.HexColor("#111827"),
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=10,
            alignment=1,
            textColor=colors.HexColor("#374151"),
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=12,
            textColor=colors.HexColor("#111827"),
            borderWidth=0,
            borderPadding=0,
            spaceAfter=2,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=10,
            textColor=colors.HexColor("#111827"),
        ),
        "right": ParagraphStyle(
            "Right",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=10,
            alignment=2,
            textColor=colors.HexColor("#374151"),
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8,
            leading=9.4,
            leftIndent=8,
            firstLineIndent=-8,
            textColor=colors.HexColor("#111827"),
        ),
    }

    story = [
        p("Gaoyuan Shi", styles["name"]),
        p(
            "gyushi320@gmail.com | San Jose, CA | linkedin.com/in/gaoyuan-shi-a150bb405 | github.com/Ujang-shi",
            styles["contact"],
        ),
        Spacer(1, 6),
    ]

    story += section("Education", styles)
    story += entry(
        "Northeastern University - Master of Science in Computer Science (Align)",
        "San Jose, CA | Expected May 2027",
        [],
        styles,
    )
    story += entry(
        "University of California, Davis - B.S. Economics; B.S. Mathematical Analytics and Operations",
        "Davis, CA | June 2022",
        [],
        styles,
    )

    story += section("Technical Skills", styles)
    story += [
        p("<b>Languages:</b> Python, Java, JavaScript, TypeScript, SQL, HTML/CSS", styles["body"]),
        p("<b>Frameworks & Libraries:</b> React, Node.js, Express, FastAPI, LangGraph, Vue", styles["body"]),
        p("<b>Databases:</b> SQLite, PostgreSQL, MySQL, MongoDB, Redis, Milvus", styles["body"]),
        p("<b>Tools & Platforms:</b> Git, Docker, REST APIs, Linux, AWS basics", styles["body"]),
    ]

    story += section("Experience", styles)
    story += entry(
        "Co-Founder & Software Developer, Ningjing Group LLC",
        "Davis, CA | Jun 2022 - Dec 2024",
        [
            "Built a full-stack international student service marketplace using React and Node.js/Express, supporting JWT authentication, service listings, and booking management.",
            "Designed RESTful APIs with SQLite-backed booking workflows for session scheduling, advisor availability, and real-time appointment status tracking.",
            "Developed a service-advisor matching module with SQL-layer category filtering, application-layer preference filtering, and availability ranking, reducing average assignment time by 40%.",
            "Integrated an AI-powered bilingual FAQ assistant using Anthropic Claude API with prompt caching on the platform knowledge base to reduce repeated query cost.",
            "Grew the platform from 0 to 500+ users by collaborating on go-to-market strategy and iterating product features from direct student feedback.",
        ],
        styles,
    )
    story += entry(
        "Back-End Developer Intern, Ningbo Industrial Chain Digital Technology Co., Ltd",
        "Ningbo, China | Aug 2021 - Mar 2022",
        [
            "Developed the Yongxinpei online platform using Java, enabling off-campus training institutions to manage transactions, operational data, and financial records for 50+ partner organizations.",
            "Implemented blockchain-based data recording to support tamper-resistant audit trails.",
        ],
        styles,
    )

    story += section("Projects", styles)
    story += entry(
        "Deep Research Agent",
        "Python, FastAPI, LangGraph, Vue, OpenAI API, Tavily | 2026",
        [
            "Led and implemented a full-stack multi-agent research assistant over 4 weeks, building intent routing between quick-answer and full research workflows.",
            "Designed an agentic pipeline covering planning, Tavily web search, local retrieval, evidence review, analysis, and report generation with a FastAPI streaming backend.",
            "Integrated long-term memory using PostgreSQL, Redis caching, and Milvus vector store for semantic retrieval and persistent personalized context.",
            "Supported OpenAI-compatible model configuration and custom OPENAI_BASE_URL for flexible model provider swapping without code changes.",
        ],
        styles,
    )
    story += entry(
        "Game Stats Tracker",
        "React, Vite, Node.js, Express, MongoDB, Passport.js | 2026",
        [
            "Built a full-stack game record and statistics platform with a 2-person team, supporting authentication, game library management, and session logging for 1000+ seeded records.",
            "Developed a paginated player statistics dashboard with win rates, streaks, and head-to-head insights; achieved a 100/100 Lighthouse accessibility score and deployed to production.",
        ],
        styles,
    )

    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=letter,
        rightMargin=0.45 * inch,
        leftMargin=0.45 * inch,
        topMargin=0.34 * inch,
        bottomMargin=0.34 * inch,
    )
    doc.build(story)
    print(OUT)


if __name__ == "__main__":
    main()
