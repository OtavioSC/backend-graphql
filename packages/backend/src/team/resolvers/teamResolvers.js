import {Teams} from '../../../data/mongoConnection.js'

const teamResolvers={
    Query:{
            teams:(root)=>{
                return new Promise((resolve,reject)=>{
                    Teams.find((err,teams)=>{
                        err ? reject(err) : resolve(teams);
                    })
                })
            },
            teamById:(root,{id})=>{
                return new Promise((resolve,reject)=>{
                    Teams.findOne({_id:id},(err,teams)=>{
                        err ? reject(err) : resolve(teams);
                })
            })
        }
    },
    Mutation:{
        createFriend: (root,{ input }) => {
            const team = new Teams({
                name: input.name,
                country: input.country,
                language: input.language,
                age: input.age
            });

            team.id=team._id;

            return new Promise((resolve,reject)=>{
                team.save((err)=>{
                    err ? reject(err) : resolve(team);
                })
            })
        },
    },
};
module.exports = teamResolvers;