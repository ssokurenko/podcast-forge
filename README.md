# Podcast Forge

An elegant video creation tool for transforming book discussions and podcast content into beautifully animated audiograms. Podcast Forge combines audio analysis, dynamic visualizations, and professional typography to create engaging video content perfect for social media sharing.

## Project Overview

Podcast Forge leverages Remotion, a React-based video composition library, to generate high-quality audiogram videos from podcast episodes. The application features:

- **Real-time Audio Visualization**: Spectrum analyzer or oscilloscope animations that respond to audio content
- **Dynamic Captions**: Synchronized subtitles with customizable styling and display options
- **Professional Layout**: Book cover display with podcast information and synchronized audio visualization
- **Flexible Configuration**: Easy customization of colors, fonts, opacity levels, and timing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

```bash
npm install
```

## Operating Podcast Forge

### Step 1: Prepare Your Media Files

Replace the default files in the `public/` directory with your own content:

- **`audio.m4a`** - Your podcast episode or audio file (MP4A audio format)
- **`cover.jpg`** - The book cover image (JPEG format)
- **`subtitles.srt`** - Subtitle file with synchronized captions (SubRip format)

Simply replace these files while keeping the same filenames and extensions.

### Step 2: Launch Remotion Studio

Start the Remotion Studio development server:

```bash
npm start
```

This opens an interactive editing interface in your browser where you can:
- Preview your video in real-time
- Adjust settings and see changes instantly
- Configure the composition parameters

### Step 3: Configure Your Podcast

In the Remotion Studio UI, update these essential settings:

- **`podcastName`** - The name of your podcast (e.g., "Deep Book Reviews")
- **`titleText`** - The book title being discussed (e.g., "The Elegant Universe")
- **`titleColor`** - Hex color for the title text (e.g., "#0a66c2")
- **`backgroundColor`** - Background color (default: "white")
- **`audioVisualizationOpacity`** - Transparency of the visualization (0-1, default: 0.3)
- **`silenceDurationSeconds`** - Length of silence at the end (default: 5 seconds)
- **`podcastNameOpacity`** - Transparency of the podcast name (0-1, default: 0.5)

You can also adjust:
- Visualizer type (spectrum or oscilloscope)
- Visualization colors
- Caption appearance and behavior
- Audio offset timing

### Step 4: Render Your Video

Once you're satisfied with the preview, render the final video:

```bash
npm run build
```

The rendering process will begin and create your final MP4 video file.

## Output

Your rendered video will be located in:

```
out/Audiogram.mp4
```

This high-quality video is ready for sharing on social media, YouTube, podcasting platforms, or any other distribution channel.

## Features

- **Synchronized Captions**: Real-time subtitle display that matches your audio
- **Dynamic Visualization**: Audio-reactive animations that respond to your podcast's audio
- **Professional Styling**: Customizable typography, colors, and layout
- **Flexible Timing**: Configurable silence duration and audio offset
- **High Quality Output**: 1080p resolution video suitable for all platforms

## Tips for Best Results

1. **Audio Quality**: Ensure your audio file is clear and well-normalized
2. **Subtitles**: Use precise subtitle timing for better synchronization
3. **Colors**: Test your color choices in Remotion Studio before rendering
4. **Book Cover**: Use high-resolution cover images for best visual quality
5. **Duration**: Keep silence duration reasonable (3-8 seconds) for pacing
