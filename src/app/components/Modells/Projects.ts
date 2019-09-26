/**
 * Created by tisamo on 2019. 09. 18..
 */
export class Project {
  constructor(id: number, name: string, image: string, description: string, video: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.video = video;
  }

  id: number;
  name: string;
  image: string;
  description: string;
  video: string;
}
