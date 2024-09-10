import { v4 as uuidv4 } from 'uuid';
import type { Video } from '../../interfaces/Video.Interface';
export const VIDEOS: Video[] = [
  {
    id: uuidv4(),
    title: 'First video',
    description: 'A brief description of the blog post content. Click to read more.',
    src: './images/videos/1-.webp',
    image: './images/videos/1-.webp'
  },
  {
    id: uuidv4(),
    title: 'Second video',
    description: 'A brief description of the blog post content. Click to read more.',
    src: './images/videos/2-.webp',
    image: './images/videos/2-.webp'
  },
  {
    id: uuidv4(),
    title: 'Third video',
    description: 'A brief description of the blog post content. Click to read more.',
    src: './images/videos/3-.webp',
    image: './images/videos/3-.webp'
  },
  {
    id: uuidv4(),
    title: 'Four video',
    description: 'A brief description of the blog post content. Click to read more.',
    src: './images/videos/4-.webp',
    image: './images/videos/4-.webp'
  },
  {
    id: uuidv4(),
    title: 'Five video',
    description: 'A brief description of the blog post content. Click to read more.',
    src: './images/videos/5-.webp',
    image: './images/videos/5-.webp'
  },
  {
    id: uuidv4(),
    title: 'Six video',
    description: 'A brief description of the blog post content. Click to read more.',
    src: './images/videos/6-.webp',
    image: './images/videos/6-.webp'
  },
  {
    id: uuidv4(),
    title: 'Seven video',
    description: 'A brief description of the blog post content. Click to read more.',
    src: './images/videos/7-.webp',
    image: './images/videos/7-.webp'
  },
  {
    id: uuidv4(),
    title: 'Eight video',
    description: 'A brief description of the blog post content. Click to read more.',
    src: './images/videos/8-.webp',
    image: './images/videos/8-.webp'
  },
  {
    id: uuidv4(),
    title: 'Nine video',
    description: 'A brief description of the blog post content. Click to read more.',
    src: './images/videos/9-.webp',
    image: './images/videos/9-.webp'
  }
];
