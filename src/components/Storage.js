import batmanPoster from "../images/batman.jpg"
import topGunPoster from "../images/topgun.jpg"
import thorPoster from "../images/thorthunder.jpg"

export const storage = [
    {
        "id": 1,
        "key": 1,
        "title": "The Batman",
        "description": "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        "released": 2022,
        "image": batmanPoster,
        "reviews": [
         {
            "stars": 3,
            "comment": "Quite amazing!"
          }
        ]
      },

      {
        "id": 2,
        "key": 2,
        "title": "Top Gun Maverick",
        "description": "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground",
        "released": 2022,
        "image": topGunPoster,
        "reviews": [
         {
            "stars": 5,
            "comment": "Great Movie"
          }
        ]
      },

      {
        "id": 3,
        "key": 3,
        "title": "Thor Love and Thunder",
        "description": "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
        "released": 2022,
        "image": thorPoster,
        "reviews": [
         {
            "stars": 4,
            "comment": "I loved it!"
          }
        ]
      }
]