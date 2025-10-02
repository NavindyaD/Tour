# Internationalization (i18n) System

This project now supports multiple languages: English, Sinhala (සිංහල), Korean (한국어), and Italian (Italiano).

## Features

- 🌍 **Multi-language Support**: Switch between English, Sinhala, Korean, and Italian
- 🎯 **Easy Language Switching**: Dropdown selector in the navigation bar
- 📱 **Mobile Responsive**: Works perfectly on all device sizes
- 🔄 **Context-based**: Uses React Context for state management
- 🎨 **Beautiful UI**: Modern, accessible language selector with flags

## How to Use

### For Users
1. Look for the language selector in the top-right corner of the navigation bar
2. Click on the current language (shows flag + language name)
3. Select your preferred language from the dropdown
4. The entire website will instantly switch to your chosen language

### For Developers

#### Adding Translations to Components

```jsx
import { useTranslation } from './hooks/useTranslation';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t.welcomeTitle}</h1>
      <p>{t.welcomeSubtitle}</p>
      <button>{t.exploreButton}</button>
    </div>
  );
};
```

#### Adding New Translation Keys

1. **Add to English file** (`src/translations/en.js`):
```javascript
export const en = {
  // ... existing translations
  newKey: "New English Text",
};
```

2. **Add to Sinhala file** (`src/translations/si.js`):
```javascript
export const si = {
  // ... existing translations
  newKey: "නව සිංහල පාඨය",
};
```

3. **Add to Korean file** (`src/translations/ko.js`):
```javascript
export const ko = {
  // ... existing translations
  newKey: "새로운 한국어 텍스트",
};
```

4. **Add to Italian file** (`src/translations/it.js`):
```javascript
export const it = {
  // ... existing translations
  newKey: "Nuovo testo italiano",
};
```

#### Programmatically Change Language

```jsx
import { useTranslation } from './hooks/useTranslation';

const LanguageSwitcher = () => {
  const { changeLanguage } = useTranslation();
  
  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode); // 'en', 'si', 'ko', 'it'
  };
  
  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('si')}>සිංහල</button>
      <button onClick={() => handleLanguageChange('ko')}>한국어</button>
      <button onClick={() => handleLanguageChange('it')}>Italiano</button>
    </div>
  );
};
```

## File Structure

```
src/
├── contexts/
│   └── LanguageContext.js          # React Context for language state
├── hooks/
│   └── useTranslation.js           # Custom hook for easy translation access
├── translations/
│   ├── index.js                    # Translation utilities
│   ├── en.js                       # English translations
│   ├── si.js                       # Sinhala translations
│   ├── ko.js                       # Korean translations
│   └── it.js                       # Italian translations
└── components/
    ├── LanguageSelector.js         # Language dropdown component
    └── LanguageSelector.css        # Styles for language selector
```

## Available Translation Keys

### Navigation
- `home` - Home page link
- `about` - About page link
- `tours` - Tours page link
- `deals` - Deals page link
- `testimonials` - Testimonials page link
- `blog` - Blog page link
- `contact` - Contact page link

### Company
- `companyName` - Company name

### Home Page
- `welcomeTitle` - Welcome title
- `welcomeSubtitle` - Welcome subtitle
- `exploreButton` - Explore tours button
- `learnMoreButton` - Learn more button

### About Page
- `aboutTitle` - About page title
- `aboutSubtitle` - About page subtitle
- `aboutDescription` - About page description

### Tours Page
- `toursTitle` - Tours page title
- `toursSubtitle` - Tours page subtitle
- `bookNow` - Book now button
- `viewDetails` - View details button

### Contact Page
- `contactTitle` - Contact page title
- `contactSubtitle` - Contact page subtitle
- `name` - Name field label
- `email` - Email field label
- `message` - Message field label
- `send` - Send message button
- `phone` - Phone field label
- `address` - Address field label

### Testimonials
- `testimonialsTitle` - Testimonials page title
- `testimonialsSubtitle` - Testimonials page subtitle

### Blog
- `blogTitle` - Blog page title
- `blogSubtitle` - Blog page subtitle
- `readMore` - Read more button

### Common
- `loading` - Loading text
- `error` - Error message
- `success` - Success message
- `close` - Close button
- `submit` - Submit button
- `cancel` - Cancel button

### Language Selector
- `selectLanguage` - Language selector accessibility label
- `english` - English language name
- `sinhala` - Sinhala language name
- `korean` - Korean language name
- `italian` - Italian language name

## Best Practices

1. **Always use translation keys** instead of hardcoded text
2. **Keep translation keys descriptive** and organized by feature
3. **Add new translations to all language files** when adding new content
4. **Test the UI** with different languages to ensure proper text wrapping
5. **Consider text length** - some languages may be longer than others

## Browser Support

The language selector uses modern CSS features like `backdrop-filter` and CSS Grid. For older browsers, the functionality will still work but may not have the same visual effects.

## Performance

- Translations are loaded synchronously for instant switching
- No additional network requests required
- Minimal bundle size impact
- React Context ensures efficient re-renders only when language changes
