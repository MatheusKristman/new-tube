interface PlaylistThumbnailProps {
  title: string;
  videoCount: number;
  className?: string;
  imageUrl?: string | null;
}

// TODO: 8:31:41

export const PlaylistThumbnail = ({ title, videoCount, className, imageUrl }: PlaylistThumbnailProps) => {
  return (
    <div>
      <div>PlaylistThumbnail</div>
    </div>
  );
};
