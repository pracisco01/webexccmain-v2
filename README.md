# Webex Click-to-Call Demo with Enhanced UI

A modern, responsive web application that demonstrates Webex Calling capabilities with an improved user interface and enhanced user experience.

## Features

- **Responsive Design**
  - Optimized for desktop, tablet, and mobile devices
  - Consistent layout and spacing across all form factors
  - Adaptive header and form elements

- **Enhanced UI Components**
  - Modern form controls with consistent sizing
  - Improved button styling and positioning
  - Responsive header with logo and user dropdown
  - Clean and professional contact form layout

- **Webex Calling Integration**
  - Click-to-call functionality
  - Call history tracking
  - Real-time call status indicators
  - Support for incoming and outgoing calls

## Recent Improvements

- **Header Optimization**
  - Consistent header height (80px) across all devices
  - Proper logo and avatar alignment
  - Responsive padding adjustments for different screen sizes

- **Form Enhancements**
  - Uniform input field sizes
  - Consistent spacing and margins
  - Improved button alignment
  - Better form validation feedback

- **Responsive Breakpoints**
  - Desktop (>1024px): Full-width layout with optimal spacing
  - Tablet (768px-1024px): Adjusted form controls and header
  - Mobile (<768px): Compact layout with touch-friendly elements

## Project Structure

```
├── css/
│   ├── webcallstyles1.css    # Main stylesheet with responsive design
│   └── style.css             # Additional styles
├── js/
│   ├── webcallscript.js      # Webex Calling integration
│   └── script.js             # Application logic
├── images/                   # Assets and icons
├── webcall.html             # Main application page
└── README.md                # Project documentation
```

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Configure the application:
   - Update `service_app_token` in `js/app.js` with your Webex access token
   - Set `calledNumber` with your destination number
4. Start the development server:
   ```bash
   yarn start
   ```
5. Access the application at [http://127.0.0.1:9000](http://127.0.0.1:9000)

## Usage

1. Navigate to the application
2. Wait for the green circle icon next to the avatar (indicates Webex Calling registration)
3. Use the contact form to send messages
4. Click "Call Support" to initiate a call

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contact & Support

### Webex Support Spaces
- Webex SDK Contributors - https://eurl.io/#v-LbYXL27
- Chrome extension support space - https://eurl.io/#YbnG_BwcN

### Developer Resources
- [Developer Support](https://developer.webex.com/support)
- [Developer Community](https://community.cisco.com/t5/webex-for-developers/bd-p/disc-webex-developers)
- [GitHub Repository Issues](https://github.com/webex/webex-js-sdk/issues)
- Email: devsupport@webex.com

## Documentation

### Webex SDK Resources
- [Github Wiki](https://github.com/webex/webex-js-sdk/wiki)
- [Webex Web Calling SDK](https://github.com/webex/webex-js-sdk/wiki/Introducing-the-Webex-Web-Calling-SDK)
- [Core Concepts](https://github.com/webex/webex-js-sdk/wiki/Core-Concepts-(Calling))
- [Quickstart Guide](https://github.com/webex/webex-js-sdk/wiki/Quickstart-Guide-(Calling))

## License

This project is licensed under the MIT License - see the LICENSE file for details.
