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
        createTeam: (root,{ input }, {mongoData}) => { // db.{database}.insertOne()
        },
        updateTeam: (root,{ input }, {mongoData}) => { // db.{database}.update() 
        },
        deleteTeam: (root,{ input }, {mongoData}) => { // db.{database}.remove()
        }
    },
};

module.exports = teamResolvers;