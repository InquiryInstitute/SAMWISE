# SAMWISE Implementation TODO

> Implementation roadmap for the Supportive Assistant for Memory, Writing, Inquiry, Sense-making, and Exploration

---

## Domain Architecture

| Domain | Purpose | Status |
|--------|---------|--------|
| `sam.inquiry.institute` | Personalized SAMWISE app | 🟡 Placeholder |
| `inquiry.institute/SAMWISE` | About/marketing page | ✅ Live |
| GitHub repo | Source code & docs | ✅ Live |

---

## Phase 0: Foundation & Setup ✅

- [x] Create GitHub repository
- [x] Write design document (README.md)
- [x] Set up subdomain (sam.inquiry.institute)
- [x] Create about page (inquiry.institute/SAMWISE)
- [x] Set up placeholder page
- [ ] Create app project structure
- [ ] Set up development environment
- [ ] Configure CI/CD pipeline
- [ ] Choose hosting (Fly.io / Vercel / etc.)

---

## Phase 1: Frontend — The Drawer 🎨

### 1.1 Drawer Component
- [ ] Create base drawer component (React/Preact)
- [ ] Implement three visibility states:
  - [ ] Closed (tab/icon only)
  - [ ] Half-open (primary interaction mode)
  - [ ] Full-open (explicit action)
- [ ] Add smooth slide animations
- [ ] Implement responsive behavior:
  - [ ] Desktop/tablet: right-side drawer
  - [ ] Mobile: bottom sheet

### 1.2 Drawer Rules
- [ ] Ensure Sam never auto-opens
- [ ] Prevent drawer from interrupting content
- [ ] Never block reading or viewing
- [ ] Handle scroll locking appropriately
- [ ] Implement keyboard shortcuts (Escape to close)

### 1.3 Chat Interface
- [ ] Create message list component
- [ ] Implement text input area
- [ ] Add voice dictation button (mobile)
- [ ] Design loading/thinking indicators
- [ ] Style Sam's messages distinctively
- [ ] Handle long messages gracefully

### 1.4 Integration
- [ ] Create site-wide drawer wrapper
- [ ] Persist drawer state locally (localStorage)
- [ ] Add to all learning pages
- [ ] Handle page navigation gracefully
- [ ] Test across browsers and devices

---

## Phase 2: Backend — Core Services 🔧

### 2.1 Authentication
- [ ] Implement GitHub OAuth flow
- [ ] Create session management
- [ ] Handle token refresh
- [ ] Support guest mode (limited features)
- [ ] Age verification for guardian consent

### 2.2 GitHub Integration
- [ ] Set up GitHub App for repo access
- [ ] Implement repository reading
- [ ] Create PR proposal system for memory writes
- [ ] Handle rate limiting gracefully
- [ ] Cache repository data appropriately

### 2.3 LLM Orchestration
- [ ] Set up LLM provider integration
- [ ] Implement conversation threading
- [ ] Create context window management
- [ ] Add streaming response support
- [ ] Implement token budgeting
- [ ] Rate limiting per user

### 2.4 API Design
- [ ] Design RESTful endpoints
- [ ] Implement WebSocket for real-time chat
- [ ] Create API authentication middleware
- [ ] Add request validation
- [ ] Implement error handling

---

## Phase 3: Memory System 🧠

### 3.1 Memory Types
- [ ] Implement session memory (ephemeral)
- [ ] Create course memory (scoped)
- [ ] Build global memory (lifelong, opt-in)
- [ ] Design memory data schema

### 3.2 Memory Storage
- [ ] Store memories in Pupil's repository
- [ ] Implement memory indexing
- [ ] Create memory retrieval system
- [ ] Build memory proposal workflow
- [ ] Handle memory consent flows

### 3.3 RAG Implementation
- [ ] Set up vector database
- [ ] Create embedding pipeline
- [ ] Index Pupil repository content
- [ ] Index course materials
- [ ] Implement semantic search
- [ ] Build context assembly for prompts

### 3.4 Memory Rules
- [ ] Implement consent verification
- [ ] Create "remember when" safeguards
- [ ] Prevent unauthorized memory access
- [ ] Add memory review UI for Pupils
- [ ] Implement memory deletion

---

## Phase 4: MCP Tools 🛠️

### 4.1 Dictionary Tool
- [ ] Integrate dictionary API
- [ ] Return multiple definitions
- [ ] Never present as authoritative
- [ ] Format definitions for conversation

### 4.2 Encyclopedia Tool (Curated)
- [ ] Curate approved knowledge sources
- [ ] Implement summarization
- [ ] Provide background context only
- [ ] Link to full sources when appropriate

### 4.3 Commonplace Reader
- [ ] Read Pupil's notes from repository
- [ ] Parse various note formats (markdown, etc.)
- [ ] Extract relevant excerpts
- [ ] Respect privacy boundaries

### 4.4 Memory Proposal Tool
- [ ] Create memory proposal interface
- [ ] Generate PR drafts for memories
- [ ] Never auto-write to repository
- [ ] Include consent confirmation

### 4.5 Question Generator
- [ ] Implement question type classification
- [ ] Generate follow-up questions
- [ ] Adapt to developmental phase
- [ ] Balance question types (70% questions heuristic)

---

## Phase 5: Developmental Adaptation 🌱

### 5.1 Phase Detection
- [ ] Implement behavioral inference
- [ ] Create guardian-set boundaries
- [ ] Build phase transition logic
- [ ] Default to simpler/safer when uncertain

### 5.2 Early Inquiry (≈6–9)
- [ ] Simplify language patterns
- [ ] Use concrete questions only
- [ ] Minimize memory recall
- [ ] Shorter response lengths

### 5.3 Formative Inquiry (≈10–13)
- [ ] Add gentle comparison capability
- [ ] Introduce vocabulary gradually
- [ ] Moderate memory integration

### 5.4 Reflective Inquiry (≈14–18)
- [ ] Enable abstract reasoning
- [ ] Challenge assumptions appropriately
- [ ] Support longitudinal reflection

### 5.5 Self-Directed Inquiry (Adult)
- [ ] Peer-level synthesis
- [ ] Deep pattern recognition
- [ ] Full memory capabilities

---

## Phase 6: Address & Personalization 👤

### 6.1 First Interaction
- [ ] Create first-run flow
- [ ] Ask address preference
- [ ] Store preference securely
- [ ] Handle preference changes

### 6.2 Address Options
- [ ] Implement "Mr. <First Name>"
- [ ] Implement "Miss <First Name>"
- [ ] Implement "Mx. <First Name>"
- [ ] Implement first name only
- [ ] Implement no name option

### 6.3 Consistency
- [ ] Use chosen form throughout
- [ ] Never assume gender
- [ ] Never apply titles without consent

---

## Phase 7: Prompt Engineering 📝

### 7.1 System Prompt
- [ ] Implement canonical prompt directive
- [ ] Add role definition
- [ ] Include posture guidelines
- [ ] Specify address behavior
- [ ] Define primary behavior (70/20/10)
- [ ] Add memory rules
- [ ] Include developmental adaptation
- [ ] Set tone guidelines

### 7.2 Context Injection
- [ ] Insert Pupil context
- [ ] Add course context
- [ ] Include relevant memories
- [ ] Inject developmental phase
- [ ] Add current page context

### 7.3 Response Formatting
- [ ] Ensure questions end responses
- [ ] Brief explanations followed by questions
- [ ] Tentative framing for teaching
- [ ] Never judgmental language

---

## Phase 8: Safety & Ethics 🛡️

### 8.1 Content Filtering
- [ ] Implement inappropriate content detection
- [ ] Block harmful requests
- [ ] Handle sensitive topics appropriately
- [ ] Age-appropriate response filtering

### 8.2 Privacy
- [ ] Ensure data ownership (Pupil's repo)
- [ ] No silent writes
- [ ] Transparent memory access
- [ ] COPPA compliance
- [ ] GDPR compliance

### 8.3 Excluded Behaviors
- [ ] Block web search (unbounded)
- [ ] Prevent emotion inference
- [ ] No scoring or grading
- [ ] No behavioral analytics
- [ ] No recommendation engines

### 8.4 Guardian Controls
- [ ] Guardian notification system
- [ ] Conversation review capability
- [ ] Memory management by guardians
- [ ] Developmental phase override

---

## Phase 9: Testing & QA 🧪

### 9.1 Unit Tests
- [ ] Test drawer component
- [ ] Test memory system
- [ ] Test MCP tools
- [ ] Test developmental phases
- [ ] Test address system

### 9.2 Integration Tests
- [ ] Test full conversation flow
- [ ] Test memory persistence
- [ ] Test GitHub integration
- [ ] Test authentication flow

### 9.3 Safety Tests
- [ ] Test content filtering
- [ ] Test privacy boundaries
- [ ] Test consent workflows
- [ ] Test excluded behaviors

### 9.4 User Testing
- [ ] Test with Early Inquiry users (6–9)
- [ ] Test with Formative Inquiry users (10–13)
- [ ] Test with Reflective Inquiry users (14–18)
- [ ] Test with adult users
- [ ] Gather feedback from guardians

---

## Phase 10: Documentation & Launch 📚

### 10.1 Technical Documentation
- [ ] API documentation
- [ ] MCP tool documentation
- [ ] Architecture documentation
- [ ] Deployment guide

### 10.2 User Documentation
- [ ] Parent/Guardian guide
- [ ] School explainer (one-page)
- [ ] First-run dialogue scripts by age
- [ ] FAQ

### 10.3 Launch
- [ ] Beta testing program
- [ ] Soft launch to selected users
- [ ] Monitor and iterate
- [ ] Full launch

---

## Future Considerations 🔮

### Not for v1 (explicitly deferred)
- [ ] Multi-language support
- [ ] Voice-only mode
- [ ] Integration with external LMS
- [ ] Faculty dashboard
- [ ] Analytics for educators
- [ ] Mobile app

### Under Evaluation
- [ ] Offline capability
- [ ] Export/portability of memories
- [ ] Integration with physical notebooks
- [ ] Collaborative learning features

---

## Progress Tracking

| Phase | Status | Completion |
|-------|--------|------------|
| Phase 0: Foundation | 🟡 In Progress | 50% |
| Phase 1: Frontend | ⚪ Not Started | 0% |
| Phase 2: Backend | ⚪ Not Started | 0% |
| Phase 3: Memory | ⚪ Not Started | 0% |
| Phase 4: MCP Tools | ⚪ Not Started | 0% |
| Phase 5: Development | ⚪ Not Started | 0% |
| Phase 6: Address | ⚪ Not Started | 0% |
| Phase 7: Prompts | ⚪ Not Started | 0% |
| Phase 8: Safety | ⚪ Not Started | 0% |
| Phase 9: Testing | ⚪ Not Started | 0% |
| Phase 10: Launch | ⚪ Not Started | 0% |

---

## Notes

- All memory writes require explicit Pupil consent
- When in doubt, default to simpler and safer
- Sam does not rush, Sam does not judge, Sam stays with the Pupil
- This design is meant to be stable for years, flexible enough to evolve

---

*Last updated: January 28, 2026*
