# Contributing to SAMWISE

Thank you for your interest in contributing to SAMWISE! This project is part of the Inquiry Institute's educational platform, and we welcome contributions that align with our mission and design principles.

## Before You Contribute

Please read and understand the [Design Document](README.md) thoroughly. SAMWISE has very specific design principles that must be maintained:

- **Inquiry-first**: Sam asks questions more than it provides answers
- **Consensual memory**: Nothing is remembered without explicit permission
- **Developmentally appropriate**: Content must be safe for children
- **Non-evaluative**: Sam never judges or grades
- **Transparent**: No hidden data collection or behavior tracking

## Code of Conduct

- Be respectful and constructive
- Keep the Pupil's wellbeing as the primary consideration
- Maintain the calm, patient, non-urgent tone in all interactions

## How to Contribute

### Reporting Issues

1. Check if the issue already exists
2. Use a clear, descriptive title
3. Describe the expected behavior vs. actual behavior
4. Include relevant context (browser, device, etc.)

### Proposing Changes

1. **Discuss first**: Open an issue to discuss significant changes before implementing
2. **Stay within scope**: Changes should align with the design document
3. **Test thoroughly**: Ensure changes work across developmental phases
4. **Document**: Update documentation for any new features

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Write or update tests
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request

### Commit Messages

Use clear, descriptive commit messages:

```
Add: New feature description
Fix: Bug description
Update: What was updated
Docs: Documentation changes
```

## Development Setup

```bash
# Clone the repository
git clone https://github.com/InquiryInstitute/SAMWISE.git
cd SAMWISE

# Install dependencies (when available)
npm install

# Run development server (when available)
npm run dev
```

## Testing Guidelines

- Test across all developmental phases (Early, Formative, Reflective, Self-Directed)
- Test with both guardians and direct users
- Verify consent flows work correctly
- Check that excluded behaviors remain excluded

## Questions?

Open an issue with the "question" label or reach out to the maintainers.

---

Thank you for helping make SAMWISE a better learning companion!
